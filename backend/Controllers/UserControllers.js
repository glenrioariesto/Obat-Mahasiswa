import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../Model/UserModel.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users: ", err.message);
    res.status(500).json({ error: "Error fetching users" });
  }
};

export const getUserByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error fetching user by ID: ", err.message);
    res.status(500).json({ error: "Error fetching user by ID" });
  }
};

export const createUserController = async (req, res) => {
  const userData = req.body;
  const { id } = req.params;
  try {
    const newUserId = await createUser(id, userData);
    res.status(201).json({ msg: "User created", id: newUserId });
  } catch (err) {
    console.error("Error creating user: ", err.message);
    res.status(500).json({ error: "Error creating user" });
  }
};

export const updateUserController = async (req, res) => {
  const { id } = req.params;
  const updatedUserData = req.body;
  try {
    await updateUser(id, updatedUserData);
    res.status(200).json({ msg: "User updated" });
  } catch (err) {
    console.error("Error updating user: ", err.message);
    res.status(500).json({ error: "Error updating user" });
  }
};

export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    res.status(200).json({ msg: "User deleted" });
  } catch (err) {
    console.error("Error deleting user: ", err.message);
    res.status(500).json({ error: "Error deleting user" });
  }
};
