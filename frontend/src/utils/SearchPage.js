import React from "react";

const SearchPage = () => {
  return (
    <div>
      <div className="pt-28 p-5">
        <div className="px-10 py-10">
          <div className="title flex items-center justify-between">
            <h2 className="text-3xl text-blue-500 font-bold">
              Hasil pencarian
            </h2>
          </div>
          <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-end pt-5">
            {/* {items.map((item, index) => (
            <Card
              key={index}
              imageSrc={item.imgUrl}
              name={item.name}
              keahlian={item.keahlian}
              lokasi={item.lokasi}
              handleClickProfile={() => {
                navigate(`/detailPartner?cardId=${item.id}`);
              }}
            />
          ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
