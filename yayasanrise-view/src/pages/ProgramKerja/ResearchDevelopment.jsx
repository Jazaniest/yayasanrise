import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ResearchDevelopment = () => {
  const { t } = useTranslation();
  const fokus = [
    t("researchDevelopment.focusItems.0"),
    t("researchDevelopment.focusItems.1"),
    t("researchDevelopment.focusItems.2"),
    t("researchDevelopment.focusItems.3"),
    t("researchDevelopment.focusItems.4"),
    t("researchDevelopment.focusItems.5"),
    t("researchDevelopment.focusItems.6"),
    t("researchDevelopment.focusItems.7"),
  ];

  return (
    <div className="relative min-h-screen w-full font-sans bg-slate-50">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
          <div className="w-12 flex-shrink-0">
            <Link to="/home">
              <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
            </Link>
          </div>
          <Navbar />
          <div className="hidden md:block w-12" /> {/* This is the placeholder for centering */}
        </header>
        <main className="rise-main">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">
            {t("researchDevelopment.title")}
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8 leading-relaxed font-light">
            {t("researchDevelopment.description")}
          </p>

          <div className="rise-card space-y-6">
            <h2 className="rise-section-title">{t("researchDevelopment.focusTitle")}</h2>
            <div className="flex flex-wrap gap-2">
              {fokus.map((item) => (
                <span key={item} className="rise-chip">{item}</span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
              {t("researchDevelopment.focusDescription")}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResearchDevelopment;
