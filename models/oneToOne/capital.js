'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Capital extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Capital.belongsTo(models.Country, {
                foreignKey: "country_id",
            });
        }
    }
    Capital.init({
        capitalId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'captial_id'
        },
        capitalName: {
            type: DataTypes.STRING,
            field: 'captial_name'
        },
        countryId: {
            type: DataTypes.INTEGER,
            field: 'country_id'
        },
    }, {
        sequelize,
        modelName: 'Capital',
        freezeTableName: true,
        timestamps: false,
        tableName: 'capital'
    });
    return Capital;
};