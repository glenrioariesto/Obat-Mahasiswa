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

  const fetchAppointmentByuserId = async (id) => {
    try {
      const res = await axios.get(
        "http://localhost:3001/api/v1/user/" + id + "/appointments"
      );

      return res.data;
    } catch (error) {
      console.error("Error fetching appointment data:", error.code);
    }
  };

  const addAppointment = async (
    userid,
    spesialisasi,
    partner,
    sesi,
    status,
    date
  ) => {
    try {
      await axios.post(
        "http://localhost:3001/api/v1/user/" + userid + "/appointments",
        {
          spesialisasi: spesialisasi,
          partner: partner,
          sesi: sesi,
          status: status,
          date: date,
        },
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

  const updateAppointment = async (
    id,
    userId,
    spesialisasi,
    partner,
    sesi,
    status,
    date
  ) => {
    try {
      await axios.put(
        ApiAppointment + "/" + id,
        {
          userId: userId,
          spesialisasi: spesialisasi,
          partner: partner,
          sesi: sesi,
          status: status,
          date: date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
