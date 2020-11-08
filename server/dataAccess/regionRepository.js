const pool = require("../db");

const createNewRegion = async (city, suburb) => {
  const newRegion = await pool.query(
    `INSERT INTO region (city,suburb) values ( $1, $2 )`,
    [city, suburb]
  );
};

module.exports = { createNewRegion };
