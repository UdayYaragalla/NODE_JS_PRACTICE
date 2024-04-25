const express = require('express')
const Router = express.Router();
const playerController = require('../controller/playerController')

Router.get('/', playerController.getList)
Router.post('/', playerController.addPlayer)

module.exports = Router