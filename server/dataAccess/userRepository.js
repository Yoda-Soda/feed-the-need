
  const pool = require("../db")
  const getUserIdByEmail= async (email)=>{ 
        const dbResult = await pool.query(
            `SELECT id from user_account where email = $1`,
            [email]
          );
      let userId;
    if (!dbResult.rows[0]) {
        //user does not exist, add it!
        const insertResult = await pool.query(
          `INSERT INTO user_account (email) VALUES ($1) returning id`,
          [email]
        );
        userId = insertResult.rows[0].id;
      } else {
        userId = dbResult.rows[0].id;
      }
    return userId ;
    };
module.exports = { getUserIdByEmail };