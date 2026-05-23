import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami/TentangKami";
import Profil from "./pages/TentangKami/Profil";
import VisiMisi from "./pages/TentangKami/VisiMisi";
import NilaiPendekatan from "./pages/TentangKami/NilaiPendekatan";
import Legalitas from "./pages/TentangKami/Legalitas";
import TimPakar from "./pages/TentangKami/TimPakar";
import IsuPrioritas from "./pages/IsuPrioritas/IsuPrioritas";
import LoadingScreen from "./components/LoadingScreen";
import PerubahanIklim from "./pages/IsuPrioritas/PerubahanIklim";
import Gambut from "./pages/IsuPrioritas/Gambut";
import Energi from "./pages/IsuPrioritas/Energi";
import KonflikAgraria from "./pages/IsuPrioritas/KonflikAgraria";
import Sampah from "./pages/IsuPrioritas/Sampah";
import KetahananPangan from "./pages/IsuPrioritas/KetahananPangan";
import EkonomiHijau from "./pages/IsuPrioritas/EkonomiHijau";
import ProgramKerja from "./pages/ProgramKerja/ProgramKerja";
import ResearchDevelopment from "./pages/ProgramKerja/ResearchDevelopment";
import CommunityEmpowerment from "./pages/ProgramKerja/CommunityEmpowerment";
import EcologicalConflict from "./pages/ProgramKerja/EcologicalConflict";
import EnvironmentalEducation from "./pages/ProgramKerja/EnvironmentalEducation";
import RiauSocioEco from "./pages/ProgramKerja/RiauSocioEco";
import InsightOpini from "./pages/Insight";
import PublikasiRiset from "./pages/PublikasiRiset/PublikasiRiset";
import ArtikelIlmiah from "./pages/PublikasiRiset/ArtikelIlmiah";
import PolicyBrief from "./pages/PublikasiRiset/PolicyBrief";
import LaporanPenelitian from "./pages/PublikasiRiset/LaporanPenelitian";
import Buku from "./pages/PublikasiRiset/Buku";
import InfografisData from "./pages/PublikasiRiset/InfografisData";
import Kegiatan from "./pages/Kegiatan";
import Dampak from "./pages/Dampak";
import Mitra from "./pages/Mitra";
import Footer from "./components/Footer";
import Struktur from "./pages/TentangKami/Struktur";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Screen muncul selama state isLoading bernilai true */}
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}

      <BrowserRouter>
        <div>
          <Routes>
            {/* Redirect dari root (/) ke /home */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            {/* Tentang Kami */}
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/tentang-kami/profil" element={<Profil />} />
            <Route path="/tentang-kami/visi-misi" element={<VisiMisi />} />
            <Route path="/tentang-kami/nilai-pendekatan" element={<NilaiPendekatan />} />
            <Route path="/tentang-kami/legalitas" element={<Legalitas />} />
            <Route path="/tentang-kami/tim-pakar" element={<TimPakar />} />
            <Route path="/tentang-kami/struktur" element={<Struktur />} />
            {/* Isu Prioritas */}
            <Route path="/isu-prioritas" element={<IsuPrioritas />} />
            <Route path="/isu-prioritas/perubahan-iklim" element={<PerubahanIklim />} />
            <Route path="/isu-prioritas/energi" element={<Energi />} />
            <Route path="/isu-prioritas/gambut" element={<Gambut />} />
            <Route path="/isu-prioritas/ekonomi-hijau" element={<EkonomiHijau />} />
            <Route path="/isu-prioritas/ketahanan-pangan" element={<KetahananPangan />} />
            <Route path="/isu-prioritas/konflik-agraria" element={<KonflikAgraria />} />
            <Route path="/isu-prioritas/sampah" element={<Sampah />} />
            {/* Program Kerja */}
            <Route path="/program-kerja" element={<ProgramKerja />} />
            <Route path="/program-kerja/research-development" element={<ResearchDevelopment />} />
            <Route path="/program-kerja/community-empowerment" element={<CommunityEmpowerment />} />
            <Route path="/program-kerja/ecological-conflict-resolution" element={<EcologicalConflict />} />
            <Route path="/program-kerja/environmental-education" element={<EnvironmentalEducation />} />
            <Route path="/program-kerja/riau-socio-eco" element={<RiauSocioEco />} />
            {/* Insight */}
            <Route path="/insight-opini" element={<InsightOpini />} />
            {/* Publikasi & Riset */}
            <Route path="/publikasi-riset" element={<PublikasiRiset />} />
            <Route path="/publikasi-riset/artikel-ilmiah" element={<ArtikelIlmiah />} />
            <Route path="/publikasi-riset/policy-brief" element={<PolicyBrief />} />
            <Route path="/publikasi-riset/laporan-penelitian" element={<LaporanPenelitian />} />
            <Route path="/publikasi-riset/buku" element={<Buku />} />
            <Route path="/publikasi-riset/infografis-data" element={<InfografisData />} />
            {/* Kegiatan */}
            <Route path="/kegiatan" element={<Kegiatan />} />
            {/* Dampak Kami */}
            <Route path="/dampak-kami" element={<Dampak />} />
            {/* Mitra & Kolaborasi Kami */}
            <Route path="/mitra-kolaborasi" element={<Mitra />} />

            {/* Opsional: Route untuk 404 jika user mengetik alamat asal-asalan */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}