import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserAuthentication";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSignOutAlt,
  faUserPen,
  faHandshake,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarContext } from "../../contexts/NavbarContext";

import Profile from "./Profile";
import PartnerOK from "./PartnerOK";
import AddPartnerOK from "./AddPartnerOK";

const Dashboard = () => {
  const { accestoken, logout, user, fetchData } = useContext(AuthContext);
  const { menuItems, changeItems } = useContext(NavbarContext);
  const [dataUsers, setUserData] = useState({});

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (accestoken === "") {
      navigate("/login");
    } else {
      if (user.uid) {
        const userData = async () => {
          try {
            const res = await fetchData(user.uid);
            const { status } = res;
            const { photoURL, email } = user;
            setUserData({ email, photoURL, status });
          } catch (error) {
            console.error("Error fetching user detail:", error);
          }
        };

        userData();
      }
    }
  }, [accestoken, user, fetchData, navigate]);

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
          <div className="my-2 p-2 w-full">
            <button
              className={`w-full hover:bg-blue-800 hover:text-white py-2 px-2  rounded ${
                menuItems === "Profile"
                  ? "bg-blue-700 text-white"
                  : " bg-white  text-gray-800"
              }`}
              onClick={() => handleSidebarItemClick("Profile")}
            >
              <div className="flex  items-center justify-center">
                <FontAwesomeIcon
                  icon={faUserPen}
                  className="mx-3  text-[20px]"
                />
                Profile
              </div>
            </button>
          </div>
          <div
            className={`my-2 p-2  w-full ${
              dataUsers && dataUsers.status === "Admin" ? "hidden" : ""
            } `}
          >
            <button
              className={`w-full hover:bg-blue-800 hover:text-white text-center py-2 px-2  rounded ${
                menuItems === "JanjiTemu"
                  ? "bg-blue-700 text-white"
                  : " bg-white  text-gray-800"
              }`}
              onClick={() => handleSidebarItemClick("JanjiTemu")}
            >
              <div className="flex  items-center justify-center">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="mx-3  text-[20px]"
                />
                Buat Janji Temu
              </div>
            </button>
          </div>
          <div
            className={`my-2 p-2  w-full ${
              dataUsers && dataUsers.status === "Admin" ? "" : "hidden"
            } `}
          >
            <button
              className={`w-full hover:bg-blue-800 hover:text-white text-center py-2 px-2  rounded ${
                menuItems === "PartnerOK"
                  ? "bg-blue-700 text-white"
                  : " bg-white  text-gray-800"
              }`}
              onClick={() => handleSidebarItemClick("PartnerOK")}
            >
              <div className="flex  items-center justify-center">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="mx-2 text-[20px]"
                />
                Partner Obat Mahasiswa
              </div>
            </button>
          </div>{" "}
          <div
            className={`my-2 p-2  w-full ${
              dataUsers && dataUsers.status === "Admin" ? "" : "hidden"
            } `}
          >
            {" "}
            <button
              className={`w-full hover:bg-blue-800 hover:text-white text-center py-2 px-2  rounded ${
                menuItems === "AddPartner"
                  ? "bg-blue-700 text-white"
                  : " bg-white  text-gray-800"
              }`}
              onClick={() => handleSidebarItemClick("AddPartner")}
            >
              <div className="flex  items-center justify-center">
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className="mx-2 text-[20px]"
                />
                Add Partner
              </div>
            </button>
          </div>
          <div className="my-2 p-2  w-full">
            <button
              className={`w-full hover:bg-blue-800 text-gray-800 hover:text-white text-center font-bold py-2 px-2  rounded `}
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
            {menuItems === "JanjiTemu" && (
              <div>
                <h1>Blast Gmail</h1>
              </div>
            )}{" "}
            {menuItems === "AddPartner" && <AddPartnerOK />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
