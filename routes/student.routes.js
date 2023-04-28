const express = require("express");
const router = express.Router();

const {
  createStudent,
  readStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");

router.post("/", createStudent);

router.get("/:studentId?", readStudent);

router.put("/:studentId", updateStudent);

router.delete("/:studentId", deleteStudent);

module.exports = router;
