import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/UserAuthentication";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSignOutAlt,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarContext } from "../../contexts/Navbar";

const Dashboard = () => {
  const { accestoken, logout } = useContext(AuthContext);
  const { menuItems, changeItems } = useContext(NavbarContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (accestoken === "") {
      navigate("/");
    }
  }, [accestoken, navigate]);
  const handleSidebarItemClick = (item) => {
    changeItems(item);
  };

  return (
    <div className="flex pt-3 h-screen">
      {/* Sidebar */}
      <aside className="pt-5 w-2/12 flex flex-col items-center hidden sm:hidden md:block lg:block">
        <div className="mb-4 flex flex-col items-center">
          <div className="font-bold text-[20px] md:text-[18px]">
            <p>Obat Keluarga</p>
          </div>
          <div className="mt-4 w-full">
            <button
              className={`w-full hover:bg-blue-800 hover:text-white py-2 px-2  rounded ${
                menuItems === "Profile"
                  ? "bg-blue-700 text-white"
                  : " bg-white  text-gray-800"
              }`}
              onClick={() => handleSidebarItemClick("Profile")}
            >
              {" "}
              <FontAwesomeIcon icon={faUserPen} className="mr-2" />
              Profile
            </button>
          </div>
          <div className="my-2 w-full">
            <button
              className={`w-full hover:bg-blue-800 hover:text-white  py-2 px-2  rounded ${
                menuItems === "janjiTemu"
                  ? "bg-blue-700 text-white"
                  : " bg-white  text-gray-800"
              }`}
              onClick={() => handleSidebarItemClick("janjiTemu")}
            >
              {" "}
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Janji Temu
            </button>
          </div>
          <div className="my-2 pt-[380px] md:pt-[380px] lg:pt-[380px]  w-full">
            <button
              className={`w-full hover:bg-blue-800 text-gray-800 hover:text-white  font-bold py-2 px-2  rounded `}
              onClick={() => handleLogout()}
            >
              {" "}
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Log out
            </button>
          </div>
        </div>
      </aside>

      <div
        style={{ backgroundColor: "rgb(229,231,235)" }}
        className="w-full sm:w-full md:w-10/12 lg:w-10/12 p-5"
      >
        {/* Content */}
        <div className="content">
          {menuItems === "Profile" && (
            <div>
              <h1>Profile</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          )}
          {menuItems === "janjiTemu" && (
            <div>
              <h1>Blast Gmail</h1>
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
