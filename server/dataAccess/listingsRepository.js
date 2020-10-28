const claimListing = async (listingId, claimantId)  => {

    const dbResult = await pool.query(
        `UPDATE list SET claimant_id = $2 WHERE id = $1 RETURNING listing_id, claimant_id`,
        [listingId, claimantId]
      );
}

exports.claimListing = claimListing;