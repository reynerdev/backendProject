const express = require('express');
const router = express.Router();
const { SkillController } = require('../controllers');
// status 200 ya viene por default. No es necesario colocar
router.get('/skill', SkillController.findAll);
router.post('/skill', SkillController.createSkill);

module.exports = router;
