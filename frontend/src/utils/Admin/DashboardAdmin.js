import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/UserAuthentication";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faUserPen,
  faHandshake,
  faUserMd,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarContext } from "../../contexts/NavbarContext";

import Profile from "../Profile";
import PartnerOK from "./PartnerOK";
import DokterOK from "./DokterOK";

const DashboardAdmin = () => {
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
        menuItems && menuItems === "PartnerOK"
          ? "h-[670px] sm:h-[650px] md:h-[650px] lg:h-[1060px] xl:h-[740px]"
          : menuItems && menuItems === "Profile"
          ? "h-screen sm:h-screen md:h-screen lg:h-screen xl:h-screen"
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
                <div className="flex justify-center items-center ">
                  <div className="mx-2">
                    <FontAwesomeIcon
                      icon={faUserPen}
                      className=" text-[20px]"
                    />
                  </div>
                  <div className="mx-2">Profile</div>
                </div>
              </button>
            </div>
            <div className={`my-2 p-2  w-full  `}>
              <button
                className={`w-full hover:bg-blue-800 hover:text-white text-center py-2 px-2  rounded ${
                  menuItems === "PartnerOK"
                    ? "bg-blue-700 text-white"
                    : " bg-white  text-gray-800"
                }`}
                onClick={() => handleSidebarItemClick("PartnerOK")}
              >
                <div className="flex justify-center items-center ">
                  <div className="mx-2">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      className=" text-[20px]"
                    />
                  </div>
                  <div className="mx-2">Partner Obat Mahasiswa</div>
                </div>
              </button>
            </div>
            <div className={`my-2 p-2  w-full  `}>
              <button
                className={`w-full hover:bg-blue-800 hover:text-white text-center py-2 px-2  rounded ${
                  menuItems === "Dokter"
                    ? "bg-blue-700 text-white"
                    : " bg-white  text-gray-800"
                }`}
                onClick={() => handleSidebarItemClick("Dokter")}
              >
                <div className="flex justify-center items-center">
                  <div className="mx-2">
                    <FontAwesomeIcon icon={faUserMd} className="text-[20px]" />
                  </div>
                  <div className="mx-2">Dokter</div>
                </div>
              </button>
            </div>{" "}
            <div className={`my-2 p-2  w-full  `}>
              <button
                className={`w-full hover:bg-blue-800 hover:text-white text-center py-2 px-2  rounded ${
                  menuItems === "DaftarJanjiTemu"
                    ? "bg-blue-700 text-white"
                    : " bg-white  text-gray-800"
                }`}
                onClick={() => handleSidebarItemClick("DaftarJanjiTemu")}
              >
                <div className="flex justify-center items-center">
                  <div className="mx-2">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="text-[20px]"
                    />
                  </div>
                  <div className="mx-2">Daftar Janji Temu</div>
                </div>
              </button>
            </div>
            <div className="my-2 p-2  w-full">
              <button
                className={`w-full hover:bg-blue-800 text-gray-800 hover:text-white text-center font-bold py-2 px-2  rounded `}
                onClick={() => handleLogout()}
              >
                <div className="flex justify-center items-center">
                  <div className="mx-2">
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className=" text-[20px]"
                    />
                  </div>
                  <div className="mx-2">Log out</div>
                </div>
              </button>
            </div>
          </div>
          {/* )} */}
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
            {menuItems === "PartnerOK" && <PartnerOK />}
            {menuItems === "Dokter" && <DokterOK />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
