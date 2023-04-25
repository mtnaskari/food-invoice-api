const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hw18_sequelize", "root", "123456789", {
  host: "localhost",
  port: 3307,
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
  sequelize
};
