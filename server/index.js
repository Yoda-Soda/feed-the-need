const express = require("express");
const app = express();
const port = process.env.EXPRESS_PORT || 5000;
const morgan = require("morgan");
const jwtCheck = require("./jwt-check");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const apiRouter = require("./router/api_router");
const cors = require("cors");

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", jwtCheck, apiRouter);
app.use('/', express.static('ui'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
