import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "No",
    selector: "no",
    sortable: true,
  },
  {
    name: "Nama",
    selector: "name",
    sortable: true,
  },
  {
    name: "Usia",
    selector: "age",
    sortable: true,
  },
  {
    name: "Alamat",
    selector: "address",
    sortable: true,
  },
];

const data = [
  {
    no: 1,
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    status: "Aktif", // Properti status ditambahkan di sini
  },
  {
    no: 2,
    name: "Jane Smith",
    age: 25,
    address: "456 Elm St",
    status: "Tidak Aktif", // Properti status ditambahkan di sini
  },
  {
    no: 3,
    name: "Bob Johnson",
    age: 40,
    address: "789 Oak St",
    status: "Aktif", // Properti status ditambahkan di sini
  },
];

const conditionalCellStyles = [
  {
    when: (row) => row.status === "Aktif",
    style: {
      color: "blue-500",
    },
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
    },
  },
  cells: {
    style: {
      fontSize: "14px",
    },
  },
};

const PartnerOK = () => {
  return (
    <div className="p-10">
      <h1 className="mb-4 font-bold text-[20px]">Partner Obat Keluarga</h1>
      <div className="rounded-lg">
        <DataTable
          className="shadow-lg"
          columns={columns}
          data={data}
          conditionalRowStyles={conditionalCellStyles}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default PartnerOK;
