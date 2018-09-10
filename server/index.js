const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const database = require('../database/index.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.get('/data', (req, res) => {
  database.Company.find({ company: 'Trantow - Zieme' }).find((err, result) => {
    if (err) {
      return console.log('CALLBACK ERROR!');
    }
    return res.json(result);
  });
});

const PORT = 3002 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
