import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/MainNavbar";
import Footer from "./components/Footer";
import Section from "./components/SectContPers";
import LoginPage from "./utils/LoginPage";
import Dashboard from "./utils/Dashboard/Dashboard";
import TentangKami from "./utils/TentangKami";
import LandingPage from "./utils/LandingPage";
import { AuthProvider } from "./contexts/UserAuthentication";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
