import React from "react";

const ContentTentangKami = ({
  title,
  content,
  classNameContainerContent,
  classNameContainertitle,
}) => {
  const limitContent = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + ".";
    }
    return text;
  };

  const limitedContent = limitContent(content, 510);
  return (
    <div className="absolute top-10 container w-full h-full">
      <div
        className={`absolute flex flex-col items-start bg-white shadow-2xl rounded-xl overflow-hidden ${classNameContainerContent}`}
      >
        <div className="container overflow-y-auto h-full  ">
          <p
            className="whitespace-pre-line text-justify break-words"
            style={{ textAlign: "text-justify" }}
          >
            {limitedContent}
          </p>
        </div>
      </div>
      <div
        className={`absolute flex flex-col justify-center items-center bg-red-400 p-4 shadow-lg rounded-[60px]  inset-x-1/2 left-1/2 transform -translate-x-1/2 ${classNameContainertitle}}`}
      >
        <p className="text-white font-bold sm:text-md md:text-lg lg:text-xl rounded-md p-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ContentTentangKami;
