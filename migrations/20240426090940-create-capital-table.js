'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable("capital", {
			captial_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			captial_name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			country_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			}
		}).then(() => queryInterface.addConstraint("capital", {
			fields: ["country_id"],
			type: 'foreign key',
			name: 'country_id_fk',
			references: {
				table: 'country',
				field: 'country_id'
			},
		}));
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable("capital");
	}
};
