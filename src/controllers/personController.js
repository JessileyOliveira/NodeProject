const PersonModel = require('../models/personModel');

exports.menssage = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.get = (req, res, next) => {
    res.status(200).send('teste');
};

exports.insertLanguage = (req, res, next) => {
    var body = req.body;
    console.log(body);
	PersonModel.create(body, (err, data) => {
        if (err) {
            return  res.status(500).json({ error: true, data: err });
        }
        return  res.status(201).json({ error: false, data: data });
    });
};