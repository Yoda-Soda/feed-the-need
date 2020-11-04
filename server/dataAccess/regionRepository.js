const pool = require("../db");
const createNewRegion = async (city, suburb) => {
  const newRegion = await pool.query(
    `INSERT INTO region (cities,suburb) values ( $1, $2 )`,
    [city, suburb]
  );
};
module.export = { createNewRegion };
