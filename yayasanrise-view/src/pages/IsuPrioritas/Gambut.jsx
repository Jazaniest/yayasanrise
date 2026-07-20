import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Gambut = () => {
  const { t } = useTranslation();
  const fokusGambut = [
    "Restorasi dan rewetting lahan gambut",
    "Tata kelola berkelanjutan ekosistem gambut",
    "Pencegahan kebakaran lahan gambut",
    "Pendampingan masyarakat sekitar gambut",
  ];
  const fokusMangrove = [
    "Restorasi dan rehabilitasi mangrove",
    "Pemetaan tutupan mangrove Riau",
    "Penguatan mata pencaharian berbasis mangrove",
    "Integrasi data mangrove dalam pusat data RISE",
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
        <main className="rise-main max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">{t('isuPrioritas.gambut.title')}</h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
            {t('isuPrioritas.gambut.description')}
          </p>
          <div className="rise-card space-y-5 mb-8">
            <h2 className="rise-section-title">{t('isuPrioritas.gambut.fokusGambutTitle')}</h2>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              {fokusGambut.map((f, i) => (
                <li key={f} className="flex gap-2"><span className="text-rise-green">▸</span>{t(`isuPrioritas.gambut.fokusGambut.${i}`)}</li>
              ))}
            </ul>
          </div>

          <section id="mangrove" className="scroll-mt-24 w-full">
            <div className="rise-card space-y-5 border-emerald-600/40">
              <span className="rise-chip">{t('isuPrioritas.gambut.isuTerkait')}</span>
              <h2 className="text-2xl font-serif text-gray-800 -mt-2">{t('isuPrioritas.gambut.mangroveTitle')}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('isuPrioritas.gambut.mangroveDescription')}
              </p>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                {fokusMangrove.map((f, i) => (
                  <li key={f} className="flex gap-2"><span className="text-rise-green">▸</span>{t(`isuPrioritas.gambut.fokusMangrove.${i}`)}</li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Gambut;
