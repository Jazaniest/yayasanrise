import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { getInsights } from "../services/insightService";

const LOGO_URL = "/assets/logo.png";

const Insight = () => {
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInsights();
        setArtikel(data);
      } catch (err) {
        setError("Gagal memuat data insight & opini.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const truncate = (str, len) => {
    if (!str) return "";
    return str.length > len ? str.substring(0, len) + "..." : str;
  };

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-slate-50">
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-3">Insight & Opini</h1>
        <p className="text-center text-gray-600 mb-10 font-light text-sm max-w-lg">
          Wacana, analisis, dan opini ahli Yayasan RISE tentang isu sosial-ekologis terkini.
        </p>
        <div className="space-y-5 w-full">
          {loading && <p className="text-center text-gray-500">Memuat...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && artikel.map((a) => (
            <article key={a.id} className="rise-card p-6! rounded-2xl! hover:shadow-md transition-shadow">
              <span className="rise-chip text-[10px] mb-3 capitalize">{a.kategori}</span>
              <h2 className="text-lg font-serif text-gray-800 mb-2">{a.judul}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{truncate(a.konten, 200)}</p>
              <span className="text-xs text-gray-400">
                {a.penulis} &middot; {new Date(a.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
              </span>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-gray-500 text-center italic">
          Artikel lengkap akan dipublikasikan secara berkala. Kunjungi juga{" "}
          <Link to="/publikasi-riset" className="text-rise-green hover:underline">Publikasi & Riset</Link>.
        </p>
      </main>
    </div>
  );
};

export default Insight;
