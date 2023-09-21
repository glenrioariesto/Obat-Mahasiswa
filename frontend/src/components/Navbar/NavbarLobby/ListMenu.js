import LoginButton from "./LoginButton";
import { AuthContext } from "../../../contexts/UserAuthentication";
import { useContext } from "react";

const ListMenu = ({ isMenuOpen, pathname }) => {
  const { accestoken } = useContext(AuthContext);

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
      <li className={`${accestoken ? "ml-auto pr-8" : "ml-auto pr-14"} `}>
        <LoginButton changeClassName={isMenuOpen || pathname ? "hidden" : ""} />
      </li>
    </ul>
  );
};

export default ListMenu;
