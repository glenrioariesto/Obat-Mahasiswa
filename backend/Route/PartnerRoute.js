import express from "express";

const partnersrouter = express.Router();

import {
  getPartnerController,
  getPartnerByIdController,
  addPartnerController,
  updatePartnerController,
  deletePartnerController,
} from "../Controllers/PartnerControllers.js";

//API Partner
partnersrouter.get("/partners", getPartnerController);
partnersrouter.get("/partners/:id", getPartnerByIdController);
partnersrouter.post("/partners/add", addPartnerController);
partnersrouter.put("/partners/:id", updatePartnerController);
partnersrouter.delete("/partners/:id", deletePartnerController);
export default partnersrouter;
