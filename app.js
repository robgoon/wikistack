const express = require('express');
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const path = require('path');
// const routes = require('./routes') //enable later
const models = require('./models');

server.use(morgan('dev'));
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
// server.use(routes); //enable later

server.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 1337;

const init = async () => {
  await models.db.sync({force: true});

  server.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });
}

init();


