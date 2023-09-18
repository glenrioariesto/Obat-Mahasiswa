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
      <section className="sm:h-[700px] md:h-[700px] lg:h-[500px]">
        <div className="container  mx-auto  py-14 flex flex-row md:flex-col  relative ">
          <ImageContainer
            classNameContainer={
              "flex sm:flex sm:justify-center sm:w-full sm:h-60  md:flex md:justify-center md:w-full md:h-60 lg:flex lg:justify-end lg:w-full lg:h-1/2"
            }
            className={"sm:w-full md:w-full lg:w-1/2"}
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
              "w-1/2 sm:w-4/5 md:w-4/5 lg:w-1/2 h-2/3 sm:h-full md:h-5/6 lg:h-2/3 pt-14 px-6 top-10 sm:top-[210px] md:top-[210px] lg:top-10 sm:left-1/2 md:left-1/2 lg:left-[400px] transform -translate-x-1/2 "
            }
            classNameContainertitle={
              "w-1/5 sm:w-1/3  md:w-1/4 top-0 sm:top-[180px] md:top-[180px] lg:top-0 lg:w-1/5 sm:left-[220px] md:left-[300px] lg:left-[300px]   h-16"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
