import { useState, useContext, useEffect } from "react";
import ImageMain from "../components/ImageMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../contexts/UserAuthentication";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const { login, register, accestoken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setFrom] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering); // Mengganti status registrasi saat tombol toggle ditekan
  };

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = form;

    if (isRegistering) {
      if (password !== confirmPassword) {
        toast.error("Konfirmasi password tidak sesuai.", {
          position: "top-right",
        });
      } else {
        const msg = await register(email, password);
        handleRegistrationResult(msg);
      }
    } else {
      const msg = await login(email, password);
      handleLoginResult(msg);
    }
  };

  const handleRegistrationResult = (msg) => {
    switch (msg) {
      case "auth/weak-password":
        toast.error("Password harus memiliki setidaknya 6 karakter.", {
          position: "top-right",
        });
        break;
      case "auth/email-already-in-use":
        toast.error("Maaf, email sudah digunakan.", { position: "top-right" });
        break;
      case "auth/network-request-failed":
        toast.warn("Maaf, periksa kembali koneksi Anda !!!", {
          position: "top-right",
        });
        break;
      case "auth/invalid-email":
        toast.error("Email yang Anda masukkan tidak benar.", {
          position: "top-right",
        });
        break;
      default:
        toast.success("Akun berhasil dibuat.", { position: "top-right" });
        setIsRegistering(false);
        break;
    }
  };

  const handleLoginResult = (msg) => {
    switch (msg) {
      case "auth/invalid-email":
        toast.error("Email yang Anda masukkan tidak benar.", {
          position: "top-right",
        });
        break;
      case "auth/invalid-login-credentials":
        toast.error("Periksa kembali email dan password Anda !!!", {
          position: "top-right",
        });
        break;
      case "auth/too-many-requests":
        toast.warn(
          "Maaf, Anda melakukan kesalahan 3 kali. Coba lagi lain waktu.",
          { position: "top-right" }
        );
        break;
      case "auth/network-request-failed":
        toast.warn("Maaf, periksa kembali koneksi Anda !!!", {
          position: "top-right",
        });
        break;
      default:
        toast.warn("Maaf, terjadi kesalahan.", { position: "top-right" });
        break;
    }
  };

  useEffect(() => {
    if (accestoken) {
      // console.log("masuk");
      // console.log(accestoken);
      navigate("/dashboard");
    }
  }, [accestoken, navigate]);
  return (
    <div>
      <section className="">
        <ImageMain
          title=""
          subtitle=""
          imageUrl="https://media.istockphoto.com/id/873418908/id/foto/dokter-di-latar-belakang-rumah-sakit-dengan-ruang-copy.jpg?s=612x612&w=0&k=20&c=OElrJaLiwOHScqSG3L4oAe_BnEbbswMD6vQEEWH0XDU="
        />
      </section>

      <div className="container bg-white shadow-lg mx-auto mb-24 flex flex-row relative  rounded-2xl justify-between">
        <div className="container flex justify-center items-center">
          <form onSubmit={handleLogin}>
            <div className="px-16">
              <label
                htmlFor="Register-or-Login"
                className="text-[30px] text-gray-600 font-bold"
              >
                {isRegistering ? "Register" : "Login"}
              </label>
            </div>
            <div className="mb-2 sm:pt-4 relative px-16 ">
              <label
                htmlFor="email"
                className="text-lg text-gray-600 font-bold"
              >
                Email
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Masukkan email"
                required
              />
              <label
                htmlFor="password"
                className="text-lg text-gray-600 font-bold"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Masukkan password"
                required
              />
              <span
                className={`absolute inset-y-0 right-20 h-[20px] top-[110px] ${
                  isRegistering
                    ? "sm:top-[125px] md:top-[125px] lg:top-[125px] "
                    : "sm:top-[125px] md:top-[125px] lg:top-[125px] "
                } flex items-center cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye} // Ganti ikon mata tergantung apakah password terlihat atau tidak
                  className="text-gray-400 hover:text-blue-500"
                />
              </span>
              {isRegistering && (
                <div>
                  <label
                    htmlFor="Confirm password"
                    className="text-lg text-gray-600 font-bold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={handleChange}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Masukkan password"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-20 top-[180px] sm:top-[195px] md:top-[195px] lg:top-[195px] h-[20px] flex items-center cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye} // Ganti ikon mata tergantung apakah password terlihat atau tidak
                      className="text-gray-400 hover:text-blue-500"
                    />
                  </span>
                </div>
              )}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2  rounded-md focus:outline-none focus:bg-blue-600"
                >
                  {isRegistering ? "Register" : "Login"}
                </button>
              </div>
            </div>

            <div className="sm:pb-3 pt-3">
              <p
                className="text-center cursor-default"
                onClick={handleToggleForm}
              >
                {isRegistering ? "Sudah punya akun? " : "Belum punya akun? "}{" "}
                <span className="text-blue-500">
                  {isRegistering ? "Login disini" : "Daftar disini"}
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="container hidden md:block lg:block w-85 h-120 flex justify-end items-center">
          <img
            className="hidden md:block lg:block  rounded-r-2xl sm:h-[350px] md:h-[350px] lg:h-[450px] w-full"
            src="https://media.istockphoto.com/id/1209447398/id/foto/konsep-asuransi-kesehatan-covid-19-kaburnya-pena-memegang-tangan-dan-stetoskop-pada-bentuk.jpg?s=612x612&w=0&k=20&c=05GG_FDaux9N4MaA5_4DlT6ZAVcVsKX8azU020ZAsCM="
            // className="absolute w-full h-52 object-cover object-top transform scale-x-[-1]"
            alt=""
          />
          <div className="absolute hidden md:block lg:block bottom-0 right-0 h-40 rounded-t-[110px] rounded-r-[15px]  w-1/2  bg-blue-300  text-white p-4 cursor-default">
            <div className="absolute hidden md:block lg:block bottom-0 right-0 h-36 rounded-t-[110px] rounded-r-[15px] w-full bg-blue-400  text-white p-4 cursor-default">
              <div className="absolute hidden md:block lg:block bottom-0 right-0 h-32 rounded-t-[110px] rounded-r-[15px] bg-blue-500  text-white p-4">
                <p className="text-lg font-bold pl-10">Daftar Janji Temu</p>
                <p className="text-lg pl-10">
                  Daftar janji temu dengan dokter terbaik kami dan dapatkan
                  jadwal janji temu di waktu yang Anda inginkan.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 transform -translate-y -translate-x ">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              limit={3}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
