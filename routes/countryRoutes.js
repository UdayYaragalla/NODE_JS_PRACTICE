const express = require('express')
const countryRoute = express.Router();
const countryController = require('../controller/countryController')

countryRoute.get('/', countryController.getList)
countryRoute.post('/', countryController.addCountry)

module.exports = countryRoute