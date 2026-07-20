import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const Dampak = () => {
  const { t } = useTranslation();
  const statistik = [
    { angka: "15+", label: t('dampak.stats.desa'), icon: "🏘️" },
    { angka: "20+", label: t('dampak.stats.edukasi'), icon: "📚" },
    { angka: "10+", label: t('dampak.stats.publikasi'), icon: "📄" },
    { angka: "5", label: t('dampak.stats.program'), icon: "🌱" },
  ];
  const cerita = [
    t('dampak.cerita.list.1'),
    t('dampak.cerita.list.2'),
    t('dampak.cerita.list.3'),
  ];

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
        <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-3">{t('dampak.title')}</h1>
          <p className="text-center text-gray-600 mb-12 font-light max-w-xl">
            {t('dampak.subtitle')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-12">
            {statistik.map((s) => (
              <div key={s.label} className="rise-stat">
                <span className="text-2xl mb-2" aria-hidden>{s.icon}</span>
                <span className="text-3xl font-serif text-rise-green font-light">{s.angka}</span>
                <span className="text-xs text-gray-600 text-center mt-2 leading-snug">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="rise-card w-full">
            <h2 className="rise-section-title">{t('dampak.cerita.title')}</h2>
            <ul className="space-y-4">
              {cerita.map((c) => (
                <li key={c} className="flex gap-3 text-gray-700 text-sm md:text-base border-l-2 border-rise-green pl-4">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-500 italic">
              {t('dampak.cerita.note')}
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link to="/kegiatan" className="rise-chip hover:bg-emerald-100">{t('dampak.lihatKegiatan')} →</Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dampak;
