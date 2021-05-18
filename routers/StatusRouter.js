const express = require('express');
const { StatusController } = require('../controllers');
const router = express.Router();

router.post('/status', StatusController.create);

router.get('/status', StatusController.findAll);

router.get('/status/:idStatus', StatusController.findOneById);

router.patch('/status/:idStatus', StatusController.updateOneById);

router.delete('/status/:idStatus', StatusController.deleteOneById);

module.exports = router;
