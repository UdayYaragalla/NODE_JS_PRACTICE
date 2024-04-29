'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Player extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Player.belongsToMany(models.Sports, {
                through: models.PlayerSport,
                foreignKey: 'player_id'
            })
        }
    }
    Player.init({
        playerId: {
            type: DataTypes.INTEGER,
            field: 'player_id',
            autoIncrement: true,
            primaryKey: true
        },
        playerName: {
            type: DataTypes.STRING,
            field: 'player_name'
        }
    }, {
        sequelize,
        modelName: 'Player',
        freezeTableName: true,
        timestamps: false,
        tableName: 'player'
    });
    return Player;
};