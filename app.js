const express = require('express');
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const path = require('path');
// const userRouter = require('./routes/user')
const wikiRouter = require('./routes/wiki')
const models = require('./models');

server.use(morgan('dev'));
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
// server.use('/user', userRouter);
server.use('/wiki', wikiRouter);

server.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

const PORT = 1337;

const init = async () => {
  await models.db.sync({force: true});

  server.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });
}

init();


