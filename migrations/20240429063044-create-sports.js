'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('sports', {
            sport_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            sport_name: {
                type: Sequelize.STRING
            }
        })
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('sports');
    }
};