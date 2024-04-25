const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig')

const StudentDetails = sequelize.define('student_details', {
    detailsId: {
        type: DataTypes.INTEGER,
        field: 'details_id',
        primaryKey: true,
        autoIncrement: true
    },
    studentLocation: {
        type: DataTypes.STRING,
        field: 'student_loc',
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName:'student_details'
})

module.exports = StudentDetails