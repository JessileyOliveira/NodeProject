const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:3000/Hedelen', { useNewUrlParser: true, promiseLibrary: global.Promise});
//Rotas

const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;