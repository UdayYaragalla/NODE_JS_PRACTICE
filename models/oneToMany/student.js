'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Student extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Student.hasMany(models.StudentDetails, {
                foreignKey: "student_id",
            });
        }
    }
    Student.init({
        studentId: {
            type: DataTypes.INTEGER,
            field: 'student_id',
            autoIncrement: true,
            primaryKey: true
        },
        studentName: {
            type: DataTypes.STRING,
            field: 'student_name'
        }
    }, {
        sequelize,
        modelName: 'Student',
        freezeTableName: true,
        timestamps: false,
        tableName: "student"
    });
    return Student;
};