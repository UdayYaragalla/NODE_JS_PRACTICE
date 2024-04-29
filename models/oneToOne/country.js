'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Country extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Country.hasOne(models.Capital, {
                foreignKey: "country_id",
            });
        }
    }
    Country.init({
        countryId: {
            type: DataTypes.INTEGER,
            field: 'country_id',
            primaryKey: true,
            autoIncrement: true
        },
        countryName: {
            type: DataTypes.STRING,
            field: 'country_name'
        }
    }, {
        sequelize,
        modelName: 'Country',
        freezeTableName: true,
        timestamps: false,
        tableName: 'country'
    });
    return Country;
};