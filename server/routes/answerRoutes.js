const express = require("express");
const router = express.Router();
const answerController = require("../controllers/answerController");

router.post("/", answerController.createAnswer);
router.get("/:questionId", answerController.getAnswersByQuestion);
router.get("/", answerController.getAllAnswers);

module.exports = router;
