import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHeart,
  faTrophy,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const DetailDokter = ({ data }) => {
  return (
    <div className="px-10">
      {data && (
        <div>
          <div className="title mb-5">
            <h2 className="text-3xl text-blue-500 text-right pr-10 font-bold">
              Profile Dokter
            </h2>
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
                  <p>{data.pendidikan}</p>
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
                  <p>{data.kondisi_klinis}</p>
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
                  <p>{data.prestasi}</p>
                </div>
                <div className="col-span-1 row-span-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faBook}
                      className="text-green-500 text-2xl"
                    />
                  </span>
                  <h1 className="font-bold text-gray-600">Seminar/Course</h1>
                  <p>{data.seminar}</p>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="container bg-white mx-auto shadow-lg rounded-lg">
                  <div className="flex justify-center m-3">
                    <img
                      src={data.imgUrl}
                      alt="Gambar"
                      className="w-full h-[330px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="pb-4 pl-4 pr-3">
                    <p>{data.name}</p>
                    <p>{data.keahlian}</p>
                    <p>{data.lokasi}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailDokter;
