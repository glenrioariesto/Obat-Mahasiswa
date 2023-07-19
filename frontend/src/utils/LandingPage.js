import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <div>
      <section className="bg-blue-300 py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-white">
            Section 1
          </h1>
        </div>
      </section>
      <section className="bg-blue-300 py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-white">
            Section 1
          </h1>
        </div>
      </section>
      <section className="bg-blue-300 py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-white">
            Section 1
          </h1>
        </div>
      </section>{" "}
      <div className="fixed top-36 right-1 hidden md:block">
        <div className="px-2 py-2 shadow-inner shadow hover:shadow-lg drop-shadow-lg flex items-center md:max-w-auto bg-gradient-to-r from-white to-white hover:from-orange-300 hover:to-pink-300 shadow-md rounded-lg">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="mr-2 text-gray-500 text-2xl md:text-center"
            />
            <p className="text-gray-800">
              Cari Dokter <br /> & Jadwalkan
            </p>
          </div>
        </div>
      </div>
      <slider />
      {/* 
      <div className="relative">
        <div className="absolute inset-48 flex items-center justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-80 h-24"
              src="https://via.placeholder.com/300"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Some description about the card.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
