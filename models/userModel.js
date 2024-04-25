const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
// const zlib = require('zlib');
// const bcrypt = require('bcrypt');

// const country = require('./country')

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    password: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21,
    },
    designation: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    }
}, {
    freezeTableName: true,
    timestamps : false,
    tableName: 'user'
})

// User.sync({force:true})

module.exports = User