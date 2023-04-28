const Student = require("./models/student.model");
const Food = require("./models/food.model");
const Invoice = require("./models/invoice.model");

const initDatabaseRelations = () => {
  Student.hasMany(Invoice);
  Invoice.belongsTo(Student);
  Invoice.belongsToMany(Food, { through: "foodInvoice" });
  Food.belongsToMany(Invoice, { through: "foodInvoice" });
};

module.exports = { initDatabaseRelations };
