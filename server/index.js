const express = require("express");
const app = express();
const port = process.env.EXPRESS_PORT || 5000;
app.get("/", (req, res) => {
  res.send(
    "Hello Kelly, Katie, Dave, Jan, Mike. Good luck with the Sausage Roll TEamwork!"
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
