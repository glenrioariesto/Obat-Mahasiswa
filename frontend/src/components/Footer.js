import React from "react";
import logo from "../assets/image/logo.png";

const FooterLink = ({ href, text }) => {
  return (
    <div>
      <a href={href} className="text-gray-600 hover:text-blue-800">
        {text}
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 md:h-62 pr-4">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-start">
            <img src={logo} alt="Logo" className="  h-20" />
          </div>
          {/* Menu Kolom 1 */}
          <div className="flex-2 md:space-y-2 px-2 md:ml-8 mt-4 md:mt-0">
            <div>
              <p className="text-gray-600 font-bold cursor-default">
                Quick Menu
              </p>
            </div>
            <div className="sm:grid sm:grid-cols-3 md:grid md:grid-cols-1 lg:grid lg:grid-cols-1">
              <FooterLink href="#" text="Tentang Kami" />
              <FooterLink href="#" text="Investor" />
            </div>
          </div>
          {/* Menu Kolom 2 */}
          <div className="flex-2 md:space-y-2 px-2 md:ml-8 mt-4 md:mt-0">
            <div>
              <p className="text-gray-600 font-bold cursor-default">
                Corporate
              </p>
            </div>
            <div className="sm:grid sm:grid-cols-3 md:grid md:grid-cols-1 lg:grid lg:grid-cols-1">
              <FooterLink href="#" text="Buat Janji Tamu" />
              <FooterLink href="#" text="Cari Dokter" />
              <FooterLink href="#" text="Karir" />
            </div>
          </div>
          {/* Hubungi dan Menu Lainnya */}
          <div className="flex-2 md:space-y-2 px-2 md:ml-8 mt-4 md:mt-0">
            <div>
              <p className="text-gray-600 font-bold cursor-default">Hubungi</p>
            </div>
            <div className="sm:grid sm:grid-cols-3 md:grid md:grid-cols-1 lg:grid lg:grid-cols-1">
              <FooterLink href="#" text="Instagram" />
              <FooterLink href="#" text="Tiktok" />
              <FooterLink href="#" text="Youtube" />
              <FooterLink href="#" text="Linkedin" />
              <FooterLink href="#" text="Facebook" />
              <FooterLink href="#" text="Email" />
              <FooterLink href="#" text="Podcast" />
            </div>
          </div>
          <div></div>
        </div>
        <div className="sm:px-2 md:px-0 lg:px-4">
          <div className="flex sm:flex-col md:flex-row justify-between sm:items-start lg:items-center">
            <p className="my-2 sm:mb-0 text-blue-800">Kebijakan Privasi</p>
            <p>Copyright © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
