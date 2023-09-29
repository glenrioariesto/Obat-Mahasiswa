import React, { createContext, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState("Profile");
  const [openDropDown, setOpenDropDown] = useState(false);
  const [status, setStatus] = useState("Pasien");
  const changeItems = (items) => {
    setMenuItems(items);
  };
  const changeOpenDropdown = (items) => {
    setOpenDropDown(items);
  };

  return (
    <NavbarContext.Provider
      value={{
        menuItems,
        changeItems,
        openDropDown,
        changeOpenDropdown,
        status,
        setStatus,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarProvider, NavbarContext };
