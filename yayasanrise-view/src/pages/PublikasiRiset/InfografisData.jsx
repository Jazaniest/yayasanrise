import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getInfografis } from "../../services/publikasiService";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const InfografisData = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInfografis();
        setItems(data);
      } catch (err) {
        setError(t('infografisData.failedToLoad') + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [t]);

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
          <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">{t('infografisData.title')}</h1>
          <p className="text-center text-gray-600 text-sm mb-8 font-light">
            {t('infografisData.subtitle')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {loading && <p className="text-center text-gray-500 col-span-full">{t('infografisData.loading')}</p>}
            {error && <p className="text-center text-red-500 col-span-full">{error}</p>}
            {!loading && !error && items.map((item) => (
              <a
                key={item.id}
                href={item.image_url ? `http://localhost:3001${item.image_url}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group aspect-4/3 rounded-xl bg-cover bg-center flex flex-col justify-end p-5 text-white shadow-lg"
                style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(http://localhost:3001${item.image_url})` }}
              >
                {!item.image_url && (
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-100 to-emerald-50 rounded-xl"></div>
                )}
                <h3 className="font-serif text-lg relative z-10">{item.judul}</h3>
                <p className="text-xs relative z-10 opacity-80">{item.deskripsi}</p>
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InfografisData;
