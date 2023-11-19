import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = ({
  placeholder,
  className,
  classnameFirstIcons,
  disabled,
  firstIcons,
  secondsIcons,
  type,
  onChange,
  id,
  name,
  onClick,
  value,
  required,
}) => {
  return (
    <div className="relative w-full">
      <input
        name={name}
        id={id}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`pl-10 w-full bg-white border border-gray-400 text-gray-800 rounded-md  focus:outline-none ${className}`}
        disabled={disabled}
        value={value}
        required={required}
      />
      <span
        className={`${
          firstIcons ? "" : "hidden"
        }  absolute left-3 top-1/2 transform -translate-y-1/2`}
      >
        <FontAwesomeIcon
          icon={firstIcons ? firstIcons : faSearch}
          className={classnameFirstIcons ? classnameFirstIcons : ""}
        />
      </span>
      <span
        className={`${
          secondsIcons ? "" : "hidden"
        }  absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer`}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={secondsIcons ? secondsIcons : faSearch}
          className="text-gray-500 "
        />
      </span>
    </div>
  );
};

export default Input;
