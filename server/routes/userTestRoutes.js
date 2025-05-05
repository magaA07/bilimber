const express = require("express");
const router = express.Router();
const userTestController = require("../controllers/userTestController");

// Получить все попытки пользователя по email
// GET /api/user-tests/attempts/:email
router.get("/attempts/:email", userTestController.getUserAttempts);

// Получить конкретную попытку по email и test_id
// GET /api/user-tests/attempts/:email/:testId
router.get("/attempts/:email/:testId", userTestController.getAttemptByEmailAndTestId);

// Получить все результаты пользователя по email
// GET /api/user-tests/last-result/:email/:testId
router.get("/last-result/:email/:testId", userTestController.getLastResult);

// Добавить новую или обновить существующую попытку
// POST /api/user-tests/attempts
// Body: { user_email: "", test_id: 0 }
router.post("/attempts", userTestController.addOrUpdateAttempt);

// Удалить попытку по email и test_id
// DELETE /api/user-tests/attempts/:email/:testId
router.delete("/attempts/:email/:testId", userTestController.deleteAttempt);

module.exports = router;
