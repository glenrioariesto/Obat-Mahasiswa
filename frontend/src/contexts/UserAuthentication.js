import { auth } from "../firebase-config.js";
import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");
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
    <AuthContext.Provider value={{ user, accestoken, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
