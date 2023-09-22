import Input from "../../Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ isMenuOpen }) => {
  return (
    <div className={`flex-1 px-2 ${isMenuOpen ? "hidden" : ""}`}>
      <Input
        placeholder="Cari yang anda butuhkan"
        className="py-2 px-4 "
        type="text"
        firstIcons={faSearch}
      />
    </div>
  );
};

export default SearchInput;
