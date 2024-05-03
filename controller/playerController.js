const { request, response } = require('express');
const playerDao = require('../dao/playerDao');
const winston = require('winston');
const log = winston.loggers.get('player');
const errorLogger = winston.loggers.get('error');

module.exports = {
    getList: async (request, response) => {
        try {
            log.info('getList function execution started');
            const result = await playerDao.getList();
            response.send(result);
        } catch (error) {
            errorLogger.error('Error while fetching player list', error);
            response.status(500).send('Error while fetching player list');
        }
    },
    addPlayer: async (request, response) => {
        try {
            log.info('addPlayer function execution started');
            const playerDetails = request.body;
            const result = await playerDao.addPlayer(playerDetails);
            response.send(result);
        } catch (error) {
            errorLogger.error('Error while adding player', error);
            response.status(500).send('Error while adding player');
        }
    }
};
