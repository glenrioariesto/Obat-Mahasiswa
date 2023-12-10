import React, { useState, useContext, useEffect } from "react";
import { storage } from "../../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { v4 } from "uuid";
import { DoctorContext } from "../../../contexts/DoctorContex";
import { PartnerContext } from "../../../contexts/PartnerContex";

import { ToastContainer, toast } from "react-toastify";
import Calendar from "react-calendar";

import Input from "../../Input";
import Modal from "react-modal";
import customModalStyles from "../../../assets/CustomModalStyle";
import {
  faUser,
  faMapMarker,
  faStethoscope,
  faGraduationCap,
  faHeart,
  faTrophy,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const ModalAddDokter = ({ isOpen, onRequestClose, setData }) => {
  const { fetchPartner } = useContext(PartnerContext);
  const { addDoctor, fetchDoctor } = useContext(DoctorContext);
  const [selectedDate, setSelectedDate] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const [partnerOptions, setPartnerOptions] = useState([
    { value: "null", label: "Pilih Partner" },
  ]);
  const [form, setForm] = useState({
    name: "",
    keahlian: "",
    lokasi: "",
    file: null,
    partner: "",
    pendidikan: "",
    kondisi_klinis: "",
    prestasi: "",
    seminar: "",
  });

  const highlightedDays = selectedDate.map((date) => ({
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }));
  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setForm((prevForm) => ({
        ...prevForm,
        file,
      }));
      e.target.value = null;
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleDateChange = (date) => {
    const index = selectedDate.findIndex(
      (selected) =>
        selected.getDate() === date.getDate() &&
        selected.getMonth() === date.getMonth() &&
        selected.getFullYear() === date.getFullYear()
    );

    if (index !== -1) {
      const updatedDates = [...selectedDate];
      updatedDates.splice(index, 1);
      setSelectedDate(updatedDates);
    } else {
      setSelectedDate([...selectedDate, date]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      file,
      name,
      keahlian,
      lokasi,
      partner,
      pendidikan,
      kondisi_klinis,
      prestasi,
      seminar,
    } = form;

    try {
      let imgUrl = "";
      if (file) {
        const path = v4();
        const imageRef = ref(storage, `Dokter/profile/${path}`);
        await uploadBytes(imageRef, file);
        imgUrl = await getDownloadURL(imageRef);

        await addDoctor(
          partner,
          name,
          keahlian,
          lokasi,
          pendidikan,
          kondisi_klinis,
          prestasi,
          seminar,
          imgUrl,
          path,
          selectedDate.map((item) => ({
            item: item.toISOString(),
            labels: [
              { value: "pagi", label: "Pagi (08:00 - 12:00)" },
              { value: "sore", label: "Sore (13:00 - 17:00)" },
              { value: "malam", label: "Malam (18:00 - 21:00)" },
            ],
          }))
        );
        setForm({
          name: "",
          keahlian: "",
          lokasi: "",
          file: null,
          partner: "",
          pendidikan: "",
          kondisi_klinis: "",
          prestasi: "",
          seminar: "",
        });
        setSelectedDate([]);
        toast.success("Berhasil menambahkan Doctor", {
          position: "top-right",
        });
        const dataDoctor = await fetchDoctor();

        setData(dataDoctor);
      } else {
        toast.error("Inputkan data dengan benar", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const partnerData = async () => {
      try {
        const data = await fetchPartner();
        const newData = data.map((item) => ({
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Deskripsi Modal bg-blue"
      className="bg-white p-4 rounded shadow-lg  "
      style={
        currentStep === 3
          ? customModalStyles.AddDokter2
          : customModalStyles.AddDokter
      }
      appElement={document.getElementById("root")}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="pb-10 flex justify-between">
            <label
              htmlFor="Add-Doctor"
              className="text-[30px] text-gray-600 font-bold"
            >
              Add Dokter
            </label>
            <span onClick={onRequestClose} className="text-2xl cursor-pointer">
              X
            </span>
          </div>
          {currentStep === 1 && (
            <>
              <div className="pb-2">
                <label htmlFor="partner">Pilih Partner:</label>
                <select
                  className="w-full px-3 py-2  bg-white border-gray-400 text-gray-800  mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  id="partner"
                  name="partner"
                  value={form.partner}
                  onChange={handleChange}
                >
                  {partnerOptions.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="pb-2">
                <label htmlFor="namedoctor">Nama Dokter</label>
                <Input
                  firstIcons={faUser}
                  classnameFirstIcons="text-blue-500"
                  placeholder="Name"
                  className="py-2 px-4 "
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="pb-2">
                <label htmlFor="keahlian">Keahlian</label>
                <Input
                  firstIcons={faStethoscope}
                  classnameFirstIcons="text-blue-500"
                  placeholder="Keahlian"
                  className="py-2 px-4 "
                  type="text"
                  id="keahlian"
                  name="keahlian"
                  value={form.keahlian}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="pb-2">
                <label htmlFor="lokasi">Lokasi</label>
                <Input
                  firstIcons={faMapMarker}
                  classnameFirstIcons="text-blue-500"
                  placeholder="Lokasi"
                  className="py-2 px-4 "
                  type="text"
                  id="lokasi"
                  name="lokasi"
                  value={form.lokasi}
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className="pb-2">
                <label htmlFor="pendidikan">Riwayat Pendidikan</label>
                <Input
                  firstIcons={faGraduationCap}
                  classnameFirstIcons="text-blue-500"
                  placeholder="Pendidikan"
                  className="py-2 px-4 "
                  type="text"
                  id="pendidikan"
                  name="pendidikan"
                  value={form.pendidikan}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="pb-2">
                <label htmlFor="kondisi_klinis">
                  Kondisi Klinis yang Ditangani
                </label>
                <Input
                  firstIcons={faHeart}
                  classnameFirstIcons="text-red-500"
                  placeholder="Kondisi Klinis"
                  className="py-2 px-4 "
                  type="text"
                  id="kondisi_klinis"
                  name="kondisi_klinis"
                  value={form.kondisi_klinis}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="pb-2">
                <label htmlFor="prestasi">Prestasi & Penghargaan</label>
                <Input
                  firstIcons={faTrophy}
                  classnameFirstIcons="text-yellow-500"
                  placeholder="Prestasi & Penghargaan"
                  className="py-2 px-4 "
                  type="text"
                  id="prestasi"
                  name="prestasi"
                  value={form.prestasi}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="pb-2">
                <label htmlFor="seminar">Seminar/Course</label>
                <Input
                  firstIcons={faBook}
                  classnameFirstIcons="text-green-500"
                  placeholder="Seminar / Course"
                  className="py-2 px-4 "
                  type="text"
                  id="seminar"
                  name="seminar"
                  value={form.seminar}
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="flex ">
                <div className="w-1/2">
                  <div className="p-1  ">
                    <div className="m-2 font-bold">Foto Profile</div>
                    <label className="w-52 h-22 flex flex-row items-center border border-gray-400 px-4 py-2 bg-white text-gray-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-600 ">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mx-2 ">Select a file</span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </label>
                    <div className="mt-2 mx-2">
                      {form.file && form.file.name
                        ? form.file.name
                        : "No file chosen"}
                    </div>
                  </div>

                  <div>
                    <p className="w-[150px] mx-3" type="text">
                      Pilih Tanggal :
                    </p>
                    {selectedDate.length > 0 && (
                      <div className="mx-3 text-justify">
                        {selectedDate
                          .sort((a, b) => a - b) // Urutkan tanggal
                          .map((date) => date.toLocaleDateString())
                          .join(", ")}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end w-1/2">
                  <Calendar
                    id="datePicker"
                    onChange={handleDateChange}
                    className="mx-2 bg-white p-4 my-2 border rounded-md shadow-md focus:outline-none text-center "
                    locale="id-ID"
                    minDate={new Date()}
                    tileClassName={({ date }) => {
                      return highlightedDays.some(
                        ({ day, month, year }) =>
                          date.getDate() === day &&
                          date.getMonth() === month &&
                          date.getFullYear() === year
                      )
                        ? " react-calendar__tile--active"
                        : "react-calendar__tile--weekend ";
                    }}
                  />
                </div>
              </div>
            </>
          )}
          <div className="mx-2">
            <div
              className={`flex ${
                currentStep > 1 ? "justify-between" : "justify-end"
              }`}
            >
              {currentStep > 1 && (
                <div className="w-1/4 pr-1">
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded-md focus:outline-none focus:bg-gray-600"
                  >
                    Previous
                  </button>
                </div>
              )}
              {currentStep < 3 && (
                <div className="w-1/4 pl-1">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:bg-blue-600"
                  >
                    Next
                  </button>
                </div>
              )}
              {currentStep === 3 && (
                <div className="w-1/4 pl-1">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
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
    </Modal>
  );
};

export default ModalAddDokter;
