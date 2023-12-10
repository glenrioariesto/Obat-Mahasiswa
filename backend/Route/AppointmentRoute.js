import express from "express";

const appointmentsRouter = express.Router();

import {
  getaAppointmentController,
  getAppointmentByIdController,
  getAppointmentsByUserIdController,
  addAppointmentController,
  updateAppointmentController,
  deleteAppointmentController,
} from "../Controllers/AppointmentControllers.js";

//API AppointmentRoute
const apiPath = "/api/v1/appointment";
const appointmentPath = `${apiPath}/:id`;
const PartnerDoctorPath = "/api/v1/user/:userId/appointment";

appointmentsRouter.get(apiPath, getaAppointmentController);
appointmentsRouter.get(appointmentPath, getAppointmentByIdController);
appointmentsRouter.get(PartnerDoctorPath, getAppointmentsByUserIdController);
appointmentsRouter.post(PartnerDoctorPath, addAppointmentController);
appointmentsRouter.put(appointmentPath, updateAppointmentController);
appointmentsRouter.delete(appointmentPath, deleteAppointmentController);
export default appointmentsRouter;
