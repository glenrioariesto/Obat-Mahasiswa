import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const JanjiTemu = () => {
  const [selectedPartner, setSelectedPartner] = useState("");
  const [selectedSpesialisasi, setSelectedSpesialisasi] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePartnerChange = (event) => {
    setSelectedPartner(event.target.value);
  };

  const handleSpesialisasiChange = (event) => {
    setSelectedSpesialisasi(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const partnerOptions = [
    { value: "", label: "Pilih Partner" },
    { value: "puskesmas", label: "Puskesmas Sukabirus" },
    { value: "telkom", label: "Telkom Medika" },
  ];

  const spesialisasiOptions = [
    { value: "", label: "Pilih Spesialisasi" },
    {
      value: "alexander",
      label: "dr. Alexander Leonard Caesar Josediputra Sp.A",
    },
    { value: "linnie", label: "Dr. Linnie Pranadjaja, Sp.A, M. Kes" },
  ];

  return (
    <div className="px-10  py-5 h-[620px] sm:h-[600px] md:h-[600px] lg:h-[1040px] xl:h-[890px]">
      <div className="mb-1">
        <p className="font-bold text-[25px]">Buat Janji Temu</p>
        <div className="flex flex-col justify-center p-2 mt-5">
          <label htmlFor="partnerDropdown">Pilih Partner:</label>
          <select
            className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            id="partnerDropdown"
            name="partnerDropdown"
            value={selectedPartner}
            onChange={handlePartnerChange}
          >
            {partnerOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label htmlFor="spesialisasiDropdown">Pilih Spesialisasi:</label>
          <select
            className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none "
            id="spesialisasiDropdown"
            name="spesialisasiDropdown"
            value={selectedSpesialisasi}
            onChange={handleSpesialisasiChange}
          >
            {spesialisasiOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="mt-4">
            <label htmlFor="datePicker">Pilih Tanggal:</label>
            <Calendar
              id="datePicker"
              onChange={handleDateChange}
              value={selectedDate}
              className="bg-white p-4 my-2 border rounded-md shadow-md focus:outline-none text-center "
              locale="id-ID"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="w-1/3 mt-5 bg-blue-500 text-white font-bold rounded-lg px-2 py-2 cursor-pointer hover:bg-blue-600 mr-1"
              onClick={() => {}}
            >
              Buat Janji
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JanjiTemu;
