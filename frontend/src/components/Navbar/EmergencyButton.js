import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";

const EmergencyButton = ({ isMenuOpen }) => {
  return (
    <button className="btn bg-red-500 text-white py-2 px-4 rounded-[25px] hover:bg-red-600">
      <FontAwesomeIcon icon={faAmbulance} className="mr-2 text-[14px]" />
      {isMenuOpen ? "IGD" : "Gawat Darurat"}
    </button>
  );
};

export default EmergencyButton;
