const express = require("express");
const path = require("path");
const models = require("../database/models.js")
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
next()
})



app.get("/mainbody", (req, res) => {
  let query = req.query;
  console.log("query is : ", query)
  models.getOne(query, (err, data) => {
    if (err) {
      console.log("err log: " ,err);
      res.status(404).send(err);
    } else {
      console.log("else log: ", data);
      res.status(200).send(data);
    }
  })
})

app.get("/related-content", (req, res) => {
  models.getRelatedContent( (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

module.exports = app