require('dotenv').config();

databaseUrl = process.env.DATABASE_URL;
databaseDb = process.env.DATABASE_DB;
databaseUser = process.env.DATABASE_USER;
databasePassword = process.env.DATABASE_PASSWORD;

module.exports = {
    'url': 'mongodb://' + databaseUser + ":" + databasePassword + '@' + databaseUrl + '/' + databaseDb
};