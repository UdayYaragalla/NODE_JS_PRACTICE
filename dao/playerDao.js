const { Player, Sports, PlayerSport } = require('../models')

async function getList() {
    try {
        const list = await Player.findAll();
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
        let player = await Player.findOne({ where: { playerName: playerName } })
        if (!player) {
            player = await Player.create({
                playerName: playerName
            })
        }

        sports.forEach(async sport => {
            let sportDetails = await Sports.findOne({ where: { sportName: sport } });
            if (!sportDetails) {
                sportDetails = await Sports.create({
                    sportName: sport
                })
            }
            await PlayerSport.create({
                sport_id: sportDetails.sportId,
                player_id: player.playerId
            });
        });
        return "Player details added successfully."
    } catch (error) {
        console.log('Error', error)
    }
}

module.exports = {
    getList,
    addPlayer
}