const { Sequelize } = require("sequelize");
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
} = require("../config/env.config");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  port: DB_PORT,
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "[i] Connection has been established successfully to the MySQl DB."
    );
  } catch (error) {
    console.error("[-] Unable to connect to the MySQL database:", error);
    process.exit(1);
  } finally {
    sequelize.close();
  }
};

module.exports = {
  checkDatabaseConnection,
  sequelize,
};
