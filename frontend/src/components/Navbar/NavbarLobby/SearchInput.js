import Input from "../../Input";

const SearchInput = ({ isMenuOpen }) => {
  return (
    <div className={`flex-1 px-2 ${isMenuOpen ? "hidden" : ""}`}>
      <Input placeholder="Cari yang anda butuhkan" className="py-2 px-4 " />
    </div>
  );
};

export default SearchInput;
