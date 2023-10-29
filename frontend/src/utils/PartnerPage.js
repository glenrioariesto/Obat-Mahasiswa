import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/CardPartner";
import ImageMain from "../components/ImageMain";
import { PartnerContext } from "../contexts/PartnerContex";

const ParPage = () => {
  const { fetchPartner } = useContext(PartnerContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const partnerData = async () => {
      const data = await fetchPartner();
      setData(data);
    };
    partnerData();
  }, [fetchPartner]);
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
          <h2 className="text-3xl text-blue-500 font-bold">
            Partner Obat Mahasiswa
          </h2>
          <div className="view-all">
            <a href="/" className="text-gray-500 text-sm hover:text-blue-800">
              Lihat Semua
            </a>
          </div>
        </div>
        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-end pt-5">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.name}
              description={item.deskripsi}
              imageSrc={item.imgUrl}
              handleClick={() => {
                navigate(`/detailPartner?cardId=${item.id}`);
              }}
            />
          ))}
        </div>
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

export default ParPage;
