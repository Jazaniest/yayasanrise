import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Struktur from "./pages/Struktur";
import Pengurus from "./pages/Pengurus";
import VisiMisi from "./pages/VisiMisi";
import Legalitas from "./pages/Legalitas";
import Galeri from "./pages/Galeri";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Screen muncul selama state isLoading bernilai true */}
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
      
      <BrowserRouter>
        <Routes>
          {/* Redirect dari root (/) ke /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/pengurus" element={<Pengurus />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/legalitas" element={<Legalitas />} />
          <Route path="/galeri" element={<Galeri />} />
          
          {/* Opsional: Route untuk 404 jika user mengetik alamat asal-asalan */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}