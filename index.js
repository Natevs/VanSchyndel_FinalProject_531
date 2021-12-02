const express = require('express');
const config = require('./config/config');

const app = express();

require('./config/express')(app, config);

//creates static server
require('http').createServer(app).listen(config.port, function () {
    console.log("HTTP Server listening on port: ", config.port);
});

module.exports = app;