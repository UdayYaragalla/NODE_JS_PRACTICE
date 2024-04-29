'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Sports extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Sports.belongsToMany(models.Player, {
                through: models.PlayerSport,
                foreignKey: 'sport_id'
            })
        }
    }
    Sports.init({
        sportId: {
            type: DataTypes.INTEGER,
            field: 'sport_id',
            autoIncrement: true,
            primaryKey: true
        },
        sportName: {
            type: DataTypes.STRING,
            field: 'sport_name'
        }
    }, {
        sequelize,
        modelName: 'Sports',
        freezeTableName: true,
        timestamps: false,
        tableName: 'sports'
    });
    return Sports;
};