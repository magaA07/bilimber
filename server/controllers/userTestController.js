const userTestModel = require("../models/userTestModel");

const userTestController = {
  async getUserAttempts(req, res) {
    const { email } = req.params;

    try {
      const attempts = await userTestModel.getAttemptsByEmail(email);
      res.status(200).json(attempts);
    } catch (err) {
      console.error("Error fetching user attempts:", err);
      res.status(500).json({ error: "Failed to fetch attempts" });
    }
  },

  async getLastResult(req, res) {
    const { email, testId } = req.params;

    try {
      const record = await userTestModel.findByEmailAndTestId(email, testId);
      if (!record) {
        return res.status(404).json({ message: "No result found" });
      }
      res.status(200).json({ last_result: record.last_attempt });
    } catch (err) {
      console.error("Error getting last result:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  async getAttemptByEmailAndTestId(req, res) {
    const { email, testId } = req.params;

    try {
      const attempt = await userTestModel.findByEmailAndTestId(email, testId);
      if (!attempt) {
        return res.status(404).json({ message: "Attempt not found" });
      }
      res.status(200).json(attempt);
    } catch (err) {
      console.error("Error fetching specific attempt:", err);
      res.status(500).json({ error: "Failed to fetch attempt" });
    }
  },

  async addOrUpdateAttempt(req, res) {
    const { user_email, test_id, last_attempt} = req.body;

    try {
      const existing = await userTestModel.findByEmailAndTestId(
        user_email,
        test_id
      );

      let result;
      if (existing) {
        result = await userTestModel.updateAttempt(user_email, test_id, last_attempt);
      } else {
        result = await userTestModel.addAttempt(user_email, test_id, last_attempt);
      }

      res.status(200).json(result);
    } catch (err) {
      console.error("Error updating attempt:", err);
      res.status(500).json({ error: "Failed to update attempt" });
    }
  },

  async deleteAttempt(req, res) {
    const { email, testId } = req.params;

    try {
      const deleted = await userTestModel.deleteByEmailAndTestId(email, testId);
      if (deleted.rowCount === 0) {
        return res.status(404).json({ message: "Attempt not found" });
      }
      res.status(200).json({ message: "Attempt deleted" });
    } catch (err) {
      console.error("Error deleting attempt:", err);
      res.status(500).json({ error: "Failed to delete attempt" });
    }
  },
};

module.exports = userTestController;
