const { Pool } = require("pg");
var types = require('pg').types
//pg won't cast by default as may lose precision.
types.setTypeParser(1700, function(val) {
  return parseFloat(val)
});

const pool = process.env.NODE_ENV === 'production' ? new Pool({connectionString: process.env.DATABASE_URL})  :  new Pool();
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
