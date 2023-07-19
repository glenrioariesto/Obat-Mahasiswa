import React from "react";

const CardItem = () => {
  return (
    <section className="flex flex-col">
      <div className="title flex items-center justify-between">
        <h2 className="text-3xl font-bold">Judul Sudut Kiri</h2>
        <div className="view-all">
          <a href="s" className="text-gray-500 text-sm">
            Lihat Semua Sudut
          </a>
        </div>
      </div>
      <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-end pt-5">
        <Card title="Judul Card 1" description="Deskripsi Card 1" />
        <Card title="Judul Card 2" description="Deskripsi Card 2" />
        <Card title="Judul Card 3" description="Deskripsi Card 3" />
        <Card title="Judul Card 4" description="Deskripsi Card 4" />
        <Card title="Judul Card 5" description="Deskripsi Card 5" />
        <Card
          imageSrc=""
          title="Judul Card 6"
          description="Deskripsi Card 6 yang sangat panjang dan akan dibatasi jumlah karakternya.asdasdmaksdkasjdkahskjdhajdasjhgdajsgdkj"
        />
      </div>
    </section>
  );
};

const Card = ({ imageSrc, title, description }) => {
  const handleClick = () => {
    // Logika untuk perpindahan halaman saat card diklik
  };
  const MAX_DESCRIPTION_LENGTH = 90;

  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
      : description;
  return (
    <div
      className="card border-2 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <img src={imageSrc} alt="Gambar" className="w-full rounded-lg" />
      <h5 className="text-lg font-semibold mt-4">{title}</h5>
      <p className="text-sm text-gray-600 mt-2">{truncatedDescription}</p>
    </div>
  );
};

export default CardItem;
