import React, { useContext } from "react";
import Card from "../components/CardDokterPage";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../contexts/NavbarContext";
const SpesialisasiPage = () => {
  const items = [
    {
      id: "asdadccasd",
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/8954b498-294d-4b8a-8ee5-4aa62f2280a0.png",
      name: "dr. Alexander Leonard Caesar Josediputra Sp.A",
      keahlian: "Keahlian 1",
      lokasi: "Lokasi 1",
    },
    {
      id: "asdaaaadasd",
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/0c84f714-ea0b-4eff-b34d-b71ea4e85c4f.png",
      name: "Dr. Linnie Pranadjaja, Sp.A, M. Kes",
      keahlian: "Keahlian 2",
      lokasi: "Lokasi 2",
    },
    {
      id: "assaddadasd",
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/2db50d3d-38a1-42fe-8e5c-b10118e15725.png",
      name: "Dr. Winarno, Sp.A",
      keahlian: "Keahlian 3",
      lokasi: "Lokasi 3",
    },
    {
      id: "asdasddasd",
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/947ed6dd-2601-4078-8417-cfa045440910.jpg",
      name: "Dr. dr. Prastiya Indra Gunawan Sp.A (K).",
      keahlian: "Keahlian 4",
      lokasi: "Lokasi 4",
    },
    {
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/edb0cd14-b2d1-4a1c-8d8f-90e39cbdd471.png",
      name: "Prof. dr. Mohammad Sjaifullah Noer Sp.A (K)",
      keahlian: "Keahlian 5",
      lokasi: "Lokasi 5",
    },
    {
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/4692cb21-dca4-4494-8b5e-5180258f4af8.png",
      name: "Sri Sulastri Katarnida, Sp A (K)",
      keahlian: "Keahlian 6",
      lokasi: "Lokasi 6",
    },
    {
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/HR80001097.jpg",
      name: "dr. Agustinus Patandiana Sp.A",
      keahlian: "Keahlian 7",
      lokasi: "Lokasi 7",
    },
    {
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/6d125405-d34e-4cff-b9bb-8527ffff24e5.jpg",
      name: "dr. Ahmad Fauzin Sp.A.",
      keahlian: "Keahlian 8",
      lokasi: "Lokasi 8",
    },
    {
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/cc9e1ec5-640e-48ab-8cb8-b13732370da5.jpg",
      name: "dr. Amir Hasan Rahim, Sp A",
      keahlian: "Keahlian 9",
      lokasi: "Lokasi 9",
    },
    {
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/6b31863b-0af4-49fa-9035-be89b7930def.jpg",
      name: "Dr. Irwanto Husada, Sp.A",
      keahlian: "Keahlian 10",
      lokasi: "Lokasi 10",
    },
  ];
  const { changeItems } = useContext(NavbarContext);
  const navigate = useNavigate();

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
