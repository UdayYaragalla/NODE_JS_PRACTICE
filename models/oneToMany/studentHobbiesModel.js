const [DataTypes] = require('sequelize')
const sequelize = require('../../config/dbConfig')

const StudentHobbies = sequelize.define('student_hobbies', {
    hobbiesId: {
        type: DataTypes.INTEGER,
        field: 'hobbies_id',
        primaryKey: true,
        autoIncrement: true
    },
    hobbies: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName:'student_hobbies'
})

module.exports = StudentHobbies