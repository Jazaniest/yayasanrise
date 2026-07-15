import { useState, useEffect } from "react";
import { getBuku } from "../../services/publikasiService";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const Buku = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBuku();
        setItems(data);
      } catch (err) {
        setError("Gagal memuat data buku." + err.message);
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
        <main className="rise-main max-w-4xl">
          <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">Buku & Modul</h1>
          <p className="text-center text-gray-600 text-sm mb-8 font-light">
            Buku panduan dan modul pelatihan untuk edukasi lingkungan dan pemberdayaan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {loading && <p className="text-center text-gray-500 col-span-full">Memuat...</p>}
            {error && <p className="text-center text-red-500 col-span-full">{error}</p>}
            {!loading && !error && items.map((item) => (
              <a
                key={item.id}
                href={item.whatsapp_number ? `https://wa.me/${item.whatsapp_number}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all ${item.whatsapp_number ? 'hover:shadow-lg hover:border-rise-green/30' : 'cursor-default'}`}
              >
                <div
                  className="aspect-4/3 bg-cover bg-center"
                  style={{ backgroundImage: `url(http://localhost:3001${item.cover_url})` }}
                >
                  {!item.cover_url && (
                    <div className="w-full h-full bg-linear-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                      <span className="text-emerald-700/40 text-4xl font-serif">📚</span>
                    </div>
                  )}
                </div>
                <div className="p-4 grow flex flex-col">
                  <h3 className="font-serif text-gray-800 text-sm mb-1 group-hover:text-rise-green transition-colors grow">
                    {item.judul}
                  </h3>
                  <span className="text-xs text-gray-400">{item.penulis} &middot; {item.tahun}</span>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Buku;
