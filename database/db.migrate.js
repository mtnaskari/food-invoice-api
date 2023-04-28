const { sequelize } = require("./db.connection");
const { initDatabaseRelations } = require("./db.relations");

(async () => {
  try {
    initDatabaseRelations();
    await sequelize.authenticate();
    console.log(
      "[i] Connection has been established successfully to the MySql DB."
    );
    await sequelize.sync({ force: true });
    console.log("[i] Tables created!");
  } catch (error) {
    console.log(error);
  } finally {
    sequelize.close();
  }
})();
