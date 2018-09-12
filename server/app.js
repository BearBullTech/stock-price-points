const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const database = require('../database/index.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));


app.get('/', (req, res) => {
  database.Company.find({}, 'company weeks', (err, result) => {
    if (err) {
      return console.log('CALLBACK ERROR!');
    }
    return res.json(result);
  });
});

app.get('/data/company/:company', (req, res) => {
  const { company } = req.params;

  database.Company.find({ company }, null, (err, result) => {
    if (err) {
      return console.log('CALLBACK ERROR!');
    }
    console.log(req.params);
    return res.json(result);
  });
});

app.get('/data/id/:id', (req, res) => {
  const { id } = req.params;

  database.Company.find({ _id: id }).find((err, result) => {
    if (err) {
      return console.log('CALLBACK ERROR!');
    }
    console.log(req.params);
    return res.json(result);
  });
});

module.exports = {
  app,
};
