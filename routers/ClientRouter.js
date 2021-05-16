const express = require('express')
const router = express.Router()
const {ClientValidator} = require('../validators')
const {ClientController} = require('../controllers')



router.post('/user',ClientValidator.create,ClientController.create)
