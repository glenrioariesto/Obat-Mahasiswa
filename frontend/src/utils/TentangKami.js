import React from "react";

const TentangKami = () => {
  return (
    <div>
      <section class="relative bg-gray-900 text-white py-16 pt-32">
        <img
          src="https://media.istockphoto.com/id/873418908/id/foto/dokter-di-latar-belakang-rumah-sakit-dengan-ruang-copy.jpg?s=612x612&w=0&k=20&c=OElrJaLiwOHScqSG3L4oAe_BnEbbswMD6vQEEWH0XDU="
          alt="Background"
          class="absolute w-full h-52 object-cover object-top transform scale-x-[-1]"
        />

        <div class="container mx-auto px-4 relative pt-6">
          <h2 class="text-4xl font-bold text-blue-500 mb-4">Pelayanan Utama</h2>
          <p class="text-lg mb-8 text-blue-400">Slogan</p>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-4 flex flex-row-reverse relative">
          <div className="container h-96 w-1/2 items-end ">
            <img
              src="https://media.istockphoto.com/id/1351287337/id/foto/dokter-berseragam-gaun-putih.jpg?s=612x612&w=0&k=20&c=tjG_RY8GDD92rckw5XfibGSMN-XYDFcawZ2RQeOdlGk="
              alt="Background"
              className="w-full h-full object-cover transform scale-x-[-1] rounded-lg"
            />
          </div>
          <div className="absolute top-10 left-20 w-1/2 h-5/6 bg-white shadow-2xl rounded-lg">
            <div className="container mx-auto px-8 py-4 pt-16 ">
              asdasdasdas
            </div>
          </div>
          <div className="absolute top-4 right-1/2 transform -translate-x-1/2  h-12 w-40 bg-red-300 rounded-[30px] ">
            <div className="flex items-center pt-3 justify-center text-white font-bold">
              Tentang Kami
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
