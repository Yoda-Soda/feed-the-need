const express = require("express");
const app = express.Router();
const pool = require("../../db");
const { isPositiveInt } = require("../router_utilities/is_positive_integer");
const { claimListing } = require("../../dataAccess/listingsRepository");

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
    let userId;
    const dbResult = await pool.query(
      `SELECT id from user_account where email = $1`,
      [email]
    );

    if (!dbResult.rows[0]) {
      //user does not exist, add it!
      const insertResult = await pool.query(
        `INSERT INTO user_account (email) VALUES ($1) returning id`,
        [email]
      );
      userId = insertResult.rows[0].id;
    } else {
      userId = dbResult.rows[0].id;
    }

    // case where no user exists!

    const newlisting = await pool.query(
      `INSERT INTO list (donor_id, title, description) values ( $1, $2, $3 )`,
      [userId, title, description]
    );
    res.status(201).json("OK - list was updated");
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

/****  get /api/listings - get all listing in newest first  ****/
app.get("/", async (req, res) => {
  try {
    const listingsQuery = await pool.query(
      `SELECT     list.id,
                  user_account.email,
                  list.title,
                  list.description,
                  list.date_created as "dateCreated"
                  
      FROM        list
      INNER JOIN  user_account
      ON  user_account.id = list.donor_id
      WHERE claimant_id is NULL
      ORDER BY list.date_created DESC;`
    );
    return res.status(200).json(listingsQuery.rows);
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

// claim a listing
app.patch("/:id", async (req, res) => {
  
  // listing id
  const listingId = req.params.id;
  const email = req.user[`http://feedtheneed.click/email`];
  console.log(req.user[`http://feedtheneed.click/email`])

  // if any of the fields are missing, send error
  if ( listingId === undefined ||  email === undefined ) {
    return res.status(400).send("Bad Request - missing parameter/s");
  }
  // if any fields ( ie client ID field) are invalid send error
  // don't need to check email field as it will be reliable, from Auth0
  if (!isPositiveInt(listingId)) {
    return res.status(400).send("Bad Request - id is not a positiveInt");
  }
  // TEMP - to be removed
  // replace this placeholder function with the real one
  const getIdByEmail = () => {
    return 1;
  }
  
  try {
    // get the claimant ID from the claimer user's email
    let claimantId = getIdByEmail(email);
    console.log(claimantId)

    await claimListing(listingId, claimantId);
    // no need to check if there is a db result, as it will be sent to catch if it fails

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
