import { useState } from "react";
import MainNavbarDashboard from "./NavbarDashboard/MainNavbarDashboard";
import MainNavbarLobby from "./NavbarLobby/MainNavbarLobby";
import { useLocation } from "react-router-dom";

const MainNavbar = () => {
  const location = useLocation();
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  const isNavbar = location.pathname === "/" || location.pathname === "/login";

  if (isNavbar) {
    setIsNavbarShow(!isNavbarShow);
  }
  return <MainNavbarLobby />;
};

export default MainNavbar;
