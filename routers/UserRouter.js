const express = require('express');
// const UserController = require('../controllers/UserController');
// const SkillController = require('../controllers/SkillController');
const { UserController } = require('../controllers'); // No es necesario colocar index.js ya que lo asume de manera automatica
const router = express.Router();
// status 200 ya viene por default. No es necesario colocar

router.get('/user', UserController.createUser);

module.exports = router;
