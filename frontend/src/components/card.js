import React from "react";

const CardItem = () => {
  return (
    <section className="">
      <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-end pt-5">
        <Card title="Judul Card 1" description="Deskripsi Card 1" />
        <Card title="Judul Card 2" description="Deskripsi Card 2" />
        <Card title="Judul Card 3" description="Deskripsi Card 3" />
        <Card title="Judul Card 4" description="Deskripsi Card 4" />
        <Card title="Judul Card 5" description="" />
        <Card title="Judul Card 6" description="" />
      </div>
    </section>
  );
};

const Card = ({ imageSrc, title, description, handleClick }) => {
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
      <img src={imageSrc} alt="Gambar" className="w-full rounded-lg" />
      <div className="overflow-y-auto">
        <h5 className="text-lg font-semibold mt-4 ">{title}</h5>

        <p className="text-sm text-gray-600 mt-2  whitespace-pre-line text-justify break-words ">
          {truncatedDescription}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
