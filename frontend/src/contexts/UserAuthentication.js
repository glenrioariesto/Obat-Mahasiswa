import { auth } from "../firebase-config.js";
import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accestoken, setAccestoken] = useState("");
  const [user, setUser] = useState({});

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      userCredential.user.getIdToken().then((accessToken) => {
        setAccestoken(accessToken);
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("user", userCredential.user);
      });
      return;
    } catch (error) {
      // console.log(error.code);
      return error.code;
    }
  };

  const changePassword = async (oldPassword, newPassword) => {
    try {
      // Reautentikasi pengguna terlebih dahulu
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);

      // Mengganti password
      await updatePassword(user, newPassword);
      return;
    } catch (error) {
      // Penanganan kesalahan jika ada
      return error.code;
    }
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");

    setAccestoken("");
    return signOut(auth);
  };

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // console.log(error.code);
      return error.code;
    }
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    const storedAccessToken = sessionStorage.getItem("accessToken");
    if (storedAccessToken) {
      setAccestoken(storedAccessToken);
      setUser(sessionStorage.getItem("user"));
    }
    return () => {
      unsubsribe();
    };
  }, [accestoken, setAccestoken]);

  return (
    <AuthContext.Provider
      value={{ user, accestoken, login, register, logout, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
