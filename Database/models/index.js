import Sequelize from 'sequelize';
import user from './user.js';
import dbConfig from '../config/db-config.js'

const { DATABASE, USER, PASSWORD, HOST, DIALECT } = dbConfig;

// Note: This looks kinda bad might need to find a better way to write this. Will cause an error somewhere else if Environment variables are not set properly
let sequelize = {}
if (process.env.APP_ENV === "dev") {
	sequelize = new Sequelize({dialect: 'sqlite', storage: '../tests/test.db'})
} else if (process.env.APP_ENV === "prod") {
	sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
		host: HOST,
		dialect: DIALECT,
	});
}

const db = {};
db.sequelize = sequelize;
db.models = {
	User: user(sequelize, Sequelize.DataTypes),
};

export default db;
