import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Input from "../../components/Input";
const columns = [
  {
    name: "No",
    selector: (row) => row.no,
    sortable: true,
  },

  {
    name: "Nama",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Usia",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Alamat",
    selector: (row) => row.address,
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
            onClick={() => {}}
          >
            Delete
          </button>
        </div>
      </div>
    ),
  },
];

const data = [
  {
    no: 1,
    name: "John Doe",
    age: "30",
    address: "123 Main St",
    status: "Aktif",
  },
  {
    no: 2,
    name: "Jane Smith",
    age: "25",
    address: "456 Elm St",
    status: "Tidak Aktif",
  },
  {
    no: 3,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 4,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 5,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 6,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 7,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 8,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 9,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 10,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 11,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 12,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
  {
    no: 13,
    name: "Bob Johnson",
    age: "40",
    address: "789 Oak St",
    status: "Aktif",
  },
];

const customStyles = {
  rows: {
    style: {
      backgroundColor: "rgb(229,231,235)",
    },
  },
  headCells: {
    style: {
      backgroundColor: "rgb(29,78,216)",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  cells: {
    style: {
      fontSize: "14px",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      width: "10%",
      padding: "2px",
      margin: "2px",
    },
  },
  pagination: {
    style: {
      position: "absolute",
      bottom: 0,
      right: "0",
      width: "100%",
      backgroundColor: "white",
      borderTop: "1px solid #ddd",
      padding: 0,
      paddingRight: "50px",
    },
  },
};

const PartnerOK = () => {
  const [paginationCount, setPaginationCount] = useState(10);

  // const totalData = data.length;
  // const totalPages = Math.ceil(totalData / paginationCount);

  // for (let page = 1; page <= totalPages; page++) {
  //   const startIndex = (page - 1) * paginationCount;
  //   const endIndex = Math.min(startIndex + paginationCount, totalData);
  //   const dataOnPage = data.slice(startIndex, endIndex);

  //   console.log(`Halaman ${page}: ${dataOnPage.length} data`);
  // }
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
    <div className="px-10 relative py-5 h-[620px]  sm:h-[600px] md:h-[600px] lg:h-[1010px] xl:h-[690px]">
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="font-bold text-20">Partner Obat Keluarga</h1>
        <div className="w-[200px]">
          <Input type="text" placeholder="Search..." firstIcons={faSearch} />
        </div>
      </div>
      <div className="rounded-lg ">
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "sortActive"}>
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
          />
        </StyleSheetManager>
      </div>
    </div>
  );
};

export default PartnerOK;
