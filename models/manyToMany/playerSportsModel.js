const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig')

const PlayerSports = sequelize.define('player_sport', {
    playerSportId: {
        type: DataTypes.INTEGER,
        field: 'player_sport_id',
        primaryKey: true,
        autoIncrement: true
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName:'player_sport'
})

module.exports = PlayerSports