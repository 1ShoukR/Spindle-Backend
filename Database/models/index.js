import Sequelize from 'sequelize';
import user from './user.js';
import dbConfig from '../config/db-config.js'

const { DATABASE, USER, PASSWORD, HOST, DIALECT } = dbConfig;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
	host: HOST,
	dialect: DIALECT,
});

const db = {};
db.sequelize = sequelize;
db.models = {
	User: user(sequelize, Sequelize.DataTypes),
};

export default db;
