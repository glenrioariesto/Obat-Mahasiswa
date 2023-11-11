import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import customStyles from "../../assets/dataTableStyle";

const DaftarJanjiTemu = () => {
  const [data, setData] = useState([
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
    {
      no: 1,
      partner: "ada",
      spesialisasi: "asda",
      tanggal: "asdasd",
      sesi: "siang",
      status: "done",
    },
  ]);
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
      selector: (row) => row.tanggal,
      sortable: true,
    },
    {
      name: "Sesi",
      selector: (row) => row.sesi,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",

      cell: (row) => (
        <div className="justify-center items-center  w-full ">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row ">
            <button
              className="p-1  m-1 rounded text-[12px] w-full h-7 font-bold text-white bg-blue-500 hover:bg-blue-600 "
              onClick={() => {}}
            >
              Edit
            </button>
          </div>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("your-api-endpoint");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchData();
  }, []);
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
        <p className="font-bold text-[25px]">DaftarJanjiTemu Janji Temu</p>
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

export default DaftarJanjiTemu;
