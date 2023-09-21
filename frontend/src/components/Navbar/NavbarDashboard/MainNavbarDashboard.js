import React, { useState, useEffect, useContext } from "react";

import ListMenu from "./ListMenu";
import MobileMenuDropdown from "./MenuDropdown";

import MobileMenu from "./MoblieMenu";
import { AuthContext } from "../../../contexts/UserAuthentication";
import { NavbarContext } from "../../../contexts/Navbar";
import { useLocation } from "react-router-dom";

const MainNavbarDashboard = () => {
  const { accestoken } = useContext(AuthContext);
  const { openDropDown, changeOpenDropdown } = useContext(NavbarContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isOnLoginPage = location.pathname === "/login";

  const toggleMenu = () => {
    changeOpenDropdown(!openDropDown);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [accestoken]);

  return (
    <div>
      <nav className=" py-2 shadow-sm">
        <div className="container mx-auto lg:mx-auto  ">
          <MobileMenu isBar={openDropDown} toggleMenu={toggleMenu} />
          <ListMenu isMenuOpen={isMenuOpen} pathname={isOnLoginPage} />
        </div>
        <MobileMenuDropdown isBar={openDropDown} isMenuOpen={isMenuOpen} />
      </nav>
    </div>
  );
};

export default MainNavbarDashboard;
