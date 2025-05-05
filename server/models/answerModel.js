const pool = require("../config/db");

const createAnswer = async (question_id, answer_text, is_correct) => {
  const query = `
    INSERT INTO answers (question_id, answer_text, is_correct)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [
    question_id,
    answer_text,
    is_correct,
  ]);
  return rows[0];
};

const getAnswersByQuestion = async (questionId) => {
  const { rows } = await pool.query(
    "SELECT * FROM answers WHERE question_id = $1;",
    [questionId]
  );
  return rows;
};

const getAllAnswers = async () => {
  const { rows } = await pool.query("SELECT * FROM answers;");
  return rows;
};

module.exports = {
  createAnswer,
  getAllAnswers,
  getAnswersByQuestion,
};
