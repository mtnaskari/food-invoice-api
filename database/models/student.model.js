const { sequelize } = require("../db.connection");
const { DataTypes } = require("sequelize");

const Student = sequelize.define(
  "Student",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30],
          msg: "Student's first name must be between 3 and 30 characters long",
        },
      },
      notNull: {
        msg: "Student's first name is required",
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30],
          msg: "Student's last name must be between 3 and 30 characters long",
        },
      },
      notNull: {
        msg: "Student's last name is required",
      },
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: "male",
      isIn: {
        args: [["male", "female"]],
        msg: "Must be male or female",
      },
    },
    studentCode: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: /^[1-9][0-9]{8}$/i,
          msg: "Student code must be 9 digits long and start with a non-zero digit",
        },
      },
    },
  },
  {
    timestamps: true,
    tableName: "students",
  }
);

module.exports = Student;
