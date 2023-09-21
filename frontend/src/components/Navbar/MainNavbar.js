import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/image/logo.png";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import ListMenu from "./ListMenu";
import MobileMenuDropdown from "./MenuDropdown";
import LoginButton from "./LoginButton";
import EmergencyButton from "./EmergencyButton";
import MobileMenu from "./MoblieMenu";
import { AuthContext } from "../../contexts/UserAuthentication";
import { useLocation } from "react-router-dom";

const MainNavbar = () => {
  const { accestoken } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBar, setIsBar] = useState(false);
  const location = useLocation();
  const isOnLoginPage = location.pathname === "/login";
  console.log(location.pathname === "/login");
  const toggleMenu = () => {
    setIsBar(!isBar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };
    // console.log(accestoken);
    // const isOnLandingLoginPage =
    //   location.pathname === "/" || location.pathname === "/login";
    // const isOnHomePage = location.pathname === "/dashboard";
    // console.log(location.pathname);

    // if (!accestoken && isOnLandingLoginPage) {
    //   setNavbarOpen(true);
    // } else if (accestoken && location.pathname === "/") {
    //   setNavbarOpen(true);
    // } else if (accestoken && isOnHomePage) {
    //   setNavbarOpen(false);
    // }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [accestoken]);

  return (
    <div>
      <nav className=" fixed top-0 left-0 right-0 bg-white py-4 z-10 shadow-lg">
        <div className="container mx-auto pb-2">
          <div className="flex items-center justify-between">
            <div className="flex-initial cursor-default">
              <img src={logo} alt="Logo" className="w-16 h-16" />
            </div>
            <SearchInput isMenuOpen={isMenuOpen} />
            <SearchButton isMenuOpen={isMenuOpen} />
            <div className="flex items-center justify-between">
              <EmergencyButton isMenuOpen={isMenuOpen} />
              <LoginButton changeClassName={isMenuOpen ? "" : "hidden"} />
            </div>
          </div>
        </div>
        <div className=" border-t-2 border-gray-300 text-black pt-1">
          <div className="container mx-auto">
            <MobileMenu
              isMenuOpen={isMenuOpen}
              isBar={isBar}
              toggleMenu={toggleMenu}
            />
            <ListMenu isMenuOpen={isMenuOpen} pathname={isOnLoginPage} />
          </div>
        </div>
        <MobileMenuDropdown isBar={isBar} isMenuOpen={isMenuOpen} />
      </nav>
    </div>
  );
};

export default MainNavbar;
