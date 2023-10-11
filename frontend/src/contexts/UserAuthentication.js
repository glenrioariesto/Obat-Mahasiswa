import { auth } from "../firebase-config.js";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

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
  const linkApiBackend = "http://localhost:3001/users";
  // const [dataUsers, setDataUsers] = useState([]);

  const addUser = async (id) => {
    try {
      const response = await axios.post(
        linkApiBackend + "/create/" + id,
        {
          status: "Pasien",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("berhasil menambahkan status: ", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchData = async (id) => {
    try {
      const res = await axios.get(linkApiBackend + "/" + id);
      console.log("berhasil fetch Data User: ", res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

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

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addUser(userCredential.user.uid);
      console.log(userCredential.user);
    } catch (error) {
      // console.log(error.code);
      return error.code;
    }
  };

  const changePassword = async (oldPassword, newPassword) => {
    try {
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);
      return;
    } catch (error) {
      // console.log(error.code);
      return error.code;
    }
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");

    setAccestoken("");
    return signOut(auth);
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
  }, [accestoken, user, setAccestoken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accestoken,
        fetchData,
        login,
        register,
        logout,
        changePassword,
        addUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
