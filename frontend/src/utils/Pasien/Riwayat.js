import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import customStyles from "../../assets/dataTableStyle";
import { AppointmentContext } from "../../contexts/AppointmentContex";
import { AuthContext } from "../../contexts/UserAuthentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faAlignLeft,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import customModalStyles from "../../assets/CustomModalStyle";

const Riwayat = () => {
  const { user } = useContext(AuthContext);
  const { fetchAppointmentByuserId } = useContext(AppointmentContext);
  const [data, setData] = useState([]);
  const [paginationCount, setPaginationCount] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },

    {
      name: "Partner",
      selector: (row) => row.partner,
      sortable: true,
    },
    {
      name: "Spesialisasi",
      selector: (row) => row.spesialisasi,
    },
    {
      name: "Tanggal",
      selector: (row) => {
        const formatDate = new Date(row.date).toLocaleDateString("en-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        return formatDate;
      },
      sortable: true,
    },
    {
      name: "Sesi",
      selector: (row) => row.sesi,
      sortable: true,
    },
    {
      name: "Status",
      sortable: true,
      cell: (row) => (
        <div className="flex justify-center items-center h-full">
          <div
            className={`p-2 m-1 w-[100px] rounded-2xl text-[12px] font-bold text-white ${
              row.status === "disetujui"
                ? "bg-green-500  hover:bg-green-600 "
                : row.status === "ditolak"
                ? "bg-red-500  hover:bg-red-600 "
                : "bg-blue-500  hover:bg-blue-600 "
            }cursor-auto`}
          >
            {row.status}
          </div>
          {row.status === "ditolak" && (
            <>
              <span className="absolute h-1/2 inset-y-0 items-center right-11 top-3 flex pl-3  text-gray-400">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="mr-2 text-white cursor-pointer"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                />
              </span>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => {
                  setIsModalOpen(false);
                }}
                style={customModalStyles.riwayat}
                contentLabel="Deskripsi Modal bg-blue"
                className="bg-white p-4 rounded shadow-lg  "
                appElement={document.getElementById("root")}
              >
                <div className="pb-4 flex justify-between">
                  <label
                    htmlFor="Add-Partner"
                    className="text-[30px] text-gray-600 font-bold"
                  >
                    Alasan Penolakan
                  </label>
                  <span
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                    className="text-2xl cursor-pointer"
                  >
                    X
                  </span>
                </div>
                <label className="px-2">Reason</label>

                <textarea
                  className="pl-10 pr-5 py-3 w-full h-1/3 bg-white border border-gray-400 text-gray-800 rounded-md  focus:outline-none "
                  id="reason"
                  name="reason"
                  value={row.reason}
                  readOnly
                />
                <span className="absolute h-1/2 inset-y-0 items-end left-5 flex pl-3 pb-2 text-gray-400">
                  <FontAwesomeIcon icon={faAlignLeft} className="mr-2" />
                </span>
                <div className="flex justify-end mt-10">
                  <div className="w-1/4 pl-1">
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                      }}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:bg-blue-600"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </Modal>
            </>
          )}
        </div>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAppointmentByuserId(user.uid);
      if (data) {
        const dataAppointment = data.map((item, index) => ({
          no: index + 1,
          ...item,
        }));
        setData(dataAppointment);
      }
    };

    fetchData();
  }, [fetchAppointmentByuserId, user]);
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
  return (
    <div className="px-10 relative py-5 h-[450px]  lg:h-[690px]">
      <div className="mb-1">
        <p className="font-bold text-[25px]">Riwayat Janji Temu</p>
        <div className="rounded-lg ">
          <StyleSheetManager
            shouldForwardProp={(prop) => prop !== "sortActive"}
          >
            <DataTable
              key={paginationCount}
              className="shadow-lg  "
              columns={columns}
              data={data}
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
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
