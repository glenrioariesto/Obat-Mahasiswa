/* eslint-disable jsx-a11y/anchor-is-valid */
const MobileMenuDropdown = ({ isBar, isMenuOpen }) => {
  return (
    isBar &&
    isMenuOpen && (
      <div className="absolute w-full bg-white mt-2  py-2 shadow-md rounded-b-lg">
        <div className="px-4">
          <a href="/" className="block py-2 hover:text-blue-400">
            Partner Obat Keluarga
          </a>
          <a href="/detailPartner" className="block py-2  hover:text-blue-400">
            Spesialisai
          </a>
          <a href="/tentang-kami" className="block  py-2  hover:text-blue-400">
            Tentang Kami
          </a>
        </div>
      </div>
    )
  );
};
export default MobileMenuDropdown;
