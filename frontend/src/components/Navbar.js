import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize(); // Panggil fungsi handleResize saat komponen pertama kali dirender

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-full flex items-center pb-2">
          <img src="logo.png" alt="Logo" className="h-8" />
          <div className={`flex-1 px-2 ${isMenuOpen ? "hidden" : ""}`}>
            <input
              type="text"
              placeholder="Cari yang anda butuhkan"
              className="w-full bg-gray-200 border border-gray-400 text-gray-800 py-2 px-4 rounded-md focus:outline-none"
            />
          </div>
          <button
            className={`${
              isMenuOpen ? "hidden" : "w-24"
            } mx-2 h-10 bg-blue-500 text-white py-2 px-4 rounded-[25px]`}
          >
            Cari
          </button>
          <div
            className={`${
              isMenuOpen ? "ml-auto" : "w-36"
            } h-10 bg-red-500 text-white py-2 px-4 rounded-[25px]`}
          >
            {isMenuOpen ? "IGD" : "Gawat Darurat"}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 text-black">
        <div className="container mx-auto flex justify-center">
          <a href="/" className="mr-4">
            Beranda
          </a>
          <a href="/" className="mr-4">
            Tentang Kami
          </a>
          <a href="/" className="mr-4">
            Layanan
          </a>
          <a href="/" className="mr-4">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
