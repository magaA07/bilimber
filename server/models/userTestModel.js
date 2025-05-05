const pool = require("../config/db");

const userTestModel = {
  async getAttemptsByEmail(email) {
    const result = await pool.query(
      "SELECT * FROM user_test_attempts WHERE user_email = $1",
      [email]
    );
    return result.rows;
  },

  async deleteByEmailAndTestId(user_email, test_id) {
    return await pool.query(
      `DELETE FROM user_test_attempts WHERE user_email = $1 AND test_id = $2`,
      [user_email, test_id]
    );
  },

  async addAttempt(user_email, test_id, last_attempt) {
    const result = await pool.query(
      `INSERT INTO user_test_attempts (user_email, test_id, attempts, last_attempt)
       VALUES ($1, $2, 1, $3)
       RETURNING *`,
      [user_email, test_id, last_attempt]
    );
    return result.rows[0];
  },

  async updateAttempt(user_email, test_id, last_attempt) {
    const result = await pool.query(
      `UPDATE user_test_attempts
       SET last_attempt = $3, attempts = attempts + 1
       WHERE user_email = $1 AND test_id = $2
       RETURNING *`,
      [user_email, test_id, last_attempt]
    );
    return result.rows[0];
  },

  async findByEmailAndTestId(user_email, test_id) {
    const result = await pool.query(
      `SELECT * FROM user_test_attempts WHERE user_email = $1 AND test_id = $2`,
      [user_email, test_id]
    );
    return result.rows[0];
  },
};

module.exports = userTestModel;
