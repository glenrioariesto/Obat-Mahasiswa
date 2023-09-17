import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/MainNavbar";
import LandingPage from "./utils/LandingPage";
import Footer from "./components/Footer";
import Section from "./components/SectContPers";
import TentangKami from "./utils/TentangKami";
import LoginPage from "./utils/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Section />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
