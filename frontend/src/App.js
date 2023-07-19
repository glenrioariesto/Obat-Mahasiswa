import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./utils/LandingPage";
import Footer from "./components/Footer";
import Section from "./components/SectContPers";
import TentangKami from "./utils/TentangKami";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Routes>
      <Section />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
