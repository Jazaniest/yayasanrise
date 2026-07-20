import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

const LEAF_LEFT_URL = "/assets/profil-leaf-kiri.png";
const LEAF_RIGHT_URL = "/assets/profil-leaf-kanan.png";

const Profil = () => {
    const { t } = useTranslation();
    return (
        <div className="relative min-h-screen w-full font-sans bg-slate-50">
            <Background />
            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
                    <div className="w-12 shrink-0">
                        {/* Tambahkan link ke home jika perlu */}
                    </div>
                    <Navbar />
                    <div className="hidden md:block w-12" />
                </header>
                <main className="relative z-0 flex flex-col items-center py-12 px-6">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
                        {t("profil.title")}
                    </h1>

                    {/* Content Container with Green Border */}
                    <div className="relative w-full max-w-6xl border-[3px] border-[#4A7C44] rounded-[40px] md:rounded-[60px] p-10 md:p-16 min-h-125 bg-white/60 backdrop-blur-xs">
                        {/* Dummy Profile Text */}
                        <div className="text-gray-700 leading-relaxed text-justify space-y-6 text-lg">
                            <p dangerouslySetInnerHTML={{ __html: t("profil.description.paragraph1") }} />
                            <p dangerouslySetInnerHTML={{ __html: t("profil.description.paragraph2") }} />
                            <p dangerouslySetInnerHTML={{ __html: t("profil.description.paragraph3") }} />
                        </div>

                        {/* Decorative Leaf Assets */}
                        <div className="absolute bottom-6 left-6 w-16 md:w-24">
                            <img
                                src={LEAF_LEFT_URL}
                                alt="Dekorasi Daun Kiri"
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="absolute bottom-6 right-6 w-16 md:w-24">
                            <img
                                src={LEAF_RIGHT_URL}
                                alt="Dekorasi Daun Kanan"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profil;
