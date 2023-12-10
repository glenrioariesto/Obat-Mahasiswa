import {
  getApointment,
  getAppointmentById,
  getAppointmentsByUserId,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} from "../Model/AppointmentModel.js";

export const getaAppointmentController = async (req, res) => {
  try {
    const appointment = await getApointment();
    if (appointment.length > 0) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ error: "appointment not found" });
    }
  } catch (err) {
    console.error("Error fetching appointment: ", err.message);
    res.status(500).json({ error: "Error fetching appointment" });
  }
};

export const getAppointmentByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await getAppointmentById(id);

    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ error: "appointment not found" });
    }
  } catch (err) {
    console.error("Error fetching appointment by ID: ", err.message);
    res.status(500).json({ error: "Error fetching appointment by ID" });
  }
};

export const getAppointmentsByUserIdController = async (req, res) => {
  const { userId } = req.params;

  try {
    const Appointments = await getAppointmentsByUserId(userId);
    if (Appointments.length > 0) {
      res.status(200).json(Appointments);
    } else {
      res.status(404).json({ error: "appointment not found" });
    }
  } catch (err) {
    console.error("Error getting Appointments by userId: ", err.message);
    res.status(500).json({ error: "Error getting appointments by userId" });
  }
};

export const addAppointmentController = async (req, res) => {
  const appointmentData = req.body;
  const { userId } = req.params;
  try {
    appointmentData.userId = userId;
    const newappointmentId = await addAppointment(appointmentData);
    res.status(201).json({ msg: "appointment added", id: newappointmentId });
  } catch (err) {
    console.error("Error creating appointment: ", err.message);
    res.status(500).json({ error: "Error creating appointment" });
  }
};

export const updateAppointmentController = async (req, res) => {
  const { id } = req.params;
  const updatedappointmentData = req.body;
  try {
    await updateAppointment(id, updatedappointmentData);
    res.status(200).json({ msg: "appointment updated" });
  } catch (err) {
    console.error("Error updating appointment: ", err.message);
    res.status(500).json({ error: "Error updating appointment" });
  }
};

export const deleteAppointmentController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteAppointment(id);
    res.status(200).json({ msg: "appointment deleted" });
  } catch (err) {
    console.error("Error deleting appointment: ", err.message);
    res.status(500).json({ error: "Error deleting appointment" });
  }
};
