import Slider from "react-slick";
import React from "react";

const SliderCard = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </Slider>
  );
};
const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Gambar" className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};
const Section = () => {
  const cards = [
    {
      id: 1,
      imageSrc: "gambar1.jpg",
      title: "Judul Card 1",
      description: "Deskripsi Card 1",
    },
    {
      id: 2,
      imageSrc: "gambar1.jpg",
      title: "Judul Card 2",
      description: "Deskripsi Card 1",
    },
    {
      id: 3,
      imageSrc: "gambar1.jpg",
      title: "Judul Card 3",
      description: "Deskripsi Card 1",
    },
    {
      id: 4,
      imageSrc: "gambar1.jpg",
      title: "Judul Card 4",
      description: "Deskripsi Card 1",
    },
    {
      id: 5,
      imageSrc: "gambar1.jpg",
      title: "Judul Card 5",
      description: "Deskripsi Card 1",
    },
    {
      id: 6,
      imageSrc: "gambar1.jpg",
      title: "Judul Card 6",
      description: "Deskripsi Card 1",
    },
    {
      id: 7,
      imageSrc: "gambar1.jpg",
      title: "Judul Card 7",
      description: "Deskripsi Card 1",
    },
    // Tambahkan card lainnya sesuai kebutuhan
  ];

  return (
    <section>
      {/* Judul Sudut Kiri */}
      <h2 className="section-title">Judul Sudut Kiri</h2>

      {/* Slider Card */}
      <SliderCard cards={cards} />

      {/* Lihat Semua Sudut */}
      <div className="view-all flex justify-end">
        <a href="s" className="text-gray-500 text-sm">
          Lihat Semua Sudut
        </a>
      </div>
    </section>
  );
};

export default Section;
