import {
  getPartner,
  getPartnerById,
  addPartner,
  updatePartner,
  deletePartner,
} from "../Model/PartnerModel.js";

export const getPartnerController = async (req, res) => {
  try {
    const partner = await getPartner();
    res.status(200).json(partner);
  } catch (err) {
    console.error("Error fetching partner: ", err.message);
    res.status(500).json({ error: "Error fetching partner" });
  }
};

export const getPartnerByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const partner = await getPartnerById(id);

    if (partner) {
      res.status(200).json(partner);
    } else {
      res.status(404).json({ error: "partner not found" });
    }
  } catch (err) {
    console.error("Error fetching partner by ID: ", err.message);
    res.status(500).json({ error: "Error fetching partner by ID" });
  }
};

export const addPartnerController = async (req, res) => {
  const partnerData = req.body;
  const { id } = req.params;
  try {
    const newPartnerId = await addPartner(partnerData);
    res.status(201).json({ msg: "Partner added", id: newPartnerId });
  } catch (err) {
    console.error("Error creating partner: ", err.message);
    res.status(500).json({ error: "Error creating partner" });
  }
};

export const updatePartnerController = async (req, res) => {
  const { id } = req.params;
  const updatedPartnerData = req.body;
  try {
    await updatePartner(id, updatedPartnerData);
    res.status(200).json({ msg: "Partner updated" });
  } catch (err) {
    console.error("Error updating partner: ", err.message);
    res.status(500).json({ error: "Error updating partner" });
  }
};

export const deletePartnerController = async (req, res) => {
  const { id } = req.params;
  try {
    await deletePartner(id);
    res.status(200).json({ msg: "Partner deleted" });
  } catch (err) {
    console.error("Error deleting partner: ", err.message);
    res.status(500).json({ error: "Error deleting partner" });
  }
};
