import React from "react";

const ImageMain = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="relative bg-gray-900 h-[230px] text-white py-16 pt-28 sm:pt-28 lg:pt-32 ">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute w-full h-52 object-cover object-top transform scale-x-[-1]"
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
