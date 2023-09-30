import express from "express";

import {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from "../Controllers/UserControllers.js";
const usersrouter = express.Router();

//API USER
usersrouter.get("/users", getUsersController);
usersrouter.get("/users/:id", getUserByIdController);
usersrouter.post("/users/create/:id", createUserController);
usersrouter.put("/users/:id", updateUserController);
usersrouter.delete("/users/:id", deleteUserController);

export default usersrouter;
