import {
  getDoctor,
  getDoctorById,
  getDoctorsByPartnerId,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} from "../Model/DokterModel.js";

export const getDoctorController = async (req, res) => {
  try {
    const doctor = await getDoctor();
    res.status(200).json(doctor);
  } catch (err) {
    console.error("Error fetching doctor: ", err.message);
    res.status(500).json({ error: "Error fetching doctor" });
  }
};

export const getDoctorByIdController = async (req, res) => {
  const { doctorId } = req.params;

  try {
    const doctor = await getDoctorById(doctorId);

    if (doctor) {
      res.status(200).json(doctor);
    } else {
      res.status(404).json({ error: "doctor not found" });
    }
  } catch (err) {
    console.error("Error fetching doctor by ID: ", err.message);
    res.status(500).json({ error: "Error fetching doctor by ID" });
  }
};

export const getDoctorsByPartnerIdController = async (req, res) => {
  const { partnerId } = req.params;

  try {
    const doctors = await getDoctorsByPartnerId(partnerId);
    res.status(200).json(doctors);
  } catch (err) {
    console.error("Error getting doctors by partnerId: ", err.message);
    res.status(500).json({ error: "Error getting doctors by partnerId" });
  }
};

export const addDoctorController = async (req, res) => {
  const doctorData = req.body;
  const partnerId = req.params.partnerId;
  try {
    doctorData.partnerId = partnerId;
    const newDoctorId = await addDoctor(doctorData);
    res.status(201).json({ msg: "doctor added", id: newDoctorId });
  } catch (err) {
    console.error("Error creating doctor: ", err.message);
    res.status(500).json({ error: "Error creating doctor" });
  }
};

export const updateDoctorController = async (req, res) => {
  const { doctorId } = req.params;
  const updatedDoctorData = req.body;
  try {
    await updateDoctor(doctorId, updatedDoctorData);
    res.status(200).json({ msg: "Doctor updated" });
  } catch (err) {
    console.error("Error updating doctor: ", err.message);
    res.status(500).json({ error: "Error updating doctor" });
  }
};

export const deleteDoctorController = async (req, res) => {
  const { doctorId } = req.params;
  try {
    await deleteDoctor(doctorId);
    res.status(200).json({ msg: "Doctor deleted" });
  } catch (err) {
    console.error("Error deleting doctor: ", err.message);
    res.status(500).json({ error: "Error deleting doctor" });
  }
};
