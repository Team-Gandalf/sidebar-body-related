const express = require("express");
const path = require("path");
const db = require("../database/config.js");

const app = express();

var hostname = 'localhost';
var port = 1991;

app.get("/", (req, res) => {
  db.getAll()
  res.sendStatus(200);
  res.end()
})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});