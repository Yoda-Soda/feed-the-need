const express = require("express");
const app = express();
const port = process.env.EXPRESS_PORT || 5000;
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = yaml.safeLoad(
  fs.readFileSync(path.join(__dirname, "/openapi.yml"), "utf8"));
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

app.use("/api", apiRouter);
app.use(jwtCheck); //middleware will check all routes for auth

app.get("/", (req, res) => {
  res.send(
    "Hello Kelly, Katie, Dave, Jan, Mike. Good luck with the Sausage Roll TEamwork!"
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});






            
          
              