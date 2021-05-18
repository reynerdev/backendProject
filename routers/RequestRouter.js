const express = require('express');
const router = express.Router();
const { RequestController } = require('../controllers');

router.get('/request', RequestController.findAll);

router.post('/request', RequestController.create);

router.get('/request/:idRequest', RequestController.findOneById);

router.patch('/request/:requestId', RequestController.updateOneById);

router.delete('/request/:requestId', RequestController.deleteOneById);

router.post('/request/:idRequest/finish', RequestController.setToComplete);

router.get('/request/:idUser/:idClient', RequestController.findAllRequest);

// router.patch(
//   '/request/:idUser/:idClient',
//   RequestController.updateRequestByUserIdByClientId
// );

router.get('/request/:idUser', RequestController.findAllRequestFromOneUser);

router.get('/request/:idClient', RequestController.findAllRequestFromOneClient);

module.exports = router;
