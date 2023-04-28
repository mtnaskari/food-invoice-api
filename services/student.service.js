const Student = require("../database/models/student.model");

/**
 * Create a new Student
 */
const createStudentService = async (data) => {
  const result = await Student.create(data);

  return result;
};

/**
 * Read student if params exist and return all students if not
 */
const readStudentService = async (studentId) => {
  const result = !!studentId
    ? await Student.findByPk(studentId)
    : await Student.findAll();

  return result;
};

/**
 * Update a student
 */ 
const updateStudentService = async (studentId, data) => {
  const student = await Student.findByPk(studentId);

  const result = await student.update(data);

  return result;
};

/**
 * Delete a student
 */
const deleteStudentService = async (studentId) => {
  const student = await Student.findByPk(studentId);

  const result = student.destroy();

  return result;
};

module.exports = {
  createStudentService,
  readStudentService,
  updateStudentService,
  deleteStudentService,
};
