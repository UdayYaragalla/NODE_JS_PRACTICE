const countryDao = require('../dao/countryDao')

module.exports = {
    getList: async (request, response) => {
        const users = await countryDao.getList();
        response.send(users)
    },
    addCountry: async (request, response) => {
        const countryObj = request.body
        console.log("===================================", countryObj)
        const result = await countryDao.addCountry(countryObj);
        response.send(result)
    },
}