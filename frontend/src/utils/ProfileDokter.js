import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHeart,
  faTrophy,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarContext } from "../contexts/NavbarContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDokter = () => {
  const { changeItems } = useContext(NavbarContext);
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="pt-28">
        <div className="px-10 py-10">
          <div className="title mb-5">
            <h2 className="text-3xl text-blue-500 font-bold">Profile Dokter</h2>
          </div>
          <div className="container mx-auto bg-gray-100 shadow-2xl rounded-lg p-5">
            <div className="flex flex-row">
              <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full px-5 pt-8">
                <div className="col-span-1 row-span-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-blue-500 text-2xl"
                    />
                  </span>
                  <h1 className="font-bold text-gray-600">
                    Riwayat Pendidikan
                  </h1>
                  <p>deskripsi</p>
                </div>
                <div className="col-span-1 row-span-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-red-500 text-2xl"
                    />
                  </span>
                  <h1 className="font-bold text-gray-600">
                    Kondisi Klinis yang Ditangani
                  </h1>
                  <p>deskripsi</p>
                </div>
                <div className="col-span-1 row-span-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faTrophy}
                      className="text-yellow-500 text-2xl"
                    />
                  </span>
                  <h1 className="font-bold text-gray-600">
                    Prestasi & Penghargaan
                  </h1>
                  <p>deskripsi</p>
                </div>
                <div className="col-span-1 row-span-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faBook}
                      className="text-green-500 text-2xl"
                    />
                  </span>
                  <h1 className="font-bold text-gray-600">Seminar/Course</h1>
                  <p>deskripsi</p>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="container bg-white mx-auto shadow-lg rounded-lg">
                  <div className="flex justify-center m-3">
                    <img
                      src="https://d3uhejzrzvtlac.cloudfront.net/doctor/photo/8954b498-294d-4b8a-8ee5-4aa62f2280a0.png"
                      alt="Gambar"
                      className="w-full h-50 object-cover rounded-lg"
                    />
                  </div>
                  <div className="pb-4 pl-4 pr-3">
                    <p>nama</p>
                    <p>keahlian</p>
                    <p>lokasi</p>
                  </div>
                </div>
                <button
                  className="mt-5 bg-blue-500 text-white font-bold rounded-lg px-2 py-2 cursor-pointer hover:bg-blue-600 mr-1"
                  onClick={() => {
                    navigate("/dashboardPasien");
                    changeItems("JanjiTemu");
                  }}
                >
                  Buat Janji
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDokter;
