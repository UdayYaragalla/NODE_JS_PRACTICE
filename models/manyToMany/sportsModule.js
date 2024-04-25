const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig')

const Sports = sequelize.define('sports', {
    sportId: {
        type: DataTypes.INTEGER,
        field: 'sport_id',
        primaryKey: true,
        autoIncrement: true
    },
    sportName: {
        type: DataTypes.STRING,
        field: 'sport_name',
        allowNull:false
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName:'sports'
})

module.exports = Sports
