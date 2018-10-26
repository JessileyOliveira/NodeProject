const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {

	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	next();
});

// create a connection to a database
db = mongoose.createConnection('mongodb://localhost/Hedellen', { useMongoClient: true});

app.use(function(req, res, next){
	var body = req.body;
	const ClientModel = require('./models/clientModel');
	ClientModel.find({email: body.email}, (err, data) => {
        if (err) {
			 res.send(status(500).json({ error: true, data: err }));
			
		}else{
			console.log(data);
			db2 = mongoose.createConnection('mongodb://localhost/'+data[0].token.toString(), { useMongoClient: true});
			console.log(db.useDb("teste"));
			console.log("Outro");
			console.log(db.useDb(data[0].token.toString()));

			const personRoute = require('./routes/personRoute');
			const clientRoute = require('./routes/clientRoute');
			const index = require('./routes/index');

			//Rotas
			app.use('/', index);
			app.use('/persons', personRoute);
			app.use('/client', clientRoute);
			next();
		}
    });
}); 


module.exports = app;