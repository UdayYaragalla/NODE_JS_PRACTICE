const express = require('express')
const userRoute = express.Router();
const userController = require('../controller/userController')

userRoute.get('/', userController.getList)
userRoute.post('/', userController.addUser)
userRoute.put('/:userId', userController.modifyUser)
userRoute.delete('/:userId', userController.deleteUser)

module.exports = userRoute;