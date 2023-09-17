import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = ({ placeholder, className, disabled }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className={`pl-10 w-full bg-white border border-gray-400 text-gray-800 rounded-md  focus:outline-none ${className}`}
        disabled={disabled}
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      </span>
    </div>
  );
};

export default Input;
