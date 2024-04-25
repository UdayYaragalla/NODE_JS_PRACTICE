const express = require('express')
const route = express.Router();
const studentController = require('../controller/studentController')

route.get('/', studentController.getList)
route.post('/', studentController.addStudent)

module.exports = route

