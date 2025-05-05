require("dotenv").config();
require("./config/db");

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

//
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const testRoutes = require("./routes/testRoutes");
const questionRoutes = require("./routes/questionRoutes");
const answerRoutes = require("./routes/answerRoutes");
const userTestRoutes = require("./routes/userTestRoutes");

app.use(cors());
app.use(express.json());

// Подключаем роуты
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);
app.use("/api/user-tests", userTestRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Сервер работает на http://localhost:${PORT}`);
});
