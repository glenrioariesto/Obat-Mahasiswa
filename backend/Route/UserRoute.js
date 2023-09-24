import express from "express";

import {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from "../Controllers/UserControllers.js";
const router = express.Router();

router.get("/users", getUsersController);
router.get("/users/:id", getUserByIdController);
router.post("/users", createUserController);
router.put("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);

export default router;
