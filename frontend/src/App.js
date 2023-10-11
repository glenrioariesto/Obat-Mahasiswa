import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarLobby/MainNavbarLobby";
import Footer from "./components/Footer";
import Section from "./components/SectContPers";
import LoginPage from "./utils/LoginPage";
import Dashboard from "./utils/Dashboard/Dashboard";
import TentangKami from "./utils/TentangKami";
import LandingPage from "./utils/LandingPage";
import { AuthProvider } from "./contexts/UserAuthentication";
import { NavbarProvider } from "./contexts/NavbarContext";
import { PartnerProvider } from "./contexts/PartnerContex";
import { Helmet } from "react-helmet";
import logotitle from "./assets/image/logotitle.png";

function App() {
  return (
    <AuthProvider>
      <NavbarProvider>
        <PartnerProvider>
          <BrowserRouter>
            <Helmet>
              <title>Obat Mahasiswa</title>
              <link rel="icon" type="image/png" href={logotitle} />
            </Helmet>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/tentang-kami" element={<TentangKami />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Section />

            <Footer />
          </BrowserRouter>
        </PartnerProvider>
      </NavbarProvider>
    </AuthProvider>
  );
}

export default App;
