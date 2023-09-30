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
const usersCollectionRef = collection(db, "Partners");

export const getPartner = async () => {
  const partners = [];
  const querySnapshot = await getDocs(usersCollectionRef);
  querySnapshot.forEach((doc) => {
    partners.push({ id: doc.id, ...doc.data() });
  });
  return partners;
};

export const getPartnerById = async (partnersId) => {
  const userDocRef = doc(usersCollectionRef, partnersId);
  const userDocSnapshot = await getDoc(userDocRef);
  if (userDocSnapshot.exists()) {
    return { id: userDocSnapshot.id, ...userDocSnapshot.data() };
  }
  return null;
};

export const addPartner = async (userData) => {
  console.log(usersCollectionRef);
  try {
    const docRef = await addDoc(usersCollectionRef, userData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding partner: ", error);
    throw error;
  }
};

export const updatePartner = async (partnersId, updatedPartnerData) => {
  const userDocRef = doc(usersCollectionRef, partnersId);
  try {
    await updateDoc(userDocRef, updatedPartnerData);
  } catch (error) {
    console.error("Error updating partner: ", error);
    throw error;
  }
};

export const deletePartner = async (partnersId) => {
  const userDocRef = doc(usersCollectionRef, partnersId);
  try {
    await deleteDoc(userDocRef);
  } catch (error) {
    console.error("Error deleting partner: ", error);
    throw error;
  }
};
