import React, { createContext, useEffect, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState("Profile");
  const [openDropDown, setOpenDropDown] = useState(false);

  const changeItems = (items) => {
    setMenuItems(items);
  };
  const changeOpenDropdown = (items) => {
    setOpenDropDown(items);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <NavbarContext.Provider
      value={{ menuItems, changeItems, openDropDown, changeOpenDropdown }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarProvider, NavbarContext };
