const express = require('express');
const routes = require('./routes/index');
const morgan = require('morgan');
const fileupload = require('express-fileupload');

const server = express();

server.name = 'API';
server.use(fileupload());
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // handle OPTIONS method
    if ('OPTIONS' == req.method) {
        return res.sendStatus(200);
    } else {
        next();
    }
  });

  server.use(express.static('userpics'));

  server.use('/', routes);

  server.use((err, req, res, next) => { 
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

  module.exports = server;