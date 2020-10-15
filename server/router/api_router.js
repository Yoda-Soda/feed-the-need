const express = require("express");
const app = express.Router();
const pool = require("../db");

app.post("/listings", async (req, res) => {
    const { donor_id, title, description } = req.body;
    try {
      const newlisting = await pool.query(
        `INSERT INTO list (donor_id, title, description) values ( $1, $2, $3 )`,
        [ donor_id, title, description ]
      );
      res.status(200).json("List was updated");
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  });

  app.get("/listings", async (req, res) => {
    try {
      const oldlisting = await pool.query(
        `SELECT donor_id, title, description  FROM list`
      );
      return res.json(oldlisting.rows);
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  });
  

  module.exports = app;

  