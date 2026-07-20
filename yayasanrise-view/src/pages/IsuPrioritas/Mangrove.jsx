import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Mangrove = () => {
    const { t } = useTranslation();
    const fokusMangrove = [
        "restorasi",
        "pemetaan",
        "penguatan",
        "integrasi",
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

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">
                        {t('mangrove.title')}
                    </h1>

                    {/* Description */}
                    <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
                        {t('mangrove.description')}
                    </p>

                    {/* Card */}
                    <div className="rise-card space-y-5 border-emerald-600/40">

                        <span className="rise-chip">
                            {t('mangrove.fokusProgram.chip')}
                        </span>

                        <h2 className="text-2xl font-serif text-gray-800 -mt-2">
                            {t('mangrove.fokusProgram.title')}
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {t('mangrove.fokusProgram.description')}
                        </p>

                        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                            {fokusMangrove.map((f) => (
                                <li key={f} className="flex gap-2">
                                    <span className="text-rise-green">▸</span>
                                    {t(`mangrove.fokusProgram.list.${f}`)}
                                </li>
                            ))}
                        </ul>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Mangrove;
