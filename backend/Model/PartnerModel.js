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
const partnersCollectionRef = collection(db, "Partners");

export const getPartner = async () => {
  const partners = [];
  const querySnapshot = await getDocs(partnersCollectionRef);
  querySnapshot.forEach((doc) => {
    partners.push({ id: doc.id, ...doc.data() });
  });
  return partners;
};

export const getPartnerById = async (partnersId) => {
  const partnerDocRef = doc(partnersCollectionRef, partnersId);
  const partnerDocSnapshot = await getDoc(partnerDocRef);
  if (partnerDocSnapshot.exists()) {
    return { id: partnerDocSnapshot.id, ...partnerDocSnapshot.data() };
  }
  return null;
};

export const addPartner = async (partnerData) => {
  try {
    const docRef = await addDoc(partnersCollectionRef, partnerData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding partner: ", error);
    throw error;
  }
};

export const updatePartner = async (partnersId, updatedPartnerData) => {
  const partnerDocRef = doc(partnersCollectionRef, partnersId);
  try {
    await updateDoc(partnerDocRef, updatedPartnerData);
  } catch (error) {
    console.error("Error updating partner: ", error);
    throw error;
  }
};

export const deletePartner = async (partnersId) => {
  const partnerDocRef = doc(partnersCollectionRef, partnersId);
  try {
    await deleteDoc(partnerDocRef);
  } catch (error) {
    console.error("Error deleting partner: ", error);
    throw error;
  }
};
