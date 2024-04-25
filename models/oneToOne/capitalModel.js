const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');

const Capital = sequelize.define('capital', {
    'capitalId': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        field:'capital_id'
    },
    'capital' : {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'capital'
})

module.exports = Capital
