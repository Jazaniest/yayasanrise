import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";

// --- Assets Configuration ---
const LOGO_URL = '/assets/logo.png';
const BG_URL = '/assets/forest-bg.jpg';

const IsuPrioritas = () => {
    // Data array yang disesuaikan dengan gambar fokus isu prioritas
    const subMenus = [
        {
            title: "Perubahan Iklim",
            desc: "Langkah adaptasi dan mitigasi krisis iklim global melalui aksi nyata di tingkat lokal.",
            path: "/isu-prioritas/perubahan-iklim"
        },
        {
            title: "Gambut",
            desc: "Perlindungan, restorasi, dan tata kelola berkelanjutan ekosistem lahan gambut Indonesia.",
            path: "/isu-prioritas/gambut"
        },
        {
            title: "Energi",
            desc: "Mendorong transisi energi bersih, berkeadilan, dan terbarukan bagi masyarakat.",
            path: "/isu-prioritas/energi"
        },
        {
            title: "Konflik Agraria",
            desc: "Advokasi hak atas tanah, resolusi konflik tata ruang, dan perlindungan masyarakat adat.",
            path: "/isu-prioritas/konflik-agraria"
        },
        {
            title: "Sampah",
            desc: "Manajemen limbah komunitas dan kampanye pengurangan sampah plastik berbasis sirkular ekonomi.",
            path: "/isu-prioritas/sampah"
        },
        {
            title: "Ekonomi Hijau",
            desc: "Pengembangan model ekonomi kreatif yang ramah lingkungan dan menyejahterakan warga.",
            path: "/isu-prioritas/ekonomi-hijau"
        },
        {
            title: "Ketahanan Pangan",
            desc: "Penguatan kedaulatan pangan lokal melalui praktik pertanian ekologis mandiri.",
            path: "/isu-prioritas/ketahanan-pangan"
        }
    ];

    return (
        <div className="relative min-h-screen bg-slate-50 font-sans overflow-x-hidden">
            {/* Background Layer */}
            <div
                className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover opacity-15 pointer-events-none"
                style={{
                    backgroundImage: `url(${BG_URL})`,
                    backgroundAttachment: 'scroll'
                }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col min-h-screen">

                {/* Header / Navbar */}
                <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-xs border-b border-gray-100">
                    <div className="w-12">
                        <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
                    </div>
                    <Navbar />
                    <div className="hidden md:block w-12 opacity-0">RISE</div>
                </header>

                {/* Main Content */}
                <main className="grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center">

                    {/* Title Utama */}
                    <div className="text-center max-w-2xl mb-16 space-y-3">
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
                            Isu Prioritas
                        </h1>
                        <div className="w-16 h-1 bg-[#4A7C44] mx-auto rounded-full" />
                        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed pt-2">
                            Gerakan kolaboratif untuk mengintegrasikan pemberdayaan sosial masyarakat dan pelestarian ekosistem lingkungan di Indonesia.
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
                                        Isu {index + 1 < 10 ? `0${index + 1}` : index + 1}
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
                                    <span className="text-xs font-medium mr-1.5">Pelajari Selengkapnya</span>
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