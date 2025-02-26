const exp = require("constants");
const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const webRoutes = require("./routes/web");
const { config } = require("dotenv");
const configViewEngine = require("./config/viewEngine");
const conection = require("./config/database");
const port = process.env.PORT || 8081;
const hostname = process.env.Host_Name;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
configViewEngine(app);
app.use("/", webRoutes);
conection.query(`select * from Users`, function (err, results, fields) {
  console.log(results);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
