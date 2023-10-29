import React from "react";

const ImageMain = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="relative h-[280px] text-white pt-36">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute w-full h-[200px] sm:h-[330px] md:h-[330px] lg:h-[330px] object-cover object-top transform scale-x-[-1]"
      />

      <div className="container mx-auto px-4 relative pt-6">
        <h2 className="text-4xl font-bold text-blue-500 mb-4 cursor-default">
          {title}
        </h2>
        <p className="text-lg mb-8 text-blue-400 cursor-default">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageMain;
