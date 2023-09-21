import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Input";

const MobileMenu = ({ isMenuOpen, isBar, toggleMenu }) => {
  return (
    <div className={`md:hidden flex items-center`}>
      <button className={`btn mx-2`} onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isBar ? faClose : faBars}
          className="text-[22px]"
        />
      </button>
      <Input
        placeholder="Cari yang anda butuhkan"
        className={`mr-3 py-1 px-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        disabled={isBar}
      />
    </div>
  );
};
export default MobileMenu;
