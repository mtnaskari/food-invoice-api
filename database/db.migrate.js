const { sequelize } = require("./db.connection");

const Food = require("./models/food.model");
const Student = require("./models/student.model");
const Invoice = require("./models/invoice.model");
const Food_Invoice = require("./models/food_invoice.model");

Student.hasMany(Invoice);
Invoice.belongsTo(Student);

Food.belongsToMany(Invoice, { through: Food_Invoice });
Invoice.belongsToMany(Food, { through: Food_Invoice });

(async () => {
  try {
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
