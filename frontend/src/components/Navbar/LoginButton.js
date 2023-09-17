import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LoginButton = ({ isMenuOpen }) => {
  return (
    <a href="/login">
      <button
        className={`${
          isMenuOpen ? "" : "hidden"
        } mx-2 h-10 bg-gray-200 text-gray-600 py-2 px-4 rounded-[25px] hover:bg-blue-300`}
      >
        <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
        <span>Login</span>
      </button>
    </a>
  );
};

export default LoginButton;
