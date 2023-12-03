import React, { createContext } from "react";

import axios from "axios";
const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
  const ApiDoctor = "http://localhost:3001/api/v1/doctors";

  const fetchDoctor = async () => {
    try {
      const res = await axios.get(ApiDoctor);
      console.log("berhasil fetch doctor: ", res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching doctor data:", error.code);
    }
  };
  const fetchDoctorById = async (id) => {
    try {
      const res = await axios.get(ApiDoctor + "/" + id);

      return res.data;
    } catch (error) {
      console.error("Error fetching doctor data:", error.code);
    }
  };

  const fetchDoctorBypartnerId = async (id) => {
    try {
      const res = await axios.get(
        "http://localhost:3001/api/v1/partner/" + id + "/doctors"
      );

      return res.data;
    } catch (error) {
      console.error("Error fetching doctor data:", error.code);
    }
  };

  const addDoctor = async (
    partnerid,
    name,
    keahlian,
    lokasi,
    pendidikan,
    kondisi_klinis,
    prestasi,
    seminar,
    imgUrl,
    pathstorage,
    date
  ) => {
    try {
      await axios.post(
        "http://localhost:3001/api/v1/partner/" + partnerid + "/doctors",
        {
          name: name ? name : "",
          keahlian: keahlian ? keahlian : "",
          lokasi: lokasi ? lokasi : "",
          pendidikan: pendidikan ? pendidikan : "",
          kondisi_klinis: kondisi_klinis ? kondisi_klinis : "",
          prestasi: prestasi ? prestasi : "",
          seminar: seminar ? seminar : "",
          imgUrl: imgUrl,
          pathstorage: pathstorage,
          date: date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error Add doctor:", error.code);
    }
  };

  const updateDoctor = async (
    id,
    partnerId,
    name,
    keahlian,
    lokasi,
    pendidikan,
    kondisi_klinis,
    prestasi,
    seminar,
    imgUrl,
    pathstorage,
    date
  ) => {
    try {
      await axios.put(
        ApiDoctor + "/" + id,
        {
          partnerId: partnerId ? partnerId : "",
          name: name ? name : "",
          keahlian: keahlian ? keahlian : "",
          lokasi: lokasi ? lokasi : "",
          pendidikan: pendidikan ? pendidikan : "",
          kondisi_klinis: kondisi_klinis ? kondisi_klinis : "",
          prestasi: prestasi ? prestasi : "",
          seminar: seminar ? seminar : "",
          imgUrl: imgUrl,
          pathstorage: pathstorage,
          date: date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error Add doctor:", error.code);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      await axios.delete(ApiDoctor + "/" + id);
      console.log("sukses delete");
    } catch (error) {
      console.error("Error fetching doctor data:", error.code);
    }
  };

  return (
    <DoctorContext.Provider
      value={{
        fetchDoctor,
        fetchDoctorById,
        fetchDoctorBypartnerId,
        addDoctor,
        updateDoctor,
        deleteDoctor,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export { DoctorProvider, DoctorContext };
