/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBar, setIsBar] = useState(false);

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
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white py-4 z-50 shadow-lg">
      <div className="container mx-auto pb-2 ">
        <div className="flex items-center justify-between">
          <div className="flex-initial ml-3">
            <p>LOGO</p>
          </div>
          <div className={`flex-1 px-2 ${isMenuOpen ? "hidden" : ""}`}>
            <Input
              placeholder="Cari yang anda butuhkan"
              className={"py-2 px-4 "}
            />
          </div>
          <button
            className={`${
              isMenuOpen ? "hidden" : "w-24"
            } mx-2 h-10 bg-blue-500 text-white py-2 px-4 rounded-[25px]`}
          >
            Cari
          </button>
          <div className="flex items-center justify-between">
            <button
              className={`btn bg-red-500 text-white py-2 px-4 rounded-[25px]`}
            >
              <FontAwesomeIcon
                icon={faAmbulance}
                className="mr-2 text-[14px]"
              />
              {isMenuOpen ? "IGD" : "Gawat Darurat"}
            </button>
            <button
              className={`${
                isMenuOpen ? "" : "hidden"
              } mx-2 h-10 bg-gray-200 text-gray-600 py-2 px-4 rounded-[25px]`}
            >
              <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 text-black pt-1 ">
        <div className="container mx-auto ">
          <div className="md:hidden flex items-center">
            <button className={`btn mx-2`} onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={isBar ? faClose : faBars}
                className="text-[22px]"
              />
            </button>

            <Input
              placeholder="Cari yang anda butuhkan"
              className={`mr-3 py-1 px-4 transition-all duration-300 ease-in-out  ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              disabled={isBar}
            />
          </div>
          <ul
            className={`flex  ${
              isMenuOpen ? "hidden" : "justify-start md:ml-16"
            }`}
          >
            <li className="mr-4  ">
              <a
                href="/"
                className="text-lg no-underline hover:underline hover:text-blue-400 "
              >
                Beranda
              </a>
            </li>
            <li className="mr-4   ">
              <a
                href="/tentang-kami"
                className=" text-lg no-underline hover:underline hover:text-blue-400"
              >
                Tentang Kami
              </a>
            </li>
            <li className="mr-4   ">
              <a
                href="/"
                className=" text-lg no-underline hover:underline hover:text-blue-400"
              >
                Cabang
              </a>
            </li>
            <li className="mr-4   ">
              <a
                href="/"
                className=" text-lg no-underline hover:underline hover:text-blue-400"
              >
                Spesialisai
              </a>
            </li>
            <li className="mr-4   ">
              <a
                href="/"
                className=" text-lg no-underline hover:underline hover:text-blue-400"
              >
                Layanan
              </a>
            </li>
            <li className="ml-auto pr-14">
              <button
                className={` mx-2 h-10 bg-gray-200 text-gray-600 py-2 px-4 rounded-[25px]`}
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
                <span>Login</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isBar && isMenuOpen && (
        <div className="absolute w-full bg-white mt-2 py-2 px-4 shadow-md rounded-lg">
          <div className="px-4">
            <a href="#" className="block py-2  hover:text-blue-400">
              Beranda
            </a>
            <a
              href="/tentang-kami"
              className="block  py-2  hover:text-blue-400"
            >
              Tentang Kami
            </a>
            <a href="#" className="block py-2  hover:text-blue-400">
              Cabang
            </a>
            <a href="#" className="block py-2  hover:text-blue-400">
              Spesialisai
            </a>{" "}
            <a href="#" className="block py-2  hover:text-blue-400">
              Layanan
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
