const playerModel = require('../models/manyToMany/playerModel')
const sportsModule = require('../models/manyToMany/sportsModule')
const playerSportsModel = require('../models/manyToMany/playerSportsModel')

async function getList() {
    try {
        const list = await playerModel.findAll();
        if (list.length > 0) {
            return list
        } else {
            return 'No data available'
        }
    } catch (error) {
        return "Error while fetching the player details"
    }
}

async function addPlayer(playerDetails) {
    const { playerName, sports } = playerDetails;
    try {
        let player = await playerModel.findOne({ where: { playerName : playerName }})
        if (!player) {
            player = await playerModel.create({
                playerName : playerName
            })
        }

        sports.forEach(async sport => {
            let sportDetails = await sportsModule.findOne({ where: { sportName: sport} });
            if (!sportDetails) {
                sportDetails = await sportsModule.create({
                    sportName :  sport
                })
            }
            await playerSportsModel.create({
                sport_id: sportDetails.sportId,
                player_id: player.playerId
            });
        });
        return "Player details added successfully."
    } catch (error) {
        console.log('Error',error)
    }
}

module.exports = {
    getList,
    addPlayer
}