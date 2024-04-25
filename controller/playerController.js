const { request, response } = require('express')
const playerDao = require('../dao/playerDao')

module.exports = {
    getList: async (request, response) => {
        const result = await playerDao.getList();
        response.send(result)
    },
    addPlayer: async (request, response) => {
        const playerDetails =  request.body
        const result = await playerDao.addPlayer(playerDetails);
        response.send(result)
    }
}