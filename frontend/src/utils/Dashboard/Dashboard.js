import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/UserAuthentication";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSignOutAlt,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { accestoken, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState("Profile");

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
    setCurrentItem(item);
  };

  return (
    <div className="flex pt-[150px] h-screen">
      {/* Sidebar */}
      <aside className="pt-5 w-2/12 flex flex-col items-center  ">
        <div className="mb-4 flex flex-col items-center">
          {/* <img
            src={logo}
            alt="Profile"
            className="rounded-full bg-white"
            style={{ width: "100px", height: "100px" }}
          /> */}
          <div className="font-bold text-[20px]">
            <p>Obat Keluarga</p>
          </div>
          <div className="mt-4 w-full">
            <button
              className={`w-full hover:bg-blue-800 hover:text-white py-2 px-2  rounded ${
                currentItem === "Profile"
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
                currentItem === "janjiTemu"
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
          <div className="my-2 pt-[245px] w-full">
            <button
              className={`w-full hover:bg-blue-800 hover:text-white  font-bold py-2 px-2  rounded ${
                currentItem === "Log out"
                  ? "bg-blue-700 text-white"
                  : " bg-white  text-gray-800"
              }`}
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
        className="w-10/12 p-5"
      >
        {/* Content */}
        <div className="content">
          {currentItem === "Profile" && (
            <div>
              <h1>Profile</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          )}
          {currentItem === "janjiTemu" && (
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
