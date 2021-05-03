const express = require('express');
const router = express.Router();

// status 200 ya viene por default. No es necesario colocar

router.get('/skill', (req, res) => res.status(200).json({ skill: [] }));

module.exports = router;
