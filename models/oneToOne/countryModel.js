const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const Capital = require('./capitalModel');

const Country = sequelize.define('country', {
    countryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:'country_id'
    },
    countryName: {
        type: DataTypes.STRING,
        defaultValue: null,
        field:'country_name'
    }
}, {
    freezeTableName: true,
    timestamps : false,
    tableName: 'country'
})

Country.hasOne(Capital, {
    foreignKey: 'country_id',
    onDelete: 'CASCADE'
})
Capital.belongsTo(Country, {
    foreignKey: 'country_id',
    onDelete: 'CASCADE'
})

module.exports = Country
