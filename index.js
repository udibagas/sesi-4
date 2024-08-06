const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const logger = require("./middlewares/logger");

app.use(logger);
app.use(express.static(path.join(__dirname, "public"))); // absolute path
app.use(express.static(path.join(__dirname, "fe"))); // absolute path
app.use(express.urlencoded({ extended: true })); // req.body (application/x-www-form-urlencoded)
app.use(express.json());
app.use(require("./routes"));

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
