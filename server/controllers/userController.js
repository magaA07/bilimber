const {
  getAllUsers,
  createUser,
  getUserByParamId,
  getUserByParamEmail,
  deleteUser,
  updateUser,
  updateUserImageUrl,
} = require("../models/userModel");
const cloudinary = require("../lib/cloudinary");

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при получении пользователей" });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserByParamId(id);
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при получении пользователя" });
  }
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await getUserByParamEmail(email);
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при получении пользователя" });
  }
};

const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при создании пользователя" });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteUser(id);
    if (!deleted) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при удалении пользователя" });
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { username, email, phone_number, city, age, password } = req.body;
  try {
    const updatedUser = await updateUser(
      id,
      username,
      email,
      phone_number,
      city,
      age,
      password
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при обновлении пользователя" });
  }
};


const updateUserImage = async (req, res) => {
  const { id } = req.params;
  const updatedData = {};
  try {
    if (req.body.image_url) {
      const result = await cloudinary.uploader.upload(req.body.image_url);
      updatedData.image_url = result.secure_url;
    }
    const updatedUser = await updateUserImageUrl(id, updatedData.image_url);
    if (!updatedUser) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Ошибка при обновлении изображения пользователя" });
  }
};

module.exports = {
  getUsers,
  addUser,
  getUserById,
  getUserByEmail,
  deleteUserById,
  updateUserById,
  updateUserImage,
};
