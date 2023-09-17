import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Section = () => {
  const whatsappNumber = "+628123456789"; // Ganti dengan nomor WhatsApp yang sesuai

  const handleClick = () => {
    // Logika untuk menangani klik tombol WhatsApp
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <section className="bg-blue-500 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className=" text-center md:text-left mb-4 md:mb-0">
          <p className="text-xl text-white cursor-default">
            Kini Whatsapp Customer <b>Nama Perusahaan</b> hadir <br />
            untuk menjawab kebutuhan informasi Sahabat
          </p>
        </div>
        <button
          className="mt-4 bg-white hover:bg-white-600 text-blue-500 h-12  font-bold py-2 px-4 rounded-[22px] flex items-center"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
          Hubungi Kami di WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Section;
