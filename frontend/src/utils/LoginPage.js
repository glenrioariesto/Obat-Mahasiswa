import { useState } from "react";
import ImageMain from "../components/ImageMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <section className="pb-10">
        <ImageMain
          title="Login"
          subtitle=""
          imageUrl="https://media.istockphoto.com/id/873418908/id/foto/dokter-di-latar-belakang-rumah-sakit-dengan-ruang-copy.jpg?s=612x612&w=0&k=20&c=OElrJaLiwOHScqSG3L4oAe_BnEbbswMD6vQEEWH0XDU="
        />
      </section>
      <div className="container bg-white shadow-2xl mx-auto mb-10 flex flex-row relative  rounded-2xl justify-between">
        <div className="container flex justify-center items-center">
          <form action="">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="text-lg text-gray-600 font-bold"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Masukkan username"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="text-lg text-gray-600 font-bold"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Masukkan password"
                required
              />
              <span
                className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye} // Ganti ikon mata tergantung apakah password terlihat atau tidak
                  className="text-gray-400 hover:text-blue-500"
                />
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
            <p className="text-center">
              Belum punya akun?{" "}
              <a href="/daftar-akun" className="text-blue-500">
                Daftar Baru
              </a>
            </p>
          </form>
        </div>
        <div className="container w-85 h-120 flex justify-end items-center">
          <img
            className="rounded-r-2xl h-120 w-full"
            src="https://media.istockphoto.com/id/1209447398/id/foto/konsep-asuransi-kesehatan-covid-19-kaburnya-pena-memegang-tangan-dan-stetoskop-pada-bentuk.jpg?s=612x612&w=0&k=20&c=05GG_FDaux9N4MaA5_4DlT6ZAVcVsKX8azU020ZAsCM="
            // className="absolute w-full h-52 object-cover object-top transform scale-x-[-1]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
