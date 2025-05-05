const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  getUserById,
  getUserByEmail,
  deleteUserById,
  updateUserById,
  updateUserImage,
} = require("../controllers/userController");

router.get("/", getUsers);
router.post("/", addUser);
router.get("/:id", getUserById);
router.get("/email/:email", getUserByEmail);
router.put("/image/:id", updateUserImage);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);

module.exports = router;
