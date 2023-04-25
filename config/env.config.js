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

const PORT = checkEnv("PORT");

module.exports = { PORT };
