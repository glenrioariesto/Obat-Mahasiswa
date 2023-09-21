const SearchButton = ({ isMenuOpen }) => {
  return (
    <button
      className={`${
        isMenuOpen ? "hidden" : "w-24"
      } mx-2 h-10 bg-blue-500 text-white py-2 px-4 rounded-[25px] hover:bg-blue-600`}
    >
      Cari
    </button>
  );
};

export default SearchButton;
