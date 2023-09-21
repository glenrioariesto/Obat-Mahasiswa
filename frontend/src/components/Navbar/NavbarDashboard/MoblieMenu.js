import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ isBar, toggleMenu }) => {
  return (
    <div className={`md:hidden flex items-center`}>
      <button className={`btn mx-2`} onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isBar ? faClose : faBars}
          className="text-[22px]"
        />
      </button>
    </div>
  );
};
export default MobileMenu;
