import express from "express";

import {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from "../Controllers/UserControllers.js";
const router = express.Router();

//API USER
router.get("/users", getUsersController);
router.get("/users/:id", getUserByIdController);
router.post("/users/create/:id", createUserController);
router.put("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);

//API Partner

export default router;
