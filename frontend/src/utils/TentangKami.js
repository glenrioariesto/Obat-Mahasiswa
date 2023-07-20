import React from "react";
import ImageContainer from "../components/TentangKami/ImageContainer";
import ContentTentangKami from "../components/TentangKami/ContentTentangKami";

const TentangKami = () => {
  return (
    <div>
      <section class="relative bg-gray-900 text-white py-16 pt-32">
        <img
          src="https://media.istockphoto.com/id/873418908/id/foto/dokter-di-latar-belakang-rumah-sakit-dengan-ruang-copy.jpg?s=612x612&w=0&k=20&c=OElrJaLiwOHScqSG3L4oAe_BnEbbswMD6vQEEWH0XDU="
          alt="Background"
          class="absolute w-full h-52 object-cover object-top transform scale-x-[-1]"
        />

        <div class="container mx-auto px-4 relative pt-6">
          <h2 class="text-4xl font-bold text-blue-500 mb-4">Pelayanan Utama</h2>
          <p class="text-lg mb-8 text-blue-400">Slogan</p>
        </div>
      </section>
      <section className="sm:h-[700px] md:h-[700px] lg:h-[500px]">
        <div className="container  mx-auto  py-14 flex flex-row md:flex-col  relative ">
          <ImageContainer
            classNameContainer={
              "flex sm:flex sm:justify-center sm:w-full sm:h-60  md:flex md:justify-center md:w-full md:h-60 lg:flex lg:justify-end lg:w-full lg:h-1/2"
            }
            className={"sm:w-full md:w-full lg:w-1/2"}
            imageUrl={
              "https://media.istockphoto.com/id/1351287337/id/foto/dokter-berseragam-gaun-putih.jpg?s=612x612&w=0&k=20&c=tjG_RY8GDD92rckw5XfibGSMN-XYDFcawZ2RQeOdlGk="
            }
          />
          <ContentTentangKami
            title={"Tentang Kami"}
            content={
              "sejarah jcoiajsaskdjalkdjskafjnhsdkjvnjndjvndhfvfbsfvnhnreiunhfcnbrbvfhbbvchubvrvasdkjklasjdklajsdkasldjkalsjdlkjaskljdlkasjdlkasjldaslkdjlakjsdkjaklsjdljaslkdjlaksjdlkasjdljaskldjaklsjdlkajsdlkkjasdlajsdkljaslkdjkjaskldjlkajskjdaklsjlajsldjlaksjdlaskdjalsjybrhcbruhfkjdajihaduhiewuhriuehghiruhigweijfdjfiowoirweifroiwejofiewjofhehfihewiufhiuewhuhfiwehiuhwiuehfwheifuwhedfhkhnfjdefheiudhfesdfbehbfbeuhbfnerhbfvyevrbfhubrfvherbvjsikdsklhnhnfhirueifhieurhiuheiufrheiuheiufhiuehrjhteruigtierthueriohtiuerthieruhtieru"
            }
            classNameContainer={
              "w-1/2 sm:w-4/5 md:w-4/5 lg:w-1/2 h-2/3 sm:h-full md:h-5/6 lg:h-2/3 pt-14 px-6 top-10 sm:top-[210px] md:top-[210px] lg:top-10 sm:left-1/2 md:left-1/2 lg:left-[300px] transform -translate-x-1/2 "
            }
            className={
              "w-1/5 sm:w-1/3  md:w-1/4  top-0 sm:top-[180px] md:top-[180px] lg:top-0 lg:w-1/5 h-16 inset-x-1/2 left-1/2 transform -translate-x-1/2 lg:left-[300px]"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
