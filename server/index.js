const express = require("express");
const path = require("path");
const models = require("../database/models.js")
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


var hostname = 'localhost';
var port = 1991;

app.get("/mainbody", (req, res) => {
  let query = req.body.name
  models.getOne(query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
