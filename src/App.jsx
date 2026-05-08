import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
