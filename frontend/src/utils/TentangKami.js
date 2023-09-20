import React from "react";
import ImageContainer from "../components/TentangKami/ImageContainer";
import ContentTentangKami from "../components/TentangKami/ContentTentangKami";
import ImageMain from "../components/ImageMain";

const TentangKami = () => {
  return (
    <div>
      <section>
        <ImageMain
          title="Bersama obat keluarga penyakit terkendali"
          subtitle="Mari berkenalan dengan perusahaan kami"
          imageUrl="https://media.istockphoto.com/id/873418908/id/foto/dokter-di-latar-belakang-rumah-sakit-dengan-ruang-copy.jpg?s=612x612&w=0&k=20&c=OElrJaLiwOHScqSG3L4oAe_BnEbbswMD6vQEEWH0XDU="
        />
      </section>
      <section className="h-[600px] sm:h-[550px] md:h-[530px] lg:h-[52  0px]">
        <div className="container mx-auto  py-14 flex flex-row md:flex-col  relative ">
          <ImageContainer
            classNameContainer={
              "flex sm:justify-center sm:w-full  md:justify-center sm:w-full md:w-full lg:w-full sm:h-60 md:h-60 lg:h-1/2 lg:justify-end  "
            }
            className={" sm:w-full md:w-full lg:w-1/2"}
            imageUrl={
              "https://media.istockphoto.com/id/619656080/id/foto/wanita-dewasa-senior-mengisi-dokumen.jpg?s=612x612&w=0&k=20&c=r5pcA2HdouAdvw1pFKpguegFy6TCPQy90Cud-lEyAEI="
            }
          />
          <ContentTentangKami
            title={"Tentang Kami"}
            content={
              "Sejak 2023, Obat Keluarga semoga sukses membangun jaringan rumah sakit dengan komitmen untuk menjadikan rumah berkeluh kesah bagi keluarga dengan pelayanan penanganan kesehatan di segala penyakit dari sakit hati sampai hepatitis. kami hadir untuk menyehatkan keluarga secara utuh dan penuh cinta. "
            }
            classNameContainerContent={
              "w-[500px] sm:w-4/5 md:w-4/5 lg:w-[600px] h-[220px]  sm:h-[250px] md:h-[250px] lg:h-2/3 pt-14 px-6 top-[300px] sm:top-[210px] md:top-[210px] lg:top-10 left-1/2 sm:left-1/2 md:left-1/2 lg:left-[400px] transform -translate-x-1/2 "
            }
            classNameContainertitle={
              "w-[220px] sm:w-1/3  md:w-1/4 lg:w-1/5 top-[250px] sm:top-[180px] md:top-[180px] lg:top-0  sm:left-[330px] md:left-[410px] lg:left-[410px]   h-16"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
