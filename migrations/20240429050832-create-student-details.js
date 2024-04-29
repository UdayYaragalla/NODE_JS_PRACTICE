'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('student_details', {
            student_details_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            student_location: {
                type: Sequelize.STRING
            },
            student_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        }).then(() => queryInterface.addConstraint("student_details", {
            fields: ["student_id"],
            type: 'foreign key',
            name: 'student_id_fk',
            references: {
                table: 'student',
                field: 'student_id'
            },
        }));
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('student_details');
    }
};