import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/CustomCalendar.css";
import { ToastContainer, toast } from "react-toastify";
import { PartnerContext } from "../../contexts/PartnerContex";
import { DoctorContext } from "../../contexts/DoctorContex";
import { AuthContext } from "../../contexts/UserAuthentication";
import { AppointmentContext } from "../../contexts/AppointmentContex";

const JanjiTemu = () => {
  const [selectedPartner, setSelectedPartner] = useState("null");
  const [selectedSpesialisasi, setSelectedSpesialisasi] = useState("null");
  const [selectedSesi, setSelectedSesi] = useState("null");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ArrayDate, setArrayDate] = useState([]);
  const [sessionTemp, setSessionTemp] = useState([]);
  const [sessionOptions, setSessionOptions] = useState([
    { value: "null", label: "Pilih Sesi" },
  ]);

  const [partnerOptions, setPartnerOptions] = useState([
    { value: "null", label: "Pilih Partner" },
  ]);
  const [doctorOptions, setDoctorOptions] = useState([
    { key: "null", value: "null", label: "Pilih Doctor", date: [] },
  ]);

  const { user } = useContext(AuthContext);
  const { fetchPartner } = useContext(PartnerContext);
  const { fetchDoctor } = useContext(DoctorContext);
  const { addAppointment } = useContext(AppointmentContext);

  const highlightedDays = ArrayDate.map((date) => ({
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }));

  const handlePartnerChange = async (event) => {
    const selectedPartnerValue = event.target.value;
    const partnerLabel = partnerOptions
      .filter((partner) => partner.value === selectedPartnerValue)
      .map((partner) => partner.label);

    setSelectedPartner(partnerLabel);
    const data = await fetchDoctor();

    const filterDoctor = data.filter(
      (item) => item.partnerId === selectedPartnerValue
    );
    const newData = filterDoctor.map((item, index) => ({
      key: index + item.id,
      value: item.id,
      label: item.name,
      date: item.date,
    }));

    setDoctorOptions([{ value: "null", label: "Pilih Doctor" }]);
    setDoctorOptions((prevOptions) => [
      ...prevOptions.filter(
        (option) =>
          !newData.some((newOption) => newOption.value === option.value)
      ),
      ...newData,
    ]);
    setSelectedSpesialisasi("");
    setArrayDate([]);
  };

  const handleSpesialisasiChange = (event) => {
    const selectedDoctorValue = event.target.value;
    const doctorLabels = doctorOptions
      .filter((doctor) => doctor.value === selectedDoctorValue)
      .map((doctor) => doctor.label);

    setSelectedSpesialisasi(doctorLabels);
    const doctorData = doctorOptions.find(
      (item) => item.value === selectedDoctorValue && item.value !== "null"
    );

    if (selectedDoctorValue === "null") {
      setArrayDate([]);
    }
    if (doctorData) {
      const date = doctorData.date
        .filter((dateString) => new Date(dateString.item) > new Date())
        .map((dateString) => {
          return new Date(dateString.item);
        });
      setArrayDate(date);
      setSelectedDate(date[0]);
      setSessionTemp(doctorData.date);
      setSessionOptions([{ value: "null", label: "Pilih Sesi" }]);
    }
  };

  const handleDateChange = (date) => {
    setSessionOptions([{ value: "null", label: "Pilih Sesi" }]);
    const DateSelected = ArrayDate.find(
      (selected) =>
        selected.getDate() === date.getDate() &&
        selected.getMonth() === date.getMonth() &&
        selected.getFullYear() === date.getFullYear()
    );
    setSelectedDate(DateSelected);

    const sesi = sessionTemp
      .filter(
        (dateString) =>
          new Date(dateString.item).getTime() === DateSelected.getTime()
      )
      .map((dateString) => dateString);
    setSessionOptions((prevOptions) => [...prevOptions, ...sesi[0].labels]);
  };

  const handleSesi = (e) => {
    setSelectedSesi(e.target.value);
  };

  const handleJanjiTemu = async () => {
    console.log(selectedPartner.length);
    console.log(selectedSpesialisasi.length);
    if (
      selectedPartner.length > 0 &&
      selectedSpesialisasi.length > 0 &&
      selectedSesi !== "null" &&
      selectedDate > 0
    ) {
      const data = {
        date: selectedDate.toISOString(),
        partner: selectedPartner.join(""),
        sesi: selectedSesi,
        spesialisasi: selectedSpesialisasi.join(""),
        status: "pengajuan",
      };
      try {
        await addAppointment(user.uid, data);
        toast.success("Berhasil menambahkan pengajuan", {
          position: "top-right",
        });
      } catch (error) {
        toast.error("terjadi kesalahan", error, {
          position: "top-right",
        });
      }
    } else {
      toast.error("Inputkan data dengan benar", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    const partnerData = async () => {
      try {
        const data = await fetchPartner();
        const newData = data.map((item, index) => ({
          key: index,
          value: item.id,
          label: item.name,
        }));
        setPartnerOptions((prevOptions) => [
          ...prevOptions.filter(
            (option) =>
              !newData.some((newOption) => newOption.value === option.value)
          ),
          ...newData,
        ]);
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
            className="w-full px-3 py-2  bg-white border-gray-400 text-gray-800  mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            id="partnerDropdown"
            name="partnerDropdown"
            onChange={handlePartnerChange}
          >
            {partnerOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label htmlFor="spesialisasiDropdown">Pilih Spesialisasi:</label>
          <select
            className="w-full px-3 py-2 bg-white border-gray-400 text-gray-800  mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none "
            id="spesialisasiDropdown"
            name="spesialisasiDropdown"
            onChange={handleSpesialisasiChange}
          >
            {doctorOptions.map((option) => (
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
                value={ArrayDate}
                className="bg-white p-4 my-2 border rounded-md shadow-md focus:outline-none text-center "
                locale="id-ID"
                minDate={new Date()}
                tileClassName={({ date }) => {
                  return date.getDate() === selectedDate.getDate() &&
                    date.getMonth() === selectedDate.getMonth() &&
                    date.getFullYear() === selectedDate.getFullYear()
                    ? "react-calendar__tile--selected--now"
                    : highlightedDays.some(
                        ({ day, month, year }) =>
                          date.getDate() === day &&
                          date.getMonth() === month &&
                          date.getFullYear() === year
                      )
                    ? "react-calendar__tile--active"
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
                onChange={handleSesi}
              >
                {sessionOptions.map((option) => (
                  <option key={option.item} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex m-3 items-end w-1/2">
              <button
                className="w-full h-[50px] bg-blue-500 text-white font-bold rounded-lg px-2 py-2 cursor-pointer hover:bg-blue-600"
                onClick={handleJanjiTemu}
              >
                Buat Janji
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 transform -translate-y -translate-x ">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default JanjiTemu;
