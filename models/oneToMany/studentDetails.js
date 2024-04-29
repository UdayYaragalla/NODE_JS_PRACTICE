'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class StudentDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            StudentDetails.belongsTo(models.Student, {
                foreignKey: "student_id",
            });
        }
    }
    StudentDetails.init({
        studentDetailsId: {
            type: DataTypes.INTEGER,
            field: 'student_details_id',
            autoIncrement: true,
            primaryKey: true
        },
        studentLocation: {
            type: DataTypes.STRING,
            field: 'student_location'
        },
        studentId: {
            type: DataTypes.INTEGER,
            field: 'student_id'
        }
    }, {
        sequelize,
        modelName: 'StudentDetails',
        freezeTableName: true,
        timestamps: false,
        tableName: 'student_details'
    });
    return StudentDetails;
};