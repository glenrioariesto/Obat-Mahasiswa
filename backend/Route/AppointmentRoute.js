import express from "express";

const appointmentsRouter = express.Router();

import {
  getaAppointmentController,
  getAppointmentByIdController,
  addAppointmentController,
  updateAppointmentController,
  deleteAppointmentController,
} from "../Controllers/AppointmentControllers.js";

//API AppointmentRoute
const apiPath = "/api/v1/appointment";
const appointmentPath = `${apiPath}/:id`;

appointmentsRouter.get(apiPath, getaAppointmentController);
appointmentsRouter.get(appointmentPath, getAppointmentByIdController);
appointmentsRouter.post(apiPath, addAppointmentController);
appointmentsRouter.put(appointmentPath, updateAppointmentController);
appointmentsRouter.delete(appointmentPath, deleteAppointmentController);
export default appointmentsRouter;
