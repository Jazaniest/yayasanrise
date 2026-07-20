import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RiauSocioEco = () => {
  const { t } = useTranslation();
  const dataEkologis = t("riauSocioEco.ecologicalData.items", { returnObjects: true });
  const dataSosial = t("riauSocioEco.socialData.items", { returnObjects: true });
  const dataEnergi = t("riauSocioEco.energyClimate.items", { returnObjects: true });
  const output = t("riauSocioEco.output.items", { returnObjects: true });

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
        <main className="rise-main max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-4 leading-tight">
            {t("riauSocioEco.title")}
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mb-10 leading-relaxed font-light text-sm md:text-base">
            {t("riauSocioEco.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
            <div className="rise-card p-5! space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-rise-green">{t("riauSocioEco.ecologicalData.title")}</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {dataEkologis.map((d) => (
                  <li key={d} className="flex gap-2"><span className="text-rise-green">•</span>{d}</li>
                ))}
              </ul>
            </div>
            <div className="rise-card p-5! space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-rise-green">{t("riauSocioEco.socialData.title")}</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {dataSosial.map((d) => (
                  <li key={d} className="flex gap-2"><span className="text-rise-green">•</span>{d}</li>
                ))}
              </ul>
            </div>
            <div className="rise-card p-5! space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-rise-green">{t("riauSocioEco.energyClimate.title")}</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {dataEnergi.map((d) => (
                  <li key={d} className="flex gap-2"><span className="text-rise-green">•</span>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rise-card w-full">
            <h2 className="rise-section-title">{t("riauSocioEco.output.title")}</h2>
            <p className="text-xs text-gray-500 mb-4 italic">{t("riauSocioEco.output.subtitle")}</p>
            <div className="flex flex-wrap gap-2">
              {output.map((o) => (
                <span key={o} className="rise-chip">{o}</span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RiauSocioEco;
