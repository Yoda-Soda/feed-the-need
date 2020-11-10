const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const morgan = require("morgan");
const jwtCheck = require("./jwt-check");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const swaggerDocument = YAML.load(path.join(__dirname, "./swagger.yaml"));
const apiRouter = require("./router/api_router");
const cors = require("cors");
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", jwtCheck, apiRouter);


// production environment
  // serve up the folder you are currently in, slash ui
  app.use(express.static(path.join(__dirname, "ui")));

  // "for all other routes (ie client routes) do this..."
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "ui", "index.html"));
  });
// remove conditional code
// if (!process.env.NODE_ENV === "development") {  
// }

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
