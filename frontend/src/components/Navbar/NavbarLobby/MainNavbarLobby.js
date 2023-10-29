import React, { useState, useEffect, useContext } from "react";
import logo from "../../../assets/image/logo.png";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import ListMenu from "./ListMenu";
import MobileMenuDropdown from "./MenuDropdown";
import LoginButton from "./LoginButton";
import EmergencyButton from "./EmergencyButton";
import MobileMenu from "./MoblieMenu";
import { AuthContext } from "../../../contexts/UserAuthentication";
import { useLocation, useNavigate } from "react-router-dom";
import MainNavbarDashboard from "../NavbarDashboard/MainNavbarDashboard";

const MainNavbarLobby = () => {
  const [search, setSearch] = useState("");
  const { accestoken } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBar, setIsBar] = useState(false);
  const location = useLocation();
  const isOnLobbyPage =
    location.pathname === "/login" ||
    location.pathname === "/" ||
    location.pathname === "/tentang-kami" ||
    location.pathname === "/detailPartner" ||
    location.pathname === "/search" ||
    location.pathname === "/profiledokter";
  const navigate = useNavigate();

  const isOnLoginPage = location.pathname === "/login";
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

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [accestoken]);

  return (
    <div>
      {isOnLobbyPage ? (
        <nav className=" fixed top-0 left-0 right-0 bg-white py-4 z-10 shadow-lg">
          <div className="container mx-auto pb-2">
            <div className="flex items-center justify-between">
              <div className="flex-initial cursor-default">
                <img src={logo} alt="Logo" className=" h-9" />
              </div>
              <SearchInput
                isMenuOpen={isMenuOpen}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <SearchButton
                isMenuOpen={isMenuOpen}
                handleClick={() => {
                  navigate(`/search?cardId=${search}`);
                }}
              />
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
      ) : (
        <MainNavbarDashboard />
      )}
    </div>
  );
};

export default MainNavbarLobby;
