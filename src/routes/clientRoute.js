const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController')
router.post('/', controller.getClient);
router.post('/insert', controller.insertClient)
module.exports = router;