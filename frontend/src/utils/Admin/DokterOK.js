import React, { useState, useEffect, useContext } from "react";
import Pagination from "../../components/Pagination";
import CardDokter from "../../components/CardDokterAdmin";
import DetailDokter from "./DetailDokter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ModalAddDokter from "../../components/modal/Dokter/ModalAddDokter";
import ModalEditDokter from "../../components/modal/Dokter/ModalEditDokter";
import { DoctorContext } from "../../contexts/DoctorContex";

const DokterOK = () => {
  const [items, setItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDetailDokter, setOpenDetailDokter] = useState(false);
  const [dataProfileDokter, setDataProfileDokter] = useState({});
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const { fetchDoctor, deleteDoctor } = useContext(DoctorContext);

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
  const handleDeleteDokter = async (items) => {
    await deleteDoctor(items);
    const data = await fetchDoctor();

    setItems(data);
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

  useEffect(() => {
    const doctorData = async () => {
      const data = await fetchDoctor();

      setItems(data);
    };

    doctorData();
  }, [fetchDoctor]);
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
                handleClickDelete={() => handleDeleteDokter(item.id)}
              />
            ))}
          </div>
          <div className="w-[470px] sm:w-[565px] md:w-[700px] lg:w-[1150px]  absolute bottom-2 sm:bottom-6 lg:bottom-0">
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
        setData={setItems}
      />
      <ModalEditDokter
        isOpen={isModalOpenEdit}
        onRequestClose={() => setIsModalOpenEdit(false)}
        setData={setItems}
        dataEdit={dataProfileDokter}
        setEditData={setDataProfileDokter}
      />
    </div>
  );
};

export default DokterOK;
