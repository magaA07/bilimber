const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.post("/", testController.createTest);
router.get("/:courseId", testController.getTestsByCourse);

module.exports = router;
