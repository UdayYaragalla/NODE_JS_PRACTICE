'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('user', {
			user_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			user_name: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			age: {
				type: Sequelize.STRING
			},
			designation: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('user');
	}
};