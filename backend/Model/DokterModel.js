import { db } from "../config/ConfigDatabase.js ";
import {
  getDoc,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore";

const doctorsCollectionRef = collection(db, "Doctor");

export const getDoctor = async () => {
  const doctors = [];
  const querySnapshot = await getDocs(doctorsCollectionRef);
  querySnapshot.forEach((doc) => {
    doctors.push({ id: doc.id, ...doc.data() });
  });
  return doctors;
};

export const getDoctorById = async (doctorId) => {
  const doctorDocRef = doc(doctorsCollectionRef, doctorId);
  const doctorDocSnapshot = await getDoc(doctorDocRef);
  if (doctorDocSnapshot.exists()) {
    return { id: doctorDocSnapshot.id, ...doctorDocSnapshot.data() };
  }
  return null;
};

export const getDoctorsByPartnerId = async (partnerId) => {
  try {
    const doctors = [];
    const querySnapshot = await getDocs(doctorsCollectionRef);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.partnerId === partnerId) {
        doctors.push({ id: doc.id, ...data });
      }
    });

    return doctors;
  } catch (error) {
    console.error("Error getting doctors by partnerId: ", error);
    throw error;
  }
};
export const addDoctor = async (doctorData) => {
  try {
    const docRef = await addDoc(doctorsCollectionRef, doctorData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding doctor: ", error);
    throw error;
  }
};

export const updateDoctor = async (doctorId, updatedDoctorData) => {
  const doctorDocRef = doc(doctorsCollectionRef, doctorId);
  try {
    await updateDoc(doctorDocRef, updatedDoctorData);
  } catch (error) {
    console.error("Error updating doctor: ", error);
    throw error;
  }
};

export const deleteDoctor = async (doctorId) => {
  const doctorDocRef = doc(doctorsCollectionRef, doctorId);
  try {
    await deleteDoc(doctorDocRef);
  } catch (error) {
    console.error("Error deleting doctor: ", error);
    throw error;
  }
};
