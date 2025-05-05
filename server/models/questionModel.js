const pool = require("../config/db");

const createQuestion = async (id, test_id, question_text) => {
  const query = `
    INSERT INTO questions (id, test_id, question_text)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [id, test_id, question_text]);
  return rows[0];
};

const getQuestionsByTest = async (testId) => {
  const { rows } = await pool.query(
    "SELECT * FROM questions WHERE test_id = $1;",
    [testId]
  );
  return rows;
};

module.exports = {
  createQuestion,
  getQuestionsByTest,
};
