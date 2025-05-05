const answerModel = require("../models/answerModel");

const createAnswer = async (req, res) => {
  try {
    const { question_id, answer_text, is_correct } = req.body;
    const answer = await answerModel.createAnswer(
      question_id,
      answer_text,
      is_correct
    );
    res.status(201).json(answer);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при создании ответа" });
  }
};

const getAnswersByQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const answers = await answerModel.getAnswersByQuestion(questionId);
    res.json(answers);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при получении ответов" });
  }
};

const getAllAnswers = async (req, res) => {
  try {
    const answers = await answerModel.getAllAnswers();
    res.json(answers);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при получении всех ответов" });
  }
};

module.exports = {
  createAnswer,
  getAnswersByQuestion,
  getAllAnswers,
};
