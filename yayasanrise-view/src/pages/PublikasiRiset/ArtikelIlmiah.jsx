import { useState, useEffect } from "react";
import { getArtikelIlmiah } from "../../services/publikasiService";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const ArtikelIlmiah = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtikelIlmiah();
        setItems(data);
      } catch (err) {
        setError("Gagal memuat data artikel ilmiah." + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
        <main className="rise-main max-w-3xl">
          <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">Artikel Ilmiah</h1>
          <p className="text-center text-gray-600 text-sm mb-8 font-light">
            Publikasi ilmiah hasil penelitian lingkungan, sosial, dan kebijakan.
          </p>
          <div className="space-y-3 w-full">
            {loading && <p className="text-center text-gray-500">Memuat...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && items.map((item) => (
              <a
                key={item.id}
                href={item.link_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="rise-pub-row group"
              >
                <div>
                  <h3 className="font-medium text-gray-800 text-sm group-hover:text-rise-green">{item.judul}</h3>
                  <span className="text-xs text-gray-400">{item.penulis} &middot; {item.tahun}</span>
                </div>
                <span className="text-xs text-rise-green bg-emerald-50 px-2 py-1 rounded">Lihat</span>
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ArtikelIlmiah;
