import { db } from "../config/ConfigDatabase.js ";
import {
  getDoc,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
const AppointmentsCollectionRef = collection(db, "Appointment");

export const getApointment = async () => {
  const appointments = [];
  const querySnapshot = await getDocs(AppointmentsCollectionRef);
  querySnapshot.forEach((doc) => {
    appointments.push({ id: doc.id, ...doc.data() });
  });
  return appointments;
};

export const getAppointmentById = async (appointmentsId) => {
  const appointmentDocRef = doc(AppointmentsCollectionRef, appointmentsId);
  const appointmentDocSnapshot = await getDoc(appointmentDocRef);
  if (appointmentDocSnapshot.exists()) {
    return { id: appointmentDocSnapshot.id, ...appointmentDocSnapshot.data() };
  }
  return null;
};

export const getAppointmentsByUserId = async (userId) => {
  try {
    const appointments = [];
    const querySnapshot = await getDocs(AppointmentsCollectionRef);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.userId === userId) {
        appointments.push({ id: doc.id, ...data });
      }
    });

    return appointments;
  } catch (error) {
    console.error("Error getting appointments by userId: ", error);
    throw error;
  }
};

export const addAppointment = async (appointmentData) => {
  try {
    const docRef = await addDoc(AppointmentsCollectionRef, appointmentData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding appointment: ", error);
    throw error;
  }
};

export const updateAppointment = async (
  appointmentsId,
  updatedappointmentData
) => {
  const appointmentDocRef = doc(AppointmentsCollectionRef, appointmentsId);
  try {
    await updateDoc(appointmentDocRef, updatedappointmentData);
  } catch (error) {
    console.error("Error updating appointment: ", error);
    throw error;
  }
};

export const deleteAppointment = async (appointmentsId) => {
  const appointmentDocRef = doc(AppointmentsCollectionRef, appointmentsId);
  try {
    await deleteDoc(appointmentDocRef);
  } catch (error) {
    console.error("Error deleting appointment: ", error);
    throw error;
  }
};
