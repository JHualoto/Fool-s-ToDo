const express = require("express");
const cors = require("cors");
const path = require("path");
// const pool = require("./db");

const app = express();

//middleware
app.use(cors());
app.use(express.json()); //allows us to access the req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", require("./api"));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = app;
