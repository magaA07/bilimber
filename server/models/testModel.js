const pool = require("../config/db");

const createTest = async (id, course_id, duration_minutes, max_attempts) => {
  const query = `
    INSERT INTO tests (id, course_id, duration_minutes, max_attempts)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [
    id,
    course_id,
    duration_minutes,
    max_attempts,
  ]);
  return rows[0];
};

const getTestsByCourse = async (courseId) => {
  const { rows } = await pool.query(
    "SELECT * FROM tests WHERE course_id = $1;",
    [courseId]
  );
  return rows;
};


module.exports = {
  createTest,
  getTestsByCourse,
};
