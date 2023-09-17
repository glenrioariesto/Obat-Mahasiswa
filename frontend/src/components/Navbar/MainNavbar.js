import React, { useState, useEffect } from "react";
import logo from "../../assets/image/logo.png";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import ListMenu from "./ListMenu";
import MobileMenuDropdown from "./MenuDropdown";
import LoginButton from "./LoginButton";
import EmergencyButton from "./EmergencyButton";
import MobileMenu from "./MoblieMenu";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBar, setIsBar] = useState(false);

  const toggleMenu = () => {
    setIsBar(!isBar);
    console.log(isBar);
    console.log("ada");
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
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white py-4 z-10 shadow-lg">
      <div className="container mx-auto pb-2">
        <div className="flex items-center justify-between">
          <div className="flex-initial cursor-default">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </div>
          <SearchInput isMenuOpen={isMenuOpen} />
          <SearchButton isMenuOpen={isMenuOpen} />
          <div className="flex items-center justify-between">
            <EmergencyButton isMenuOpen={isMenuOpen} />
            <LoginButton isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 text-black pt-1">
        <div className="container mx-auto">
          <MobileMenu
            isMenuOpen={isMenuOpen}
            isBar={isBar}
            toggleMenu={toggleMenu}
          />
          <ListMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenuDropdown isBar={isBar} isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default MainNavbar;
