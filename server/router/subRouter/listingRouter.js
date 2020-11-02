const express = require("express");
const app = express.Router();
const pool = require("../../db");
const { isPositiveInt } = require("../router_utilities/is_positive_integer");
const { claimListing , getDonatorEmailByListingId, createNewListing, getAllListings, getOneListing } = require("../../dataAccess/listingsRepository");
const { getUserIdByEmail } = require("../../dataAccess/userRepository");
const {notifyListingParticipants} = require("../../emailsender/emailsender");

/****  post /api/listings - post single listing  ****/
app.post("/", async (req, res) => {
  try {
    //console.log(req.user);
    const email = req.user[`http://feedtheneed.click/email`];
    const { donor_id, title, description } = req.body;
    if (
      donor_id === undefined ||
      title === undefined ||
      description === undefined
    ) {
      return res.status(400).send("Bad Request - missing parameter/s");
    }
    if (!isPositiveInt(donor_id)) {
      return res.status(400).send("Bad Request - donor_id is not positiveInt");
    }
    console.log(getUserIdByEmail);
//This has been refactored to userRepository
     const userId = await getUserIdByEmail(email);
    
     // create new listing
    createNewListing(donor_id, title, description);

    res.status(201).json("OK - list was updated");
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

/****  get /api/listings - get all listing in newest first  ****/
app.get("/", async (req, res) => {
  try {
    // get all listings
    const result = await getAllListings();
   
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    return res.statusCode(500);
  }
});

/****  Get One request /api/listings/{id} ****/

app.get("/:id", async (req, res) => {
  console.log("get one route confirmed");

  try {
    const { id } = req.params;
    console.log(id);
    if (!isPositiveInt(id)) {
      return res.status(400).send("Bad Request - id is not a positiveInt");
    }

    // get one listing
    const singleListing = await getOneListing(id);  

    if (singleListing.rowCount == 0) {
      return res.status(404).send("No listing exists with that Id");
    }

    res.json(singleListing.rows[0]);
    // console.log(singleListing.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});
//CGP-50

// claim a listing
app.patch("/:id", async (req, res) => {
  
  // listing id
  const listingId = req.params.id;
  const donateeEmail = req.user[`http://feedtheneed.click/email`];
  console.log(req.user[`http://feedtheneed.click/email`])

  // if any of the fields are missing, send error
  if ( listingId === undefined ||  donateeEmail === undefined ) {
    return res.status(400).send("Bad Request - missing parameter/s");
  }
  // if any fields ( ie client ID field) are invalid send error
  // don't need to check email field as it will be reliable, from Auth0
  if (!isPositiveInt(listingId)) {
    return res.status(400).send("Bad Request - id is not a positiveInt");
  }
  
  try {
    // get the claimant ID from the claimer user's email
    let claimantId = await getUserIdByEmail(donateeEmail);
    console.log(claimantId)

    const resultFromDb = await claimListing(listingId, claimantId);
    // actually, need to check if there is a db rows result returned on success, otherwise SQL will still send you an "okay"
    // for updating non-existent items
    if (resultFromDb.rowCount == 0) {           
      return res.status(404).send("Not Found");
    }
   
    const donatorEmail = await getDonatorEmailByListingId(listingId)
  
    notifyListingParticipants(donatorEmail, donateeEmail);
    return res.status(200).send("OK - list was updated" );
  } catch (err) {    
    console.error(err.message);
    return res.status(500).send("Could not claim item");
  }
});

app.get("/:id", async (req, res) => {
  console.log("Sending email between donor and claimant");
  try {
    const { id } = req.params;
    console.log(id);
    if (!isPositiveInt(id)) {
      return res
        .status(400)
        .send("Can't email regarding listing- id is not a positiveInt");
    }
    const singleListing = await pool.query(
      `SELECT id, donor_id as "donorId", title, description, date_created as "dateCreated"
      FROM list WHERE id = $1`,
      [id]
    );
    if (singleListing.rowCount == 0) {
      return res.status(404).send("No listing exists with that Id");
    }
    res.json(singleListing.rows[0]);
    // console.log(singleListing.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

module.exports = app;
