import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import customStyles from "../../assets/dataTableStyle";
import Input from "../../components/Input";
import { PartnerContext } from "../../contexts/PartnerContex";
import { storage } from "../../firebase-config";
import { ref, deleteObject } from "@firebase/storage";
import ModalEditPartner from "../../components/modal/ModalEditPartner";
import ModalAddPartner from "../../components/modal/ModalAddPartner";
import DescriptionModal from "../../components/modal/ModalDescriptionPartner";

const PartnerOK = () => {
  const { fetchPartner, deletePartner } = useContext(PartnerContext);
  const [paginationCount, setPaginationCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [dataEdit, setDataEdit] = useState(null);

  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },

    {
      name: "Nama Puskesmas",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Deskripsi",
      selector: (row) => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedDescription(row.deskripsi);
            setIsModalOpen(true);
          }}
        >
          {row.deskripsi}
        </span>
      ),
    },
    {
      name: "Alamat",
      selector: (row) => row.alamat,
      sortable: true,
    },
    {
      name: "Action",

      cell: (row) => (
        <div className="justify-center items-center  w-full ">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row ">
            <button
              className="p-1  m-1 rounded text-[12px] w-full h-7 font-bold text-white bg-blue-500 hover:bg-blue-600 "
              onClick={() => {
                setIsModalOpenEdit(true);
                setDataEdit(row);
              }}
            >
              Edit
            </button>
            <button
              className="p-1 m-1 rounded text-[12px] w-full h-7  bg-red-500 font-bold text-white hover:bg-red-600"
              onClick={async () => {
                const objectRef = ref(storage, `Uploads/${row.pathstorage}`);
                try {
                  await deleteObject(objectRef);
                  console.log("sukses delete img storage");
                  await deletePartner(row.id);

                  const data = await fetchPartner();
                  const dataPartner = data.map((item, index) => ({
                    no: index + 1,
                    ...item,
                  }));
                  setData(dataPartner);
                } catch (error) {
                  console.error("Gagal menghapus data", error);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setPaginationCount(5);
      } else {
        setPaginationCount(10);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.alamat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  useEffect(() => {
    const partnerData = async () => {
      const data = await fetchPartner();
      const dataPartner = data.map((item, index) => ({
        no: index + 1,
        ...item,
      }));
      setData(dataPartner);
    };

    partnerData();
  }, [fetchPartner]);

  return (
    <div className="px-10 relative py-5 h-[620px]  sm:h-[600px] md:h-[600px] lg:h-[1040px] xl:h-[690px]">
      <div className=" mb-1">
        <p className="font-bold text-[25px]">Partner Obat Mahasiswa</p>
        <div className=" flex justify-end ">
          <div className="flex flex-row items-center w-[310px] justify-between">
            <button
              onClick={() => setIsModalOpenAdd(true)}
              className="bg-green-500 p-1 rounded-md font-bold text-white hover:bg-green-600"
            >
              Add Partner
            </button>
            <div className="w-[200px]">
              <Input
                type="text"
                placeholder="Search..."
                firstIcons={faSearch}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg ">
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "sortActive"}>
          <DataTable
            key={paginationCount}
            className="shadow-lg  "
            columns={columns}
            data={filteredData}
            customStyles={customStyles}
            highlightOnHover
            pagination
            paginationPerPage={paginationCount}
            paginationComponentOptions={{
              rangeSeparatorText: "dari",
              noRowsPerPage: true,
              selectAllRowsItem: false,
            }}
            noDataComponent={
              <div className="p-10 font-bold">
                Tidak ada data yang tersedia.
              </div>
            }
          />
        </StyleSheetManager>
        <DescriptionModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          description={selectedDescription}
        />

        {dataEdit && (
          <ModalEditPartner
            isOpen={isModalOpenEdit}
            onRequestClose={() => setIsModalOpenEdit(false)}
            dataEdit={{
              id: dataEdit.id,
              imgUrl: dataEdit.imgUrl,
              pathstorage: dataEdit.pathstorage,
            }}
            setData={setData}
          />
        )}
        <ModalAddPartner
          isOpen={isModalOpenAdd}
          onRequestClose={() => setIsModalOpenAdd(false)}
          setData={setData}
        ></ModalAddPartner>
      </div>
    </div>
  );
};

export default PartnerOK;
