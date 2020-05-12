const express = require("express");
const path = require("path");
const models = require("../database/models.js");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());

app.get("/mainbody", (req, res) => {
  let query = req.query;
  console.log("query is : ", query);
  models.getOne(query, (err, data) => {
    if (err) {
      console.log("err log: ", err);
      res.status(404).send(err);
    } else {
      console.log("else log: ", data);
      res.status(200).send(data);
    }
  });
});

app.get("/related-content", (req, res) => {
  models.getRelatedContent((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = app;
