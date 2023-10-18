import React from "react";
import Card from "../components/CardDokterPage";

const SpesialisasiPage = () => {
  return (
    <div className="pt-40 p-5">
      <div className="px-10 py-10">
        <div className="title flex items-center justify-between">
          <h2 className="text-3xl text-blue-500 font-bold">
            Tim Dokter Spesialisasi
          </h2>
          <div className="view-all">
            <a href="/" className="text-gray-500 text-sm hover:text-blue-800">
              Lihat Semua
            </a>
          </div>
        </div>
        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-end pt-5">
          <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
          <Card /> <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default SpesialisasiPage;
