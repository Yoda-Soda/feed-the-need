const express = require("express");
const app = express();
const port = process.env.EXPRESS_PORT || 5000;
const jwtCheck = require("./jwt-check");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const apiRouter = require("./router/api_router");
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(jwtCheck); //middleware will check all routes for auth
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
