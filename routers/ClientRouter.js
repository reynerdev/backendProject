const express = require('express');
const router = express.Router();
const { ClientValidator } = require('../validators');
const { ClientController } = require('../controllers');

router.post('/client', ClientValidator.create, ClientController.createClient);

router.post('/client/login', ClientController.createClient);

router.get('/client/logout', ClientController.createClient);

router.get('/client', ClientController.createClient);

router.patch('/client/:idClient', ClientController.createClient);

module.exports = router;
