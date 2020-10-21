const express = require("express");
const app = express.Router();
const listingRouter = require("./subRouter/listingRouter");

/****  listings  ****/

app.use("/listings", listingRouter);

module.exports = app;
