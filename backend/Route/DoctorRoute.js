import express from "express";

const doctorRouter = express.Router();

import {
  getDoctorController,
  getDoctorByIdController,
  addDoctorController,
  updateDoctorController,
  deleteDoctorController,
  getDoctorsByPartnerIdController,
} from "../Controllers/DoctorControllers.js";

//API Docter

const apiPath = "/api/v1/doctors";
const DoctorPath = `${apiPath}/:doctorId`;
const PartnerDoctorPath = "/api/v1/partner/:partnerId/doctors";

doctorRouter.get(apiPath, getDoctorController);
doctorRouter.get(DoctorPath, getDoctorByIdController);
doctorRouter.get(PartnerDoctorPath, getDoctorsByPartnerIdController);
doctorRouter.post(PartnerDoctorPath, addDoctorController);
doctorRouter.put(DoctorPath, updateDoctorController);
doctorRouter.delete(DoctorPath, deleteDoctorController);

export default doctorRouter;
