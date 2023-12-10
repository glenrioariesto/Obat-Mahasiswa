import React, { createContext } from "react";

import axios from "axios";
const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
  const ApiAppointment = "http://localhost:3001/api/v1/appointment";

  const fetchAppointment = async () => {
    try {
      const res = await axios.get(ApiAppointment);
      console.log("berhasil fetch appointment: ", res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching appointment data:", error.code);
    }
  };
  const fetchAppointmentById = async (id) => {
    try {
      const res = await axios.get(ApiAppointment + "/" + id);

      return res.data;
    } catch (error) {
      console.error("Error fetching appointment data:", error.code);
    }
  };

  const fetchAppointmentByuserId = async (userId) => {
    try {
      const res = await axios.get(
        "http://localhost:3001/api/v1/user/" + userId + "/appointment"
      );

      return res.data;
    } catch (error) {
      console.error("Error fetching appointment data:", error.code);
    }
  };

  const addAppointment = async (userId, body) => {
    try {
      await axios.post(
        "http://localhost:3001/api/v1/user/" + userId + "/appointment",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error Add Appointment:", error.code);
    }
  };

  const updateAppointment = async (id, body) => {
    try {
      await axios.put(ApiAppointment + "/" + id, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error Add appointment:", error.code);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(ApiAppointment + "/" + id);
      console.log("sukses delete");
    } catch (error) {
      console.error("Error fetching appointment data:", error.code);
    }
  };

  return (
    <AppointmentContext.Provider
      value={{
        fetchAppointment,
        fetchAppointmentById,
        fetchAppointmentByuserId,
        addAppointment,
        updateAppointment,
        deleteAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export { AppointmentProvider, AppointmentContext };
