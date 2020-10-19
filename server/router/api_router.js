const express = require("express");
const app = express.Router();
const pool = require("../db");

const isPositiveInt = (intToBeTested) =>
  Number(intToBeTested) > 0 && Number.isInteger(Number(intToBeTested));

app.post("/listings", async (req, res) => {
  try {
    const { donor_id, title, description } = req.body;
    console.log(req.body);
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
    const newlisting = await pool.query(
      `INSERT INTO list (donor_id, title, description) values ( $1, $2, $3 )`,
      [1, title, description]
    );
    res.status(201).json("OK - list was updated");
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

// Ticket CGP-4:  Get One request /api/listings/{id}
//when I send in an ID to return,I am getting an unauthorised token message in the Swagger UI
app.get("/listings/:id", async (req, res) => {
  console.log("get one route confirmed");

  try {
    const { id } = req.params;

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
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Database access error");
  }
});

module.exports = app;
