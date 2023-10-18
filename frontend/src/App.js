import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarLobby/MainNavbarLobby";
import Footer from "./components/Footer";
import Section from "./components/SectContPers";
import LoginPage from "./utils/LoginPage";
import DashboardAdmin from "./utils/Admin/DashboardAdmin";
import DashboardPasien from "./utils/Pasien/DashboardPasien";
import TentangKami from "./utils/TentangKami";
import PartnerPage from "./utils/PartnerPage";
import { AuthProvider } from "./contexts/UserAuthentication";
import { NavbarProvider } from "./contexts/NavbarContext";
import { PartnerProvider } from "./contexts/PartnerContex";
import { Helmet } from "react-helmet";
import logotitle from "./assets/image/logotitle.png";
import DetailPartner from "./utils/SpesialisasiPage";

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
              <Route path="/" element={<PartnerPage />} />
              <Route path="/tentang-kami" element={<TentangKami />} />
              <Route path="/detailPartner" element={<DetailPartner />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
              <Route path="/dashboardPasien" element={<DashboardPasien />} />
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
