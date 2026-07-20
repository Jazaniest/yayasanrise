import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LOGO_URL = "/assets/logo.png";

const IsuPrioritas = () => {
    const { t } = useTranslation();
    // Data array yang disesuaikan dengan gambar fokus isu prioritas
    const subMenus = [
        {
            title: t('isuPrioritas.subMenus.climateChange.title'),
            desc: t('isuPrioritas.subMenus.climateChange.desc'),
            path: "/isu-prioritas/perubahan-iklim"
        },
        {
            title: t('isuPrioritas.subMenus.peat.title'),
            desc: t('isuPrioritas.subMenus.peat.desc'),
            path: "/isu-prioritas/gambut"
        },
        {
            title: t('isuPrioritas.subMenus.mangrove.title'),
            desc: t('isuPrioritas.subMenus.mangrove.desc'),
            path: "/isu-prioritas/gambut#mangrove"
        },
        {
            title: t('isuPrioritas.subMenus.energy.title'),
            desc: t('isuPrioritas.subMenus.energy.desc'),
            path: "/isu-prioritas/energi"
        },
        {
            title: t('isuPrioritas.subMenus.agrarianConflict.title'),
            desc: t('isuPrioritas.subMenus.agrarianConflict.desc'),
            path: "/isu-prioritas/konflik-agraria"
        },
        {
            title: t('isuPrioritas.subMenus.waste.title'),
            desc: t('isuPrioritas.subMenus.waste.desc'),
            path: "/isu-prioritas/sampah"
        },
        {
            title: t('isuPrioritas.subMenus.greenEconomy.title'),
            desc: t('isuPrioritas.subMenus.greenEconomy.desc'),
            path: "/isu-prioritas/ekonomi-hijau"
        },
        {
            title: t('isuPrioritas.subMenus.foodSecurity.title'),
            desc: t('isuPrioritas.subMenus.foodSecurity.desc'),
            path: "/isu-prioritas/ketahanan-pangan"
        }
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
                <main className="rise-main relative z-0 grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center">

                    {/* Title Utama */}
                    <div className="text-center max-w-2xl mb-16 space-y-3">
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
                            {t('isuPrioritas.title')}
                        </h1>
                        <div className="w-16 h-1 bg-[#4A7C44] mx-auto rounded-full" />
                        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed pt-2">
                            {t('isuPrioritas.description')}
                        </p>
                    </div>

                    {/* Grid Sub-Menu Isu Prioritas */}
                    {/* Menggunakan grid responsif yang dinamis untuk menampung 7 item */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {subMenus.map((menu, index) => (
                            <Link
                                key={index}
                                to={menu.path}
                                className="group flex flex-col justify-between p-6 bg-white/80 backdrop-blur-xs border border-emerald-100/40 rounded-2xl hover:bg-white hover:border-[#4A7C44]/40 transition-all duration-350 shadow-xs hover:shadow-md hover:-translate-y-1 cursor-pointer"
                            >
                                <div>
                                    {/* Penomoran Estetik */}
                                    <span className="text-xs font-mono text-[#4A7C44] font-semibold bg-emerald-50 border border-emerald-100/60 px-3 py-1 rounded-full shadow-2xs">
                                        {t('isuPrioritas.issueNumber', { number: index + 1 < 10 ? `0${index + 1}` : index + 1 })}
                                    </span>

                                    {/* Judul Isu */}
                                    <h3 className="text-xl font-serif text-gray-800 mt-5 mb-2.5 group-hover:text-emerald-800 transition-colors">
                                        {menu.title}
                                    </h3>

                                    {/* Deskripsi Singkat */}
                                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                                        {menu.desc}
                                    </p>
                                </div>

                                {/* Indikator Tombol Aksi */}
                                <div className="flex items-center justify-end mt-6 text-[#4A7C44] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                                    <span className="text-xs font-medium mr-1.5">{t('isuPrioritas.seeDetails')}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                </main>
            </div>
        </div>
    );
};

export default IsuPrioritas;
