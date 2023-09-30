import React, { useState } from "react";
import Input from "../../components/Input";

const AddPartnerOK = () => {
  const [remainingWords, setRemainingWords] = useState(300);
  const [form, setForm] = useState({
    name: "",
    alamat: "",
    deskripsi: "",
  });
  console.log(form);
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-20 h-full w-full">
      <div className="container w-full h-full ">
        <form onSubmit={handleSubmit}>
          <div className="pb-4">
            <label
              htmlFor="Add-Partner"
              className="text-[30px] text-gray-600 font-bold"
            >
              Add Partner
            </label>
          </div>
          <div className="pb-4">
            <Input
              placeholder="Name Partner Obat Keluarga"
              className="py-2 px-4 "
              type="text"
              id="name"
              name="name"
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
              onChange={handleChange}
            />
          </div>
          <textarea
            className={`pl-10 pr-5 py-3 w-full bg-white border border-gray-400 text-gray-800 rounded-md  focus:outline-none `}
            id="deskripsi"
            name="deskripsi"
            placeholder="deskripsi"
            onChange={handleDeskripsiChange}
            required
          ></textarea>
          <div className="flex justify-end">
            <div className="text-right" id="wordCount">
              {remainingWords > 0
                ? `${remainingWords} kata tersisa`
                : "Batas kata tercapai"}
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
    </div>
  );
};

export default AddPartnerOK;
