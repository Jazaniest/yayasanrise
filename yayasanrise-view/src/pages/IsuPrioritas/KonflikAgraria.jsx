import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const KonflikAgraria = () => {
  const fokus = [
    "Advokasi hak atas tanah dan wilayah adat",
    "Pendampingan masyarakat terdampak konflik lahan",
    "Fasilitasi dialog multipihak",
    "Kajian konflik sumber daya alam dan tata ruang",
  ];

  return (
    <div className="relative min-h-screen w-full font-sans bg-slate-50">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
          <div className="w-12 shrink-0">
            <Link to="/home">
              <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
            </Link>
          </div>
          <Navbar />
          <div className="hidden md:block w-12" /> {/* This is the placeholder for centering */}
        </header>
        <main className="rise-main">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Konflik Agraria</h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
            Konflik agraria dan tata kelola lahan menjadi isu krusial di Riau. RISE mendukung
            penyelesaian berkeadilan melalui pendampingan, riset, dan dialog berbasis hak masyarakat.
          </p>
          <div className="rise-card space-y-4">
            {fokus.map((f) => (
              <p key={f} className="p-3 rounded-lg bg-emerald-50/60 text-gray-700 text-sm border-l-4 border-rise-green">{f}</p>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default KonflikAgraria;
