const express = require('express');
const config = require('./config/config');//config location that contains the environment including url
const routes = require('../app/routes/index');//This is referencing itself
var app = express();

app.use(express.static(config.rootPath + '/public'));

app.use(express.json());

app.use('/', routes);

require('./config/express')(app, config); require('http').createServer(app).listen(config.port, function () {
    console.log("HTTP Server listening on port: ", config.port);
});

module.exports = app;