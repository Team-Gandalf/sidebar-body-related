const express = require("express");
const path = require("path");
const models = require("../database/models.js")

const app = express();

var hostname = 'localhost';
var port = 1991;

app.get("/", (req, res) => {
  models.saveInfo();
  models.saveRelated();
  res.send("info and related generated")
  res.sendStatus(200);
  res.end()
})

app.get("/mainbody", (req, res) => {
    models.getAll( (err, data) => {
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