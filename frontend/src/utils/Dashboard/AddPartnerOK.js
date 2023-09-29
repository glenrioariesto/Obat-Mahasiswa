import React from "react";
import Input from "../../components/Input";

const AddPartnerOK = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col relative justify-center items-center">
        <div className="container w-full">
          <form>
            <div className=" pb-4">
              <label
                htmlFor="Add-Partner"
                className="text-[30px] text-gray-600 font-bold"
              >
                Add Partner
              </label>
            </div>
            <Input
              placeholder="Nama Partner Obat Keluarga"
              className="py-2 px-4 "
              type="text"
              id="nama"
              name="nama"
            />
            <br />
            <Input
              placeholder="Alamat"
              className="py-2 px-4 "
              type="text"
              id="alamat"
              name="alamat"
            />
            <br />
            <Input
              placeholder="Deskripsi"
              className="py-2 px-4 "
              type="textarea"
              id="deskripsi"
              name="deskripsi"
            />
            <div className=" pt-4">
              <textarea
                className="w-full shadow-lg pl-10 py-2"
                name="description"
              ></textarea>
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
    </div>
  );
};

export default AddPartnerOK;
