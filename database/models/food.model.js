const { sequelize } = require("../db.connection");
const { DataTypes } = require("sequelize");

const Food = sequelize.define(
  "Food",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30],
          msg: "Foods name must be between 3 and 30 characters long",
        },
      },
      notNull: {
        msg: "Food name is required",
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notNull: {
        msg: "Food price is required",
      },
    },
  },
  {
    timestamps: true,
    tableName: "foods",
  }
);

module.exports = Food;
