const { sequelize } = require("../db.connection");
const { DataTypes } = require("sequelize");

const Food_Invoice = sequelize.define(
  "Food_Invoice",
  {},
  {
    timestamps: true,
    tableName: "food_invoice",
  }
);

module.exports = Food_Invoice;
