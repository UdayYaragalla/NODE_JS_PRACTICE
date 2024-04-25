const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig')
const StudentDetails = require('../oneToMany/studentDetailsModel')

const Student = sequelize.define('student',{
    studentId: {
        type: DataTypes.INTEGER,
        field: 'student_id',
        primaryKey: true,
        autoIncrement:true
    },
    studentName: {
        type: DataTypes.STRING,
        field: 'student_name',
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName:'student'
})

Student.hasMany(StudentDetails, {
    foreignKey:'student_id'
})
StudentDetails.belongsTo(Student, {
    foreignKey:'student_id'
})

module.exports = Student

