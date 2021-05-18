const express = require('express');
const { UserController } = require('../controllers'); // No es necesario colocar index.js ya que lo asume de manera automatica
const router = express.Router();
// status 200 ya viene por default. No es necesario colocar
const { UserValidator, UserSkillValidator } = require('../validators');

router.post('/user', UserValidator.create, UserController.createUser);

router.get('/user', UserController.findAll);

// Get One
router.get('/user/:idUser', UserController.findOneById);

// Update One
router.patch('/user', UserController.updateOneById);

// Logic Delete
router.delete('/user/:idUser', UserController.deleteOneById);

router.post('/user/login', UserController.login);

// Get all the skills from one user
router.get('/user/:idUser/skill', UserController.findAllUserSkill);

// Add an skill to the User
router.post(
  '/user/:idUser/skill',
  UserSkillValidator.create,
  UserController.addOneUserSkill
);

// Update an specific skill from the User
router.patch('/user/:idUser/skill/:idSkill', UserController.updateOneUserSkill);

// Get an specific skill from the User
router.get('/user/:idUser/skill/:idSkill', UserController.findOneUserSkill);

router.delete(
  '/user/:idUser/skill/:idSkill',
  UserController.deleteOneUserSkill
);

module.exports = router;
