const pool = require("../db")

const claimListing = async (listingId, claimantId)  => {
    const dbResult = await pool.query(
        `UPDATE list SET claimant_id = $2, date_claimed = CURRENT_TIMESTAMP WHERE id = $1 RETURNING id listing_id, claimant_id;`,
        [listingId, claimantId]
      );
}

const getDonatorEmailByListingId = async (listingId)  => {
    const dbResult = await pool.query(
        `SELECT u.email from list l 
        INNER JOIN user_account u  
        on l.donor_id = u.id
        where l.id = $1`,
        [listingId]
      );
      return dbResult.rows[0].email;
}

module.exports = { claimListing, getDonatorEmailByListingId }