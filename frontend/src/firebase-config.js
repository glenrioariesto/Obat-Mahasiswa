import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2hvYHFGWSKkUtatIaxUukKz1gPYb62Gw",
  authDomain: "obat-keluarga.firebaseapp.com",
  projectId: "obat-keluarga",
  storageBucket: "obat-keluarga.appspot.com",
  messagingSenderId: "73484518469",
  appId: "1:73484518469:web:daa722eeb9b4d73bf90f2c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
