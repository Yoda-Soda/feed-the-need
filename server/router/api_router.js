const express = require("express");
const app = express.Router();
const pool = require("../db");

const isPositiveInt = (intToBeTested) =>
  Number(intToBeTested) > 0 && Number.isInteger(Number(intToBeTested));

app.post("/listings", async (req, res) => {
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
        [email]);
       
        if(!dbResult.rows[0]) {
            //user does not exist, add it!
            const insertResult = await pool.query(
                `INSERT INTO user_account (email) VALUES ($1) returning id`,
                [email]);
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

// Ticket CGP-4:  Get One request /api/listings/{id}

app.get("/listings/:id", async (req, res) => {
  console.log("get one route confirmed");

  try {
    const { id } = req.params;
    console.log(id);
    if (!isPositiveInt(id)) {
      return res.status(400).send("Bad Request - id is not a positiveInt");
    }

    const singleListing = await pool.query(`SELECT * FROM list WHERE id = $1`, [
      id,
    ]);
    if (singleListing.rowCount == [null]) {
      return res.status(404).send("No listing exists with that Id");
    }

    res.json(singleListing.rows[0]);
    // console.log(singleListing.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Database access error");
  }
});

module.exports = app;
