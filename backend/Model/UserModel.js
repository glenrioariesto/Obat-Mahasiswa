import { db } from "../config/ConfigDatabase.js ";
import {
  getDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
const usersCollectionRef = collection(db, "Users");

export const getUsers = async () => {
  const users = [];
  const querySnapshot = await getDocs(usersCollectionRef);
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};

export const getUserById = async (userId) => {
  const userDocRef = doc(usersCollectionRef, userId);
  const userDocSnapshot = await getDoc(userDocRef);
  if (userDocSnapshot.exists()) {
    return { id: userDocSnapshot.id, ...userDocSnapshot.data() };
  }
  return null;
};

export const createUser = async (id, userData) => {
  try {
    const userDocRef = doc(usersCollectionRef, id);
    await setDoc(userDocRef, userData);
    return id;
  } catch (error) {
    console.error("Error adding user: ", error);
    throw error;
  }
};

export const updateUser = async (userId, updatedUserData) => {
  const userDocRef = doc(usersCollectionRef, userId);
  try {
    await updateDoc(userDocRef, updatedUserData);
  } catch (error) {
    console.error("Error updating user: ", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  const userDocRef = doc(usersCollectionRef, userId);
  try {
    await deleteDoc(userDocRef);
  } catch (error) {
    console.error("Error deleting user: ", error);
    throw error;
  }
};
