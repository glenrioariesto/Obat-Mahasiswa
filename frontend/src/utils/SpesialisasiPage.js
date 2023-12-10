import React, { useContext, useEffect, useState } from "react";
import Card from "../components/CardDokterPage";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../contexts/NavbarContext";
import { DoctorContext } from "../contexts/DoctorContex";

const SpesialisasiPage = () => {
  const { fetchDoctor } = useContext(DoctorContext);
  const { changeItems } = useContext(NavbarContext);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const doctorData = async () => {
      const data = await fetchDoctor();

      setItems(data);
    };

    doctorData();
  }, [fetchDoctor]);
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
          {items.map((item, index) => (
            <Card
              key={index}
              imageSrc={item.imgUrl}
              name={item.name}
              keahlian={item.keahlian}
              lokasi={item.lokasi}
              handleClickProfile={() => {
                navigate(`/profiledokter?id=${item.id}`);
              }}
              handleClickJanji={() => {
                navigate("/dashboardPasien");
                changeItems("JanjiTemu");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpesialisasiPage;
