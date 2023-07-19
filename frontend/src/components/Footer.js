/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 md:h-62 pr-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="w-16 h-16" />
        </div>

        {/* Menu Kolom 1 */}
        <div className="flex-2 flex-col md:flex-row md:space-y-2 md:ml-8 mt-4 md:mt-0">
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-bold">
              Quick Menu
            </a>
          </div>
          <div className="flex flex-row md:flex-col md:space-y-2   justify-between">
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Tentang Kami
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Investor
              </a>
            </div>
          </div>
        </div>

        {/* Menu Kolom 2 */}
        <div className="flex-2 flex-col md:flex-row md:space-y-2 md:ml-8 mt-4 md:mt-0">
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-bold">
              Corporate
            </a>
          </div>
          <div className="flex flex-row md:flex-col md:space-y-2  justify-between">
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Buat Janji Tamu
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Cari Dokter
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Karir
              </a>
            </div>
          </div>
        </div>

        {/* Hubungi dan Menu Lainnya */}
        <div className="flex-2 flex-col md:flex-row md:space-y-2 md:ml-8 mt-4 md:mt-0">
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-bold">
              Hubungi
            </a>
          </div>
          <div className="flex flex-row md:flex-col md:space-y-2   justify-between">
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Instagram
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Tiktok
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Youtube
              </a>
            </div>
          </div>
          <div className="flex flex-row md:flex-col md:space-y-2   justify-between">
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Linkedin
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Facebook
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Email
              </a>
            </div>
          </div>

          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Podcast
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
