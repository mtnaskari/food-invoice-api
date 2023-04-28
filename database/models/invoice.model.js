const { sequelize } = require("../db.connection");
const { DataTypes } = require("sequelize");

const Invoice = sequelize.define(
  "invoice",
  {
    trackingCode: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [12, 12],
          msg: "Invoice tracking code must be 12 characters long",
        },
        notNull: {
          msg: "Invoice tracking code is required",
        },
        notEmpty: {
          msg: "Invoice tracking code is required",
        },
      },
    },
  },
  {
    timestamps: true,
    tableName: "invoices",
  }
);

module.exports = Invoice;
