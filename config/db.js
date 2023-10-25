require("dotenv").config();
const { Pool } = require("pg");

const dbConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

const pool = new Pool(dbConfig);

module.exports = pool;
