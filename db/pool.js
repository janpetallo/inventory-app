require("dotenv").config(); // Load environment variables from .env file
const {Pool} = require('pg');

module.exports = new Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432
});