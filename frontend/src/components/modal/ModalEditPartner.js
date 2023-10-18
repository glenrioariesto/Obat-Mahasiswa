import React, { useContext, useState } from "react";
import Modal from "react-modal";
import Input from "../Input";
import customModalStyles from "../../assets/CustomModalStyle";
import { PartnerContext } from "../../contexts/PartnerContex";
import { ToastContainer, toast } from "react-toastify";

Modal.setAppElement("#root");

const ModalEditPartner = ({ isOpen, onRequestClose, dataEdit, setData }) => {
  const { UpdatePartner, fetchPartner } = useContext(PartnerContext);
  const [remainingWords, setRemainingWords] = useState(300);
  const [form, setForm] = useState({
    name: "",
    alamat: "",
    deskripsi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleRequestClose = () => {
    setForm({
      name: "",
      alamat: "",
      deskripsi: "",
    });
    onRequestClose();
    setRemainingWords(300);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, alamat, deskripsi } = form;
    const { id, imgUrl, pathstorage } = dataEdit;
    const updateName = name.trim() ? name : dataEdit.name;
    const updateAlamat = alamat.trim() ? alamat : dataEdit.alamat;
    const updateDeskripsi = deskripsi.trim() ? deskripsi : dataEdit.deskripsi;

    try {
      await UpdatePartner(
        id,
        updateName,
        updateAlamat,
        updateDeskripsi,
        imgUrl,
        pathstorage
      );
      setForm({
        name: "",
        alamat: "",
        deskripsi: "",
      });
      toast.success("Berhasil mengupdate data partner", {
        position: "top-right",
      });
      setRemainingWords(300);

      const data = await fetchPartner();
      const dataPartner = data.map((item, index) => ({
        no: index + 1,
        ...item,
      }));
      setData(dataPartner);
    } catch (error) {
      toast.error("terjadi kesalahan", error, {
        position: "top-right",
      });
      console.error("Error:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      contentLabel="Deskripsi Modal bg-blue"
      className="bg-white p-4 rounded shadow-lg  "
      style={customModalStyles.EditPartner}
      appElement={document.getElementById("root")}
    >
      <div>
        <form onSubmit={handleSubmit}>
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
          <div className="pb-6 pt-6">
            <label
              htmlFor="Add-Partner"
              className="text-[30px] text-gray-600 font-bold"
            >
              Update Partner
            </label>
          </div>
          <div className="pb-4">
            <Input
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
            className={`pl-10 pr-5 py-3 w-full bg-white border border-gray-400 text-gray-800 rounded-md  focus:outline-none `}
            placeholder="deskripsi"
            id="deskripsi"
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleDeskripsiChange}
          ></textarea>
          <div className="flex justify-end">
            <div className="text-right" id="wordCount">
              {remainingWords > 0
                ? `${remainingWords} kata tersisa`
                : "Batas kata tercapai"}
            </div>
          </div>
          <div className="pt-3 ">
            <div className="flex justify-end">
              <div className="w-1/4 pr-1">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2  rounded-md focus:outline-none focus:bg-blue-600"
                >
                  Save
                </button>
              </div>
              <div className="w-1/4 pl-1">
                <button
                  type="button"
                  onClick={handleRequestClose}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2  rounded-md focus:outline-none focus:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalEditPartner;
