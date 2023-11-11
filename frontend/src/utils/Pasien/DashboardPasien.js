import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/UserAuthentication";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSignOutAlt,
  faUserPen,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarContext } from "../../contexts/NavbarContext";

import Profile from "../Profile";
import JanjiTemu from "./JanjiTemu";
import Riwayat from "./Riwayat";

const DashboardPasien = () => {
  const { accestoken, logout } = useContext(AuthContext);
  const { menuItems, changeItems } = useContext(NavbarContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (accestoken === "") {
      navigate("/login");
    }
  }, [accestoken, navigate]);

  const handleSidebarItemClick = (item) => {
    changeItems(item);
  };

  return (
    <div
      className={`flex pt-3  ${
        menuItems && menuItems === "Profile"
          ? "h-screen sm:h-screen md:h-screen lg:h-screen xl:h-screen"
          : menuItems && menuItems === "JanjiTemu"
          ? "h-[800px] sm:h-[800px] md:h-[800px] lg:h-[640px]"
          : menuItems && menuItems === "Riwayat"
          ? "h-[500px] lg:h-[740px] "
          : ""
      } `}
    >
      {/* Sidebar */}

      <aside className="pt-5 w-2/12 flex flex-col items-center hidden sm:hidden md:block lg:block">
        <div className="mb-4 flex flex-col items-center">
          <div className="font-bold text-[20px] md:text-[18px]">
            <p>Obat Mahasiswa</p>
          </div>
          <div>
            <div className="my-2 p-2 w-full">
              <button
                className={`w-full hover:bg-blue-800 hover:text-white py-2 px-2  rounded ${
                  menuItems === "Profile"
                    ? "bg-blue-700 text-white"
                    : " bg-white  text-gray-800"
                }`}
                onClick={() => handleSidebarItemClick("Profile")}
              >
                <div className="flex  items-center ">
                  <FontAwesomeIcon
                    icon={faUserPen}
                    className="mx-3  text-[20px]"
                  />
                  Profile
                </div>
              </button>
            </div>
            <div className={`my-2 p-2  w-full  `}>
              <button
                className={`w-full hover:bg-blue-800 hover:text-white text-center py-2 px-2  rounded ${
                  menuItems === "JanjiTemu"
                    ? "bg-blue-700 text-white"
                    : " bg-white  text-gray-800"
                }`}
                onClick={() => handleSidebarItemClick("JanjiTemu")}
              >
                <div className="flex  items-center ">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="mx-3  text-[20px]"
                  />
                  Buat Janji Temu
                </div>
              </button>
            </div>{" "}
            <div className={`my-2 p-2  w-full  `}>
              <button
                className={`w-full hover:bg-blue-800 hover:text-white text-center py-2 px-2  rounded ${
                  menuItems === "Riwayat"
                    ? "bg-blue-700 text-white"
                    : " bg-white  text-gray-800"
                }`}
                onClick={() => handleSidebarItemClick("Riwayat")}
              >
                <div className="flex  items-center ">
                  <FontAwesomeIcon
                    icon={faHistory}
                    className="mx-3  text-[20px]"
                  />
                  Riwayat
                </div>
              </button>
            </div>
            <div className="my-2 p-2  w-full">
              <button
                className={`w-full hover:bg-blue-800 text-gray-800 hover:text-white text-start font-bold py-2 px-2 rounded `}
                onClick={() => handleLogout()}
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="mx-3  text-[20px]"
                />
                Log out
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div
        style={{ backgroundColor: "rgb(229,231,235)" }}
        className="w-full sm:w-full md:w-10/12 lg:w-10/12 p-3"
      >
        {/* Content */}
        <div className="container bg-white h-full mx-auto rounded ">
          <div className="content h-[580px]">
            {menuItems === "Profile" && <Profile />}
            {menuItems === "JanjiTemu" && <JanjiTemu />}
            {menuItems === "Riwayat" && <Riwayat />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPasien;
