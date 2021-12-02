const express = require('express');
var app = express();
const config = require('./config/config');
const models = fs.readdirSync(config.rootPath + '/app/models');
models.forEach((model) => {
    require(config.rootPath + '/app/models/' + model);
});
const routes = require('../app/routes/index');

app.use('/', routes);

module.exports = function (app, config) {
    try {
        mongoose.connect(
            config.dbURL,//url needs to be put here
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log(" Mongoose is connected")
        );
    } catch (e) {
        console.log("could not connect");
    }
    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => logger.log("Connected to DB!"));
}

app.use(express.static(config.rootPath + '/public'));

if (process.env.NODE_ENV === 'development') {//not sure where this belongs
    app.use(morgan('dev'));
}

app.use(function (req, res, next) {
    console.log('Request from ' + req.connection.remoteAddress);
    next();
});

app.use(function (req, res) {
    res.type('text/plan');
    res.status(404);
    res.send('The resource you requested cannot be found');
});
app.use(function (err, req, res, next) {
    console.log(err);
    if (process.env.NODE_ENV !== 'test') console.log(err.stack,'error');
    res.type('text/plan');
    if (err.status) {
        res.status(err.status).send(err.message);
    } else {
        res.status(500).send('500 Sever Error');
    }
});
console.log("Starting application");



