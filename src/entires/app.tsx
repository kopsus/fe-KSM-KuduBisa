import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/home/views/Home";
import "./index.css";
import Header from "../features/_global/Header";
import Footer from "../features/_global/Footer";
import Edukasi from "../features/edukasi/views/Edukasi";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Edukasi" element={<Edukasi />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
