const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/api", require("./api"));
app.use(cors());

//logging middleware
app.use(volleyball);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
