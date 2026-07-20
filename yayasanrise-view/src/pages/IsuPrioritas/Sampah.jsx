import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { useTranslation } from "react-i18next";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const Sampah = () => {
  const { t } = useTranslation();
  const fokus = [
    t("isuPrioritas.sampah.fokus.0"),
    t("isuPrioritas.sampah.fokus.1"),
    t("isuPrioritas.sampah.fokus.2"),
    t("isuPrioritas.sampah.fokus.3"),
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
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">{t("isuPrioritas.sampah.title")}</h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
            {t("isuPrioritas.sampah.description")}
          </p>
          <div className="rise-card">
            <h2 className="rise-section-title">{t("isuPrioritas.sampah.approach")}</h2>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              {fokus.map((f) => (
                <li key={f} className="flex gap-2"><span className="text-rise-green">♻</span>{f}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sampah;
