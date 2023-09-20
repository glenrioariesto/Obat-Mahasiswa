import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/UserAuthentication";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const Dashboard = () => {
  const { accestoken, user } = useContext(AuthContext);
  console.log(user);
  console.log(accestoken);
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState("Profile");

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
      <div className="w-2/12 bg-blue-400 flex flex-col items-center">
        {/* Sidebar */}
        <aside className="pt-5 w-[150px] flex flex-col items-center">
          <div className="mb-4 flex flex-col items-center">
            <img
              src={logo}
              alt="Profile"
              className="rounded-full bg-white"
              style={{ width: "100px", height: "100px" }}
            />

            <div className="mt-4 w-full">
              <button
                className={`w-full hover:bg-blue-800 font-bold py-2 px-4  rounded ${
                  currentItem === "Profile"
                    ? "bg-blue-700 text-white"
                    : " bg-white  text-gray-800"
                }`}
                onClick={() => handleSidebarItemClick("Profile")}
              >
                Profile
              </button>
            </div>

            <div className="my-2 w-full">
              <button
                className={`w-full hover:bg-blue-800 font-bold py-2 px-4  rounded ${
                  currentItem === "blast-gmail"
                    ? "bg-blue-700 text-white"
                    : " bg-white  text-gray-800"
                }`}
                onClick={() => handleSidebarItemClick("blast-gmail")}
              >
                Blast Gmail
              </button>
            </div>
          </div>
        </aside>
      </div>

      <div className="w-10/12 bg-white p-5">
        {/* Content */}
        <div className="content">
          {currentItem === "Profile" && (
            <div>
              <h1>Profile</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          )}
          {currentItem === "blast-gmail" && (
            <div>
              <h1>Blast Gmail</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
