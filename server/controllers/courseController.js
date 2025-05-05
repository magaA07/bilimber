const courseModel = require("../models/courseModel");

const createCourse = async (req, res) => {
  try {
    const { id, title, image_url } = req.body;
    const course = await courseModel.createCourse(id, title, image_url);
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при создании курса" });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.getAllCourses();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при получении курсов" });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseModel.getCourseById(id);
    if (!course) {
      return res.status(404).json({ error: "Курс не найден" });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при получении курса" });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
};
