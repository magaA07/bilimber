const questionModel = require("../models/questionModel");

const createQuestion = async (req, res) => {
  try {
    const { id, test_id, question_text } = req.body;
    const question = await questionModel.createQuestion(
      id,
      test_id,
      question_text
    );
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при создании вопроса" });
  }
};

const getQuestionsByTest = async (req, res) => {
  try {
    const { testId } = req.params;
    const questions = await questionModel.getQuestionsByTest(testId);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при получении вопросов" });
  }
};

module.exports = {
  createQuestion,
  getQuestionsByTest,
};
