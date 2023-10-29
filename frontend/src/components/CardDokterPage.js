import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faStethoscope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"; // Impor ikon yang Anda butuhkan

const CardDokter = ({
  imageSrc,
  name,
  keahlian,
  lokasi,
  handleClickProfile,
  handleClickJanji,
}) => {
  return (
    <div className="card border-2 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg hover:border-blue-400 cursor-pointer">
      <div className="flex flex-row p-1">
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt="Gambar"
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>
        <div className="flex-col ml-4">
          <LinesEllipsis
            text={name}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="font-bold"
          />

          <p className="text-gray-600">
            <FontAwesomeIcon
              icon={faStethoscope}
              className="text-blue-500 text-center  pr-1"
            />
            {keahlian}
          </p>
          <p className="text-gray-600">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-blue-500 text-center  px-1"
            />
            {lokasi}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-4">
        <h1
          className="text-blue-500 cursor-pointer mb-2 md:mb-0"
          onClick={handleClickProfile}
        >
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="text-blue-500 pr-1"
          />
          Lihat Profil
        </h1>
        <div className="flex">
          <button
            className="bg-white text-blue-500 border-blue-600 border font-bold rounded-lg px-2 py-2 cursor-pointer hover:bg-blue-200 mr-1"
            onClick={handleClickJanji}
          >
            Buat Janji Temu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDokter;
