import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import CardItem from "../components/card";
import ImageMain from "../components/ImageMain";

const LandingPage = () => {
  return (
    <div>
      <section className="pb-20">
        <ImageMain
          title=" Pelayanan Utama"
          subtitle="Slogan"
          imageUrl="https://media.istockphoto.com/id/873418908/id/foto/dokter-di-latar-belakang-rumah-sakit-dengan-ruang-copy.jpg?s=612x612&w=0&k=20&c=OElrJaLiwOHScqSG3L4oAe_BnEbbswMD6vQEEWH0XDU="
        />
      </section>
      <div className="px-10 py-10">
        <div className="title flex items-center justify-between">
          <h2 className="text-3xl font-bold">Judul Sudut Kiri</h2>
          <div className="view-all">
            <a href="/" className="text-gray-500 text-sm hover:text-blue-800">
              Lihat Semua Sudut
            </a>
          </div>
        </div>
        <CardItem />
      </div>
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
    </div>
  );
};

export default LandingPage;
