import React from "react";

const CardPartner = ({ imageSrc, title, description, handleClick }) => {
  const MAX_DESCRIPTION_LENGTH = 300;

  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
      : description;
  return (
    <div
      className="card border-2 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg hover:border-blue-400 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt="Gambar"
          className="h-48 w-48 object-contain rounded-lg"
        />
      </div>
      <div className="overflow-y-auto">
        <h5 className="text-lg font-semibold mt-4 ">{title}</h5>

        <p className="text-sm text-gray-600 mt-2  whitespace-pre-line text-justify break-words ">
          {truncatedDescription}
        </p>
      </div>
    </div>
  );
};

export default CardPartner;
