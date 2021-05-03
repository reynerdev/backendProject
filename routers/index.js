const express = require('express');
const router = express.Router();
const SkillRouter = require('./SkillRouter');
const UserRouter = require('./UserRouter');
// router.get('/rental', (req, res) => res.status(200).json({ rental: [] }));

router.use(SkillRouter);
router.use(UserRouter);

module.exports = router;
