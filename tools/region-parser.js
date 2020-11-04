const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const { createNewRegion } = require("../server/dataAccess/regionRepository");

const startParser = async () => {
  await fs
    .createReadStream(
      path.resolve(__dirname, "./fire-and-emergency-nz-localities.csv")
    )
    .pipe(csv.parse({ headers: true }))
    .on("error", (error) => console.error(error))
    .on("data", (row) => {
      //console.log(row);
      if (row.type === "SUBURB") {
        console.log(row.city_name, "-", row.suburb_4th_order);
        //createNewRegion(row.city_name, row.suburb_4th_order);
      }
    })
    .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));
};

startParser();
