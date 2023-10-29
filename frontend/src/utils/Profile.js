import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/UserAuthentication";
import Input from "../components/Input";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { user, changePassword, fetchData } = useContext(AuthContext);
  const [openChangePassword, setOpenChangePagePassword] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [form, setFrom] = useState({
    OldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const handleGoBack = () => {
    setOpenChangePagePassword(!openChangePassword);
  };

  const handleChangePagePassword = () => {
    setOpenChangePagePassword(!openChangePassword);
  };

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePasswordResult = (msg) => {
    switch (msg) {
      case "auth/weak-password":
        toast.error("Password harus memiliki setidaknya 6 karakter.", {
          position: "top-right",
        });
        break;
      case "auth/invalid-login-credentials":
        toast.error("Periksa kembali password lama anda !!!", {
          position: "top-right",
        });
        break;
      default:
        toast.success("Anda berhasil mengubah password .", {
          position: "top-right",
        });
        break;
    }
  };

  const getUsernameFromEmail = (email) => {
    const parts = email.split("@");
    if (parts.length > 0) {
      return parts[0];
    } else {
      return null;
    }
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();

    const { OldPassword, newPassword, confirmNewPassword } = form;

    if (user) {
      if (newPassword !== confirmNewPassword) {
        toast.error("Konfirmasi password tidak sesuai.", {
          position: "top-right",
        });
      } else {
        const msg = await changePassword(OldPassword, newPassword);
        handleChangePasswordResult(msg);
        if (!msg) {
          setOpenChangePagePassword(!openChangePassword);
        }
      }
    }
  };
  useEffect(() => {
    if (user) {
      if (user.uid) {
        const userData = async () => {
          try {
            const res = await fetchData(user.uid);
            const { status } = res;
            const { photoURL, email } = user;
            setUserData({ email, photoURL, status });
          } catch (error) {
            console.error("Error fetching user detail:", error);
          }
        };

        userData();
      }
    }
  }, [user, fetchData]);
  return (
    <div className="flex flex-col h-full relative justify-center items-center">
      {openChangePassword ? (
        <div>
          <div className="absolute top-0 left-0 transform -translate-y -translate-x pt-4 pl-4">
            <button
              className="text-[20px] text-gray-600 font-bold"
              onClick={handleGoBack}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Kembali
            </button>
          </div>
          <div className="flex flex-col relative justify-center items-center">
            <form onSubmit={handleChangePassword}>
              <div className="px-16 pb-4">
                <label
                  htmlFor="Ganti-Password"
                  className="text-[30px] text-gray-600 font-bold"
                >
                  Ganti Password
                </label>
              </div>
              <Input
                placeholder="Masukkan Password Lama"
                className="py-2 px-4 "
                type={showOldPassword ? "text" : "password"}
                id="OldPassword"
                name="OldPassword"
                onChange={handleChange}
                firstIcons={faLock}
                secondsIcons={showOldPassword ? faEyeSlash : faEye}
                onClick={() => setShowOldPassword(!showOldPassword)}
              />
              <br />
              <Input
                placeholder="Masukkan Password Baru"
                className="py-2 px-4 "
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                onChange={handleChange}
                firstIcons={faLock}
                secondsIcons={showNewPassword ? faEyeSlash : faEye}
                onClick={() => setShowNewPassword(!showNewPassword)}
              />
              <br />
              <Input
                placeholder="Konfirmasi Password Baru"
                className="py-2 px-4 "
                type={showConfirmNewPassword ? "text" : "password"}
                id="confirmNewPassword"
                name="confirmNewPassword"
                onChange={handleChange}
                firstIcons={faLock}
                secondsIcons={showConfirmNewPassword ? faEyeSlash : faEye}
                onClick={() =>
                  setShowConfirmNewPassword(!showConfirmNewPassword)
                }
              />
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2  rounded-md focus:outline-none focus:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : userData ? (
        <div className="flex flex-col justify-center items-center">
          <img
            src={
              userData.photoURL
                ? userData.photoURL
                : "https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=1200"
            }
            alt="Foto Profil"
            className="w-32 h-32 items-center justify-center rounded-full object-cover"
          />
          <p className="mt-4 text-gray-600">
            {getUsernameFromEmail(userData.email)}
          </p>

          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleChangePagePassword}
          >
            Ganti Password
          </button>
          <p className="mt-4">
            Status Akun:
            <span className="text-green-600">{userData.status}</span>
          </p>
        </div>
      ) : (
        <p>Mengambil data pengguna...</p>
      )}
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
  );
};

export default Profile;
