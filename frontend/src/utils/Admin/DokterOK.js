import React, { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import CardDokter from "../../components/CardDokterAdmin";
import DetailDokter from "./DetailDokter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ModalAddDokter from "../../components/modal/Dokter/ModalAddDokter";
import ModalEditDokter from "../../components/modal/Dokter/ModalEditDokter";

const DokterOK = () => {
  const items = [
    {
      imgUrl:
        "https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/8954b498-294d-4b8a-8ee5-4aa62f2280a0.png",
      name: "dr. Alexander Leonard Caesar Josediputra Sp.A",
      keahlian: "Keahlian 1",
      lokasi: "Lokasi 1",
      pendidikan: "",
      kondisi_klinis: "",
      prestasi: "",
      seminar: "",
    },
  ];
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDetailDokter, setOpenDetailDokter] = useState(false);
  const [dataProfileDokter, setDataProfileDokter] = useState({});
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleDetailDokter = (items) => {
    setDataProfileDokter(items);
    setOpenDetailDokter(true);
  };
  const handleUpdateDokter = (items) => {
    setDataProfileDokter(items);
    setIsModalOpenEdit(true);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="p-10 relative h-full w-full">
      {openDetailDokter ? (
        <div>
          <div className="absolute top-0 left-0 transform -translate-y -translate-x pt-4 pl-4">
            <button
              className="text-[20px] text-gray-600 font-bold"
              onClick={() => {
                setDataProfileDokter({});
                setOpenDetailDokter(false);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Kembali
            </button>
          </div>
          <DetailDokter data={dataProfileDokter} />
        </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <label className="text-2xl text-gray-600 font-bold">Dokter</label>
            <button
              onClick={() => {
                setIsModalOpenAdd(true);
              }}
              className="bg-green-500 text-white rounded-lg px-2 py-2 cursor-pointer hover:bg-green-600 "
            >
              Add Dokter
            </button>
          </div>
          <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-3">
            {itemsToDisplay.map((item, index) => (
              <CardDokter
                key={index}
                imageSrc={item.imgUrl}
                name={item.name}
                keahlian={item.keahlian}
                lokasi={item.lokasi}
                handleClickProfile={() => handleDetailDokter(item)}
                handleClickUpdate={() => handleUpdateDokter(item)}
                handleClickDelete={() => {}}
              />
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
      <ModalAddDokter
        isOpen={isModalOpenAdd}
        onRequestClose={() => setIsModalOpenAdd(false)}
      />
      <ModalEditDokter
        isOpen={isModalOpenEdit}
        onRequestClose={() => setIsModalOpenEdit(false)}
      />
    </div>
  );
};

export default DokterOK;
