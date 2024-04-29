'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    user.init({
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            autoIncrement: true,
            primaryKey: true
        },
        userName: {
            type: DataTypes.STRING,
            field: 'user_name'
        },
        password: DataTypes.STRING,
        age: DataTypes.STRING,
        designation: DataTypes.STRING,
        description: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'user',
        freezeTableName: true,
        timestamps: false
    });
    return user;
};