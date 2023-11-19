import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/CustomCalendar.css";
import { PartnerContext } from "../../contexts/PartnerContex";

const JanjiTemu = () => {
  const [selectedPartner, setSelectedPartner] = useState("null");
  const [selectedSpesialisasi, setSelectedSpesialisasi] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [partnerOptions, setPartnerOptions] = useState([
    { value: "null", label: "Pilih Partner" },
  ]);
  const { fetchPartner } = useContext(PartnerContext);

  const handlePartnerChange = (event) => {
    const selectedPartnerValue = event.target.value;
    setSelectedPartner(selectedPartnerValue);

    // Reset selected spesialisasi when partner changes
    setSelectedSpesialisasi("");
  };

  const handleSpesialisasiChange = (event) => {
    setSelectedSpesialisasi(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleJanjiTemu = () => {
    selectedDate();
  };

  // Define spesialisasi options based on the selected partner
  const getSpesialisasiOptions = () => {
    // Replace this with your actual data
    const spesialisasiData = {
      puskesmas: [
        {
          value: "alexander",
          label: "dr. Alexander Leonard Caesar Josediputra Sp.A",
        },
        {
          value: "linnie",
          label: "Dr. Linnie Pranadjaja, Sp.A, M. Kes",
        },
      ],
      telkom: [
        {
          value: "example1",
          label: "Example Spesialisasi 1",
        },
        {
          value: "example2",
          label: "Example Spesialisasi 2",
        },
      ],
      null: [
        {
          value: "",
          label: "Pilih Spesialisasi",
        },
      ],
    };

    return selectedPartner ? spesialisasiData[selectedPartner] : [];
  };

  const spesialisasiOptions = getSpesialisasiOptions();

  const sessionOptions = [
    { value: "morning", label: "Pagi (08:00 - 12:00)" },
    { value: "afternoon", label: "Sore (13:00 - 17:00)" },
    { value: "evening", label: "Malam (18:00 - 21:00)" },
  ];
  const highlightedDays = [
    { day: 1, month: 10, year: 2023 },
    { day: 3, month: 10, year: 2023 },
    { day: 6, month: 10, year: 2023 },
    { day: 8, month: 10, year: 2023 },
    { day: 10, month: 10, year: 2023 },
    { day: 13, month: 10, year: 2023 },
    { day: 15, month: 10, year: 2023 },
    { day: 17, month: 10, year: 2023 },
    { day: 20, month: 10, year: 2023 },
    { day: 22, month: 10, year: 2023 },
    { day: 24, month: 10, year: 2023 },
    { day: 27, month: 10, year: 2023 },
    { day: 29, month: 10, year: 2023 },
  ];

  useEffect(() => {
    const partnerData = async () => {
      try {
        const data = await fetchPartner();
        const newData = data.map((item, index) => ({
          value: item.id,
          label: item.name,
        }));
        setPartnerOptions((prevOptions) => [...prevOptions, newData]);
      } catch (error) {
        console.error("Error fetching partner data:", error);
      }
    };

    partnerData();
  }, [fetchPartner]);
  return (
    <div className="px-10 py-4">
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
              <option value={option.value}>{option.label}</option>
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
          <div className="mt-4 lg:flex  ">
            <div>
              <label htmlFor="datePicker">Pilih Tanggal:</label>
              <Calendar
                id="datePicker"
                onChange={handleDateChange}
                value={selectedDate}
                className="bg-white p-4 my-2 border rounded-md shadow-md focus:outline-none text-center "
                locale="id-ID"
                minDate={new Date()}
                tileClassName={({ date }) => {
                  return highlightedDays.some(
                    ({ day, month }) =>
                      date.getDate() === day && date.getMonth() === month
                  )
                    ? ""
                    : "react-calendar__tile--weekend";
                }}
                tileDisabled={({ date }) =>
                  !highlightedDays.some(
                    ({ day, month }) =>
                      date.getDate() === day && date.getMonth() === month
                  )
                }
              />
            </div>
            <div className="mt-10 w-1/2 mx-3">
              <label htmlFor="sessionDropdown">Pilih Sesi Waktu:</label>
              <select
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                id="sessionDropdown"
                name="sessionDropdown"
              >
                {sessionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex m-3 items-end w-1/2">
              <button
                className="w-full h-[50px] bg-blue-500 text-white font-bold rounded-lg px-2 py-2 cursor-pointer hover:bg-blue-600"
                onClick={() => handleJanjiTemu}
              >
                Buat Janji
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JanjiTemu;
