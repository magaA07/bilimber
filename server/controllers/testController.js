const testModel = require("../models/testModel");

const createTest = async (req, res) => {
  try {
    const { id, course_id, duration_minutes, max_attempts } = req.body;
    const test = await testModel.createTest(
      id,
      course_id,
      duration_minutes,
      max_attempts
    );
    res.status(201).json(test);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при создании теста" });
  }
};

const getTestsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const tests = await testModel.getTestsByCourse(courseId);
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при получении тестов" });
  }
};

module.exports = {
  createTest,
  getTestsByCourse,
};
