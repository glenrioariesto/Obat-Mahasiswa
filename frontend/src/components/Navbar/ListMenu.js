import LoginButton from "./LoginButton";

const ListMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <ul className={`flex ${isMenuOpen ? "hidden" : "justify-start md:ml-14"}`}>
      <li className="mr-4">
        <a
          href="/"
          className="text-lg no-underline hover:underline hover:text-blue-400"
        >
          Beranda
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
      <li className="mr-4">
        <a
          href="/"
          className="text-lg no-underline hover:underline hover:text-blue-400"
        >
          Cabang
        </a>
      </li>
      <li className="mr-4">
        <a
          href="/"
          className="text-lg no-underline hover:underline hover:text-blue-400"
        >
          Spesialisai
        </a>
      </li>
      <li className="mr-4">
        <a
          href="/"
          className="text-lg no-underline hover:underline hover:text-blue-400"
        >
          Layanan
        </a>
      </li>
      <li className="ml-auto pr-14">
        <LoginButton isMenuOpen={!isMenuOpen} />
      </li>
    </ul>
  );
};

export default ListMenu;
