const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/routes");
const logger = require("./logger/logger.js");
const response = require("./responses/response");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

global.snackMsg = {
  data: "Connect with LDrago and schedule meet...",
};

app.use("/", router);

app.set("view engine", "ejs");

global.response = response;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/aboutus", (req, res) => {
  res.render("aboutus.ejs");
});

app.get("/ourworks", (req, res) => {
  res.render("our_works", { path: "/ourworks" });
});
app.get("/connect", (req, res) => {
  res.render("connect.ejs", snackMsg);
});

app.listen(process.env.PORT || 80, () => {
  wLogger.info(`Server Listening at port `);
});
