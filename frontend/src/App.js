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

function App() {
  return (
    <AuthProvider>
      <NavbarProvider>
        <PartnerProvider>
          <BrowserRouter>
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
