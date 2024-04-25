const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig')
const Sports = require('./sportsModule')
const PlayerSports = require('./playerSportsModel')

const Player = sequelize.define('player', {
    playerId: {
        type: DataTypes.INTEGER,
        field: 'player_id',
        primaryKey: true,
        autoIncrement: true
    },
    playerName: {
        type: DataTypes.STRING,
        field: 'player_name',
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName:'player'
})

Player.belongsToMany(Sports, {
    through: PlayerSports,
    foreignKey: 'player_id'
})

Sports.belongsToMany(Player, {
    through: PlayerSports,
    foreignKey: 'sport_id'
})

module.exports = Player