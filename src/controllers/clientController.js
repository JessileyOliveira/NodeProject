const ClientModel = require('../models/clientModel');


exports.getClient = (req, res, next) => {
    var body = req.body;
    console.log("aqui");
    console.log(body);
    ClientModel.find({email: body.email}, (err, data) => {
        if (err) {
            return  res.status(500).json({ error: true, data: err });
        }
        return  res.status(201).json({ error: false, data: data });
    });
};

exports.insertClient = (req, res, next) => {
    var body = req.body;
	ClientModel.create(body, (err, data) => {
        if (err) {
            return  res.status(500).json({ error: true, data: err });
        }
        return  res.status(201).json({ error: false, data: data });
    });
};