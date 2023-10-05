import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import customStyles from "../../assets/dataTableStyle";
import Input from "../../components/Input";
import { PartnerContext } from "../../contexts/PartnerContex";
import { storage } from "../../firebase-config";
import { ref, deleteObject } from "@firebase/storage";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DescriptionModal = ({ isOpen, onRequestClose, description }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Deskripsi Modal bg-blue"
        className="bg-white p-4 rounded shadow-lg  "
        appElement={document.getElementById("root")}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            width: "500px",
            height: "400px",

            transform: "translate(80%, 25%)",
          },
        }}
      >
        <div>
          <h2>
            <b>Detail Deskripsi</b>
          </h2>
          <p>{description}</p>
        </div>
      </Modal>
    </div>
  );
};

const PartnerOK = () => {
  // , updatePartner
  const { fetchPartner, deletePartner } = useContext(PartnerContext);
  const [paginationCount, setPaginationCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
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
      sortable: true,
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
              className="p-1  m-1 rounded text-[12px] w-full h-7  bg-blue-400"
              onClick={() => {}}
            >
              Edit
            </button>
            <button
              className="p-1 m-1 rounded text-[12px] w-full h-7  bg-red-500"
              onClick={async () => {
                console.log(row.pathstorage);
                const objectRef = ref(storage, `Uploads/${row.pathstorage}`);
                try {
                  await deleteObject(objectRef);
                  console.log("sukses delete img storage");
                  await deletePartner(row.id);

                  const data = await fetchPartner();
                  setData(data);
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
      setData(data);
    };

    partnerData();
  }, [fetchPartner]);

  return (
    <div className="px-10 relative py-5 h-[620px]  sm:h-[600px] md:h-[600px] lg:h-[1010px] xl:h-[690px]">
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="font-bold text-20">Partner Obat Mahasiswa</h1>
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
      </div>
    </div>
  );
};

export default PartnerOK;
