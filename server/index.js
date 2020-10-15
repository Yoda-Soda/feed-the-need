const express = require("express");
const app = express();
const port = process.env.EXPRESS_PORT || 5000;
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const apiRouter = require("./router/api_router");
app.use(express.json());

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://yodasoda.au.auth0.com/.well-known/jwks.json",
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_URL,
  algorithms: ["RS256"],
});

app.use(jwtCheck); //middleware will check all routes for auth
app.use("/api", apiRouter);
app.get("/", (req, res) => {
  res.send(
    "Hello Kelly, Katie, Dave, Jan, Mike. Good luck with the Sausage Roll TEamwork!"
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
