const pool = require("../db")

const claimListing = async (listingId, claimantId)  => {
    const dbResult = await pool.query(
        `UPDATE list SET claimant_id = $2, date_claimed = CURRENT_TIMESTAMP WHERE id = $1 RETURNING id listing_id, claimant_id;`,
        [listingId, claimantId]
      );
      return dbResult;
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

// get a listing
const createNewListing = async (donor_id, title, description) => {
  const newlisting = await pool.query(
    `INSERT INTO list (donor_id, title, description) values ( $1, $2, $3 )`,
    [donor_id, title, description]
  );
}

// get all listings
const getAllListings = async () => {
  const listingsQuery = await pool.query(
    `SELECT     list.id,
                user_account.email,
                list.title,
                list.description,
                list.date_created as "dateCreated"
                
    FROM        list
    INNER JOIN  user_account
    ON  user_account.id = list.donor_id
    WHERE claimant_id is NULL
    ORDER BY list.date_created DESC;`
  );
  return listingsQuery;
}

module.exports = { claimListing, getDonatorEmailByListingId, createNewListing, getAllListings }