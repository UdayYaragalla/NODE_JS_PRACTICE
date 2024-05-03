const { Player, Sports, PlayerSport } = require('../models')
require('../loggers')
const winston = require('winston')
const log = winston.loggers.get('player');
const errorLogger = winston.loggers.get('error');

async function getList() {
    try {
        const list = await Player.findAll();
        if (list.length > 0) {
            return list
        } else {
            return 'No data available'
        }
    } catch (error) {
        errorLogger.error('Error while fetching the player details', error)
        return "Error while fetching the player details"
    }
}

async function addPlayer(playerDetails) {
    const { playerName, sports } = playerDetails;
    try {
        let player = await Player.findOne({ where: { playerName: playerName } })
        if (!player) {
            log.info(`player ${playerName} is added to the list`)
            player = await Player.create({
                playerName: playerName
            })
        } else {
            log.info('Player details already added.')
        }
        const sportsUpdated = sports.forEach(async sport => {
            let sportDetails = await Sports.findOne({ where: { sportName: sport } });
            if (!sportDetails) {
                log.info(`${sportDetails} is added to the list`)
                sportDetails = await Sports.create({
                    sportName: sport
                })
            }
            await PlayerSport.create({
                sport_id: sportDetails.sportId,
                player_id: player.playerId
            });
        });

        if (player || sportsUpdated) {
            return "Player details added successfully.";
        } else {
            return "No updates made.";
        }

    } catch (error) {
        errorLogger.error('Error while adding the player details ', error)
        throw error
    }
}

module.exports = {
    getList,
    addPlayer
}