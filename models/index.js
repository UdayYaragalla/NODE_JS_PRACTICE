'use strict';

const { glob } = require('glob')
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const { log } = require('console');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let fileList = [];
async function getFileList() {
	const pattern = path.join(__dirname, '**/*.js');
	const files = glob.sync(pattern);
	await files.forEach((file) => {
		if (path.basename(file) != basename) {
			fileList.push(file)
		}
	})
}

getFileList();

fileList.forEach(file => {
	const model = require(file)(sequelize, Sequelize.DataTypes);
	db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;