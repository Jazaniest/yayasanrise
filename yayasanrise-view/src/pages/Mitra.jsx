import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getMitra } from "../services/mitraService";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const Mitra = () => {
  const { t } = useTranslation();
  const [mitra, setMitra] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMitra();
        setMitra(data);
      } catch (err) {
        setError(t('mitra.error.loadFailed') + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [t]);

  const groupByType = (data) => {
    return data.reduce((acc, curr) => {
      (acc[curr.tipe] = acc[curr.tipe] || []).push(curr);
      return acc;
    }, {});
  };

  const groupedMitra = groupByType(mitra);

  const renderGroup = (title, items) => (
    <section className="w-full mb-12">
      <h2 className="text-2xl font-serif text-gray-700 mb-6 text-center capitalize">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
        {items.map((m) => (
          <a
            key={m.id}
            href={m.website || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group aspect-square rounded-xl bg-white border border-gray-100 flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 hover:border-rise-green/40 transition-all shadow-sm hover:shadow-lg"
          >
            <img src={`http://localhost:3001${m.logo_url}`} alt={m.nama} className="max-h-16 w-auto" />
            <p className="text-xs font-medium text-gray-600 text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">{m.nama}</p>
          </a>
        ))}
      </div>
    </section>
  );

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
        <main className="rise-main max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-3">
            {t('mitra.title')}
          </h1>
          <p className="text-center text-gray-600 mb-16 font-light max-w-xl">
            {t('mitra.subtitle')}
          </p>

          {loading && <p className="text-center text-gray-500 col-span-full">{t('mitra.loading')}</p>}
          {error && <p className="text-center text-red-500 col-span-full">{error}</p>}

          {!loading && !error && (
            <>
              {groupedMitra['donatur'] && renderGroup(t('mitra.group.donors'), groupedMitra['donatur'])}
              {groupedMitra['kolaborator'] && renderGroup(t('mitra.group.collaborators'), groupedMitra['kolaborator'])}
              {groupedMitra['sponsor'] && renderGroup(t('mitra.group.sponsors'), groupedMitra['sponsor'])}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Mitra;
