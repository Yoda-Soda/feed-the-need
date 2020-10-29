const pool = require("../db")

const claimListing = async (listingId, claimantId)  => {

    const dbResult = await pool.query(
        `UPDATE list SET claimant_id = $2, date_claimed = CURRENT_TIMESTAMP WHERE id = $1 RETURNING id listing_id, claimant_id;`,
        [listingId, claimantId]
      );
      return dbResult;
}

exports.claimListing = claimListing;