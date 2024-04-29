'use strict';

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
async function isFileName(filePath) {
	await fs.stat(filePath, (err, stats) => {
		if (err) {
		} else {
			if (stats.isFile()) {
				return true;
			} else {
				return false;
			}
		}
	});
}

async function getFileNames(file) {
	const filePath = path.join(__dirname, file)
	await fs.readdirSync(filePath)
		.filter((file) => {
			if (isFileName(filePath) && file.indexOf('.') !== 0 && file.slice(-3) === '.js' && file.indexOf('.test.js') === -1) {
				fileList.push(filePath + '/' + file)
			}
		})
}


function getFileList() {
	fs.readdirSync(__dirname)
		.filter(file => {
			const filePath = path.join(__dirname, file)
			if (file !== basename) {
				if (isFileName(filePath) &&
					file.indexOf('.') !== 0 &&
					file.slice(-3) === '.js' &&
					file.indexOf('.test.js') === -1
				) {
					fileList.push(filePath)
				} else {
					getFileNames(file)
				};
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