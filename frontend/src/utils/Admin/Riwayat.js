import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import customStyles from "../../assets/dataTableStyle";
import { AppointmentContext } from "../../contexts/AppointmentContex";

const Riwayat = () => {
  const { fetchAppointment, updateAppointment } =
    useContext(AppointmentContext);
  const [data, setData] = useState([]);
  const [paginationCount, setPaginationCount] = useState(10);
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
        <div className="flex justify-between items-center h-full">
          <div
            className={`p-2 m-1 w-[100px] rounded-2xl text-[12px] font-bold text-white ${
              row.status === "disetujui"
                ? "bg-green-500"
                : row.status === "ditolak"
                ? "bg-red-500"
                : "bg-blue-500"
            } hover:bg-blue-600 cursor-auto`}
          >
            {row.status}
          </div>
        </div>
      ),
    },
    {
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div className="flex justify-between items-center h-full">
          <button
            className="p-2 m-1 rounded-2xl text-[12px] font-bold text-white bg-green-500 hover:bg-green-600 cursor-pointer"
            onClick={async () => {
              await updateAppointment(row.id, { status: "disetujui" });
              const data = await fetchAppointment();
              const dataAppointment = data.map((item, index) => ({
                no: index + 1,
                ...item,
              }));
              setData(dataAppointment);
            }}
          >
            setujui
          </button>
          <button
            className="p-2 m-1 rounded-2xl text-[12px] font-bold text-white bg-red-500 hover:bg-red-600 cursor-pointer"
            onClick={async () => {
              await updateAppointment(row.id, { status: "ditolak" });
              const data = await fetchAppointment();
              const dataAppointment = data.map((item, index) => ({
                no: index + 1,
                ...item,
              }));
              setData(dataAppointment);
            }}
          >
            tolak{" "}
          </button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAppointment();
      const dataAppointment = data.map((item, index) => ({
        no: index + 1,
        ...item,
      }));
      setData(dataAppointment);
    };

    fetchData();
  }, [fetchAppointment]);
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
