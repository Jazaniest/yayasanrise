import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getInsights } from "../services/insightService";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
const LOGO_URL = "/assets/logo.png";

const Insight = () => {
  const { t } = useTranslation();
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInsights();
        setArtikel(data);
      } catch (err) {
        setError(t('insight.errorLoad') + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [t]);

  const truncate = (str, len) => {
    if (!str) return "";
    return str.length > len ? str.substring(0, len) + "..." : str;
  };

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
        <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-3">{t('insight.title')}</h1>
          <p className="text-center text-gray-600 mb-10 font-light text-sm max-w-lg">
            {t('insight.description')}
          </p>
          <div className="space-y-5 w-full">
            {loading && <p className="text-center text-gray-500">{t('insight.loading')}</p>}
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
            {t('insight.cta')}{" "}
            <Link to="/publikasi-riset" className="text-rise-green hover:underline">{t('insight.ctaLink')}</Link>.
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Insight;