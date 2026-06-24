import { useState, useEffect } from "react";
import { getAllKegiatan } from "../services/kegiatanService";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const Kegiatan = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const data = await getAllKegiatan();
        setKegiatan(data);
      } catch (err) {
        setError("Gagal memuat data kegiatan.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="w-12 shrink-0">
          <Link to="/home">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </Link>
        </div>
        <Navbar />
        <div className="hidden md:block w-12" />
      </header>
      <div className="relative grow">
        <Background />
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-3 text-center">Kegiatan</h1>
          <p className="text-gray-600 text-center mb-12 font-light max-w-lg text-sm">
            Dokumentasi kegiatan lapangan, pelatihan, diskusi, dan kampanye Yayasan RISE.
          </p>

          {loading && <p className="text-gray-500">Memuat data...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {kegiatan.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-rise-green/30 transition-all"
                >
                  <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(http://localhost:3001${item.foto_url})` }}>
                    {!item.foto_url && (
                      <div className="w-full h-full bg-linear-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                        <span className="text-emerald-700/40 text-4xl font-serif">🌿</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-gray-800 text-sm mb-1 group-hover:text-rise-green transition-colors">
                      {item.judul}
                    </h3>
                    <span className="text-xs text-gray-400">{new Date(item.tanggal).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <p className="text-xs text-gray-500 mt-1">{item.lokasi}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Kegiatan;
