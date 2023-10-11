import React, { createContext } from "react";

import axios from "axios";
const PartnerContext = createContext();

const PartnerProvider = ({ children }) => {
  const ApiPartner = "http://localhost:3001/partners";

  const fetchPartner = async () => {
    try {
      const res = await axios.get(ApiPartner);
      console.log("berhasil fetch partner: ", res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching partner data:", error.code);
    }
  };
  const fetchPartnerById = async (id) => {
    try {
      const res = await axios.get(ApiPartner + "/" + id);

      return res.data;
    } catch (error) {
      console.error("Error fetching partner data:", error.code);
    }
  };

  const addPartner = async (name, alamat, deskripsi, imgUrl, pathstorage) => {
    try {
      await axios.post(
        ApiPartner + "/add/",
        {
          name: name ? name : "",
          alamat: alamat ? alamat : "",
          deskripsi: deskripsi ? deskripsi : "",
          imgUrl: imgUrl,
          pathstorage: pathstorage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error Add partner:", error.code);
    }
  };

  const UpdatePartner = async (
    id,
    name,
    alamat,
    deskripsi,
    imgUrl,
    pathstorage
  ) => {
    try {
      await axios.put(
        ApiPartner + "/" + id,
        {
          name: name ? name : "",
          alamat: alamat ? alamat : "",
          deskripsi: deskripsi ? deskripsi : "",
          imgUrl: imgUrl,
          pathstorage: pathstorage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error Add partner:", error.code);
    }
  };

  const deletePartner = async (id) => {
    try {
      await axios.delete(ApiPartner + "/" + id);
      console.log("sukses delete");
    } catch (error) {
      console.error("Error fetching partner data:", error.code);
    }
  };

  return (
    <PartnerContext.Provider
      value={{
        fetchPartner,
        fetchPartnerById,
        addPartner,
        UpdatePartner,
        deletePartner,
      }}
    >
      {children}
    </PartnerContext.Provider>
  );
};

export { PartnerProvider, PartnerContext };
