const express = require("express");
const router = express.Router();

router.post("/listings", async (req, res) => {
    try {
      const { body } = req;
    //   const newlisting = await pool.query(
    //     "CREATE listing SET list_id = $1, donor_id = $2, date_created = $3, title = $4, description = $5 ", //Needs correct formatting still
    //     []
    //   );
  
    //   return res.json(newlisting);
    return res.status(200).send("post listings success");
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  });
  

  module.exports = router;

  