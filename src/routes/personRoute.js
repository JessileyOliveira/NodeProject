const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')
router.post('/', controller.get);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.post('/test', controller.insertLanguage)
module.exports = router;