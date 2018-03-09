const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const path = require('path');
// const routes = require('./routes') //enable later
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(routes); //enable later

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
