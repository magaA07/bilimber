const pool = require("../config/db");

const createCourse = async (id, title, image_url) => {
  const query = `
    INSERT INTO courses (id, title, image_url)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [id, title, image_url]);
  return rows[0];
};

const getAllCourses = async () => {
  const { rows } = await pool.query("SELECT * FROM courses;");
  return rows;
};

const getCourseById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM courses WHERE id = $1;", [
    id,
  ]);
  return rows[0];
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
};
