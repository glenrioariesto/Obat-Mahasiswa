import logo from "../../../assets/image/logo.png";

const ListMenu = ({ isMenuOpen, pathname }) => {
  return (
    <ul
      className={`flex ${isMenuOpen ? "hidden" : "  "}  w-full  items-center`}
    >
      <li className="mx-0 md: lg:mx-4 pr-36">
        <img src={logo} alt="Logo" className="w-auto h-auto max-h-16" />
      </li>
      <li className="mr-4">
        <a
          href="/"
          className="text-lg no-underline hover:underline hover:text-blue-400"
        >
          Partner
        </a>
      </li>
      <li className="mr-4">
        <a
          href="/tentang-kami"
          className="text-lg no-underline hover:underline hover:text-blue-400"
        >
          Tentang Kami
        </a>
      </li>
    </ul>
  );
};

export default ListMenu;
