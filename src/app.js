const express = require('express');
const app = express();
app.use(function (req, res, next) {
    console.log("hsgdjkllç");
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	next();
});

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Hedelen', { useMongoClient: true});
//Rotas

const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);


module.exports = app;