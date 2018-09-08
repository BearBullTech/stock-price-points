const express = require('express');
const bodyParser = require('body-parser');
// const logger = require('morgan');
const database = require('../database/index.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(logger('dev'));

app.get('/data', (req, res) => {
  database.Company.find({}).find((err, result) => {
    if (err) {
      console.log('CALLBACK ERROR!');
    } else {
      res.send(result);
    }
  });
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
