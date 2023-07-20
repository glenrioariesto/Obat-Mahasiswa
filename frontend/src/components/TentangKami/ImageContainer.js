const ImageContainer = ({ className, classNameContainer, imageUrl }) => {
  return (
    <div className={`${classNameContainer}`}>
      <img
        src={imageUrl}
        alt="ImageContainer"
        className={`object-cover shadow-lg rounded-lg md:rounded-lg md:rounded-l-lg ${className}`}
      />
    </div>
  );
};

export default ImageContainer;
