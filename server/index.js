const express = require('express');
const bodyParser = require('body-parser');
const models = require('../database/models.js');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get('/mainbody', (req, res) => {
  const { query } = req;
  // console.log('query is : ', query);
  models.getOne(query, (err, data) => {
    if (err) {
      // console.log('error: ', err);
      res.status(404).send(err);
    } else {
      // console.log('returned data: ', data);
      res.status(200).send(data);
    }
  });
});

module.exports = app;
