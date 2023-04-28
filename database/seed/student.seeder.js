const Student = require("../models/student.model");

let students = [
  {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    studentCode: "111111001",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    gender: "female",
    studentCode: "222222002",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    gender: "male",
    studentCode: "333333003",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    gender: "female",
    studentCode: "444444004",
  },
];

(async () => {
  try {
    await Student.bulkCreate(students);
    console.log("[i] Student seeder finished!");
  } catch (error) {
    console.error("[-] Unable to connect to the MySQL database:", error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
})();
