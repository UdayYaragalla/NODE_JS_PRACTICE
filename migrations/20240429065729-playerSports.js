'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // Create the join table 'player_sport'
        return queryInterface.createTable('player_sport', {
            player_sport_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            player_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            sport_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }).then(() => queryInterface.addConstraint('player_sport', {
            fields: ['player_id'],
            type: 'foreign key',
            name: 'player_id_fk',
            references: {
                table: 'player',
                field: 'player_id'
            }
        })).then(() => queryInterface.addConstraint('player_sport', {
            fields: ['sport_id'],
            type: 'foreign key',
            name: 'sport_id_fk',
            references: {
                table: 'sports',
                field: 'sport_id'
            }
        }));
    },

    async down(queryInterface, Sequelize) {
        // Drop the join table 'player_sport'
        await queryInterface.dropTable('player_sport');
    }
};
