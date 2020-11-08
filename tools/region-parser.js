const { createNewRegion } = require("../server/dataAccess/regionRepository");
const Papa = require("papaparse");
const fetch = require("node-fetch");

const startParser = async () => {
  const regionResponse = await fetch(
    "http://feed-the-need-data.s3-website-ap-southeast-2.amazonaws.com/"
  ); // fetch csv todo: change fetch to a streaming download
  const regionCSV = await regionResponse.text();
  let count = 1;
  // parse into objects
  await Papa.parse(regionCSV, {
    header: true,
    step: function (row) {
      //filter object for data
      if (row.data.type === "SUBURB") {
        console.log(
          count++,
          row.data.majorlocality_name,
          "-",
          row.data.suburb_4th_order
        );
        // insert data into DB
        createNewRegion(row.data.majorlocality_name, row.data.suburb_4th_order);
      }
    },
    complete: function () {
      console.log("Parsing completed and data inserted into DB");
    },
  });
};

startParser();
