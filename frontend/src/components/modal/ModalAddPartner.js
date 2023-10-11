import React, { useState, useContext } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { v4 } from "uuid";
import { PartnerContext } from "../../contexts/PartnerContex";
import { ToastContainer, toast } from "react-toastify";
import Input from "../../components/Input";
import Modal from "react-modal";
import customModalStyles from "../../assets/CustomModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faMapMarker,
  faAlignLeft,
} from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const ModalAddPartner = ({ isOpen, onRequestClose, setData }) => {
  const { addPartner, fetchPartner } = useContext(PartnerContext);
  const [remainingWords, setRemainingWords] = useState(300);
  const [form, setForm] = useState({
    name: "",
    alamat: "",
    deskripsi: "",
    file: null,
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleDeskripsiChange = (event) => {
    const inputValue = event.target.value;
    const words = inputValue.split(/\s+/).filter(Boolean);
    const remaining = 300 - words.length;

    if (remaining >= 0) {
      setForm({ ...form, deskripsi: inputValue });
      setRemainingWords(remaining);
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];

    setForm({
      ...form,
      file,
    });
    e.target.value = null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, alamat, deskripsi, file } = form;

    try {
      let imgUrl = "";
      if (file) {
        const path = v4();
        const imageRef = ref(storage, `Uploads/${path}`);
        await uploadBytes(imageRef, file);
        imgUrl = await getDownloadURL(imageRef);

        await addPartner(name, alamat, deskripsi, imgUrl, path);

        setForm({
          name: "",
          alamat: "",
          deskripsi: "",
          file: null,
        });
        toast.success("Berhasil menambahkan partner", {
          position: "top-right",
        });
        setRemainingWords(300);
        const data = await fetchPartner();
        const dataPartner = data.map((item, index) => ({
          no: index + 1,
          ...item,
        }));
        setData(dataPartner);
      } else {
        toast.error("Inputkan data dengan benar", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Deskripsi Modal bg-blue"
      className="bg-white p-4 rounded shadow-lg  "
      style={customModalStyles.AddPartner}
      appElement={document.getElementById("root")}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="pb-10">
            <label
              htmlFor="Add-Partner"
              className="text-[30px] text-gray-600 font-bold"
            >
              Add Partner
            </label>
          </div>
          <div className="pb-4">
            <Input
              firstIcons={faHospital}
              placeholder="Name Partner Obat Keluarga"
              className="py-2 px-4 "
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="pb-4">
            <Input
              firstIcons={faMapMarker}
              placeholder="Alamat"
              className="py-2 px-4 "
              type="text"
              id="alamat"
              name="alamat"
              value={form.alamat}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="pl-10 pr-5 py-3 w-full bg-white border border-gray-400 text-gray-800 rounded-md  focus:outline-none "
            id="deskripsi"
            name="deskripsi"
            value={form.deskripsi}
            placeholder="Deskripsi"
            onChange={handleDeskripsiChange}
            required
          />
          <span className="absolute inset-y-0 left-5 flex items-center pl-3 text-gray-400">
            <FontAwesomeIcon icon={faAlignLeft} className="mr-2" />
          </span>
          <div className="flex justify-end">
            <div className="text-right" id="wordCount">
              {remainingWords > 0
                ? `${remainingWords} kata tersisa`
                : "Batas kata tercapai"}
            </div>
          </div>
          <div className="p-1  ">
            <div className="m-2 font-bold">Logo Partner</div>
            <div className="flex">
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
                  onChange={(e) => {
                    handleUpload(e);
                  }}
                />
              </label>
              <div className="mt-2 mx-4">
                {form.file && form.file.name
                  ? form.file.name
                  : "No file chosen"}
              </div>
            </div>
          </div>

          <div className="pt-3 ">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2  rounded-md focus:outline-none focus:bg-blue-600"
            >
              Save
            </button>
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

export default ModalAddPartner;
