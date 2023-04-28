const {
  createStudentService,
  readStudentService,
  updateStudentService,
  deleteStudentService,
} = require("../services/student.service");
const { httpResponse } = require("../utils/http-responses");

const createStudent = async (req, res) => {
  const { firstName, lastName, gender, studentCode } = req.body;

  const data = { firstName, lastName, gender, studentCode };

  const result = await createStudentService(data);

  return httpResponse.created(res, result);
};

const readStudent = async (req, res) => {
  const { studentId } = req.params;

  const result = await readStudentService(studentId);

  return httpResponse.ok(res, result);
};

const updateStudent = async (req, res) => {
  const { studentId } = req.params;
  const { firstName, lastName, gender, studentCode } = req.body;

  const data = { firstName, lastName, gender, studentCode };

  const result = await updateStudentService(studentId, data);

  return httpResponse.ok(res, result);
};

const deleteStudent = async (req, res) => {
  const { studentId } = req.params;

  const result = await deleteStudentService(studentId);

  return httpResponse.ok(res, result);
};

module.exports = {
  createStudent,
  readStudent,
  updateStudent,
  deleteStudent,
};
