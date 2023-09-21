import LoginButton from "./LoginButton";

const ListMenu = ({ isMenuOpen, pathname }) => {
  return (
    <ul
      className={`flex ${
        isMenuOpen ? "hidden" : "justify-start md:ml-14 pr-2 pl-3"
      }`}
    >
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
        <LoginButton changeClassName={isMenuOpen || pathname ? "hidden" : ""} />
      </li>
    </ul>
  );
};

export default ListMenu;
