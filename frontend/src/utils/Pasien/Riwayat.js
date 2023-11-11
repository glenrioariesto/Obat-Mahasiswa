import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import customStyles from "../../assets/dataTableStyle";

const Riwayat = () => {
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
