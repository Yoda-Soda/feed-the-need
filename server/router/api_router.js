const express = require("express");
const app = express.Router();
const pool = require("../db");

const isPositiveInt = (intToBeTested) =>
  intToBeTested > 0 && Number.isInteger(Number(intToBeTested));

app.post(`${"process.env.REACT_APP_API_BASE_URL/listings"}`, async (req, res) => {
  try {
    const { donor_id, title, description } = req.body;
    console.log(req.body)
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

module.exports = app;
