import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { useTranslation } from "react-i18next";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const EkonomiHijau = () => {
  const { t } = useTranslation();
  const fokus = t('ekonomiHijau.fokus', { returnObjects: true }) || [];

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
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">{t('ekonomiHijau.title')}</h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
            {t('ekonomiHijau.description')}
          </p>
          <div className="rise-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fokus.map((f) => (
                <div key={f} className="p-4 rounded-xl bg-linear-to-br from-emerald-50 to-white border border-emerald-100 text-gray-700 text-sm">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EkonomiHijau;
