const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.post("/", questionController.createQuestion);
router.get("/:testId", questionController.getQuestionsByTest);

module.exports = router;
