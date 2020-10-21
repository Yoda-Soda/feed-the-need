const express = require("express");
const app = express.Router();
const pool = require("../../db");
const { isPositiveInt } = require("../router_utilities/is_positive_integer");

/****  post /api/listings - post single listing  ****/
app.post("/", async (req, res) => {
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

/****  get /api/listings - get all listing in newest first  ****/
app.get("/", async (req, res) => {
  try {
    const listingsQuery = await pool.query(
      `SELECT     list.id,
                  user_account.email,
                  list.title,
                  list.description,
                  list.date_created
      FROM        list
      INNER JOIN  user_account
              ON  user_account.id = list.donor_id
      ORDER  BY   list.date_created DESC;`
    );
    return res.status(200).json(listingsQuery.rows);
  } catch (error) {
    console.error(error);
    return res.statusCode(500);
  }
});

module.exports = app;
