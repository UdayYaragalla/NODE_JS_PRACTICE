'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PlayerSport extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    PlayerSport.init({
        playerSportId: {
            type: DataTypes.INTEGER,
            field: 'player_sport_id',
            autoIncrement: true,
            primaryKey: true
        },
        playerId: {
            type: DataTypes.INTEGER,
            field: 'player_id'
        },
        sportId: {
            type: DataTypes.INTEGER,
            field: 'sport_id'
        }
    }, {
        sequelize,
        modelName: 'PlayerSport',
        freezeTableName: true,
        timestamps: false,
        tableName: 'player_sport'
    });
    return PlayerSport;
};