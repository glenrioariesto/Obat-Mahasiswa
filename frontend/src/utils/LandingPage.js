import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import CardItem from "../components/card";
import ImageMain from "../components/ImageMain";

const LandingPage = () => {
  return (
    <div>
      <section className="pb-20">
        <ImageMain
          title="Pelayanan Utama Obat Mahasiswa"
          subtitle="Tenang penyakit anda tidak hanya satu"
          imageUrl="https://media.istockphoto.com/id/1189309997/id/foto/konsultasi-medis-online-dokter-yang-bekerja-pada-komputer-laptop-di-kantor-klinik-ruang-salin.jpg?s=612x612&w=0&k=20&c=xDtTcampxwH7klIozzEtIeZrzldGawmUHTJy18qn5BA="
        />
      </section>
      <div className="px-10 py-10 pt-0 sm:pt-40 md:pt-40 lg:pt-40">
        <div className="title flex items-center justify-between">
          <h2 className="text-3xl text-blue-500 font-bold">Judul Sudut Kiri</h2>
          <div className="view-all">
            <a href="/" className="text-gray-500 text-sm hover:text-blue-800">
              Lihat Semua Sudut
            </a>
          </div>
        </div>
        <CardItem />
      </div>
      {/* <div className="fixed top-40 right-1 hidden md:block">
        <div className="px-2 py-2 shadow-inner shadow hover:shadow-lg drop-shadow-lg  text-gray-500 hover:text-white flex items-center md:max-w-auto bg-gradient-to-r from-white to-white hover:from-orange-300 hover:to-red-500 shadow-md rounded-lg cursor-pointer">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="mr-2 text-2xl md:text-center"
            />
            <p>
              Cari Dokter <br /> & Jadwalkan
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
