const dotenv = require("dotenv");
const { join } = require("path");

const config = dotenv.config({ path: join(__dirname, "../.env") });

if (config.error) console.log("[-] dotenv config > ", config.error.message);

const checkEnv = (key) => {
  if (!process.env[key]) {
    console.log(`[-] Missing env var: ${key}`);
    process.exit(1);
  } else {
    return process.env[key];
  }
};

const PORT = +checkEnv("PORT");
const DB_HOST = checkEnv("DB_HOST");
const DB_PORT = +checkEnv("DB_PORT");
const DB_USER = checkEnv("DB_USER");
const DB_PASS = checkEnv("DB_PASS");
const DB_NAME = checkEnv("DB_NAME");

module.exports = {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
};
