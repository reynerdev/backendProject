const express = require('express');
const router = express.Router();
const SkillRouter = require('./SkillRouter');
const UserRouter = require('./UserRouter');
const ClientRouter = require('./ClientRouter');
const RequestRouter = require('./RequestRouter');
const StatusRouter = require('./StatusRouter');
// router.get('/rental', (req, res) => res.status(200).json({ rental: [] }));

router.use(SkillRouter);
router.use(UserRouter);
router.use(ClientRouter);
router.use(RequestRouter);
router.use(StatusRouter);

module.exports = router;
