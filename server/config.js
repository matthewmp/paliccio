const dotenv = require('dotenv');
dotenv.config();

exports.DATABASE_URL = process.env.DB_URL || global.DATABASE_URL;

exports.PORT = process.env.PORT || 3000;