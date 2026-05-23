import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/mangrove-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const Mangrove = () => {
    const fokusMangrove = [
        "Restorasi dan rehabilitasi mangrove",
        "Pemetaan tutupan mangrove Riau",
        "Penguatan mata pencaharian berbasis mangrove",
        "Integrasi data mangrove dalam pusat data RISE",
    ];

    return (
        <div className="relative min-h-screen font-sans overflow-x-hidden">
        <Background />

        {/* Header */}
        <header className="rise-header">
            <div className="w-12">
            <img
                src={LOGO_URL}
                alt="Logo"
                className="w-full h-auto"
            />
            </div>

            <Navbar />

            <div className="w-12 opacity-0">RISE</div>
        </header>

        {/* Main */}
        <main className="rise-main max-w-4xl">
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">
            Mangrove
            </h1>

            {/* Description */}
            <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
            Mangrove merupakan ekosistem pesisir strategis yang berperan penting
            dalam mitigasi perubahan iklim, perlindungan garis pantai, serta
            keberlanjutan kehidupan sosial-ekonomi masyarakat pesisir. Di wilayah
            Riau, ekosistem mangrove menghadapi tekanan akibat alih fungsi lahan,
            abrasi, dan degradasi lingkungan sehingga membutuhkan pengelolaan dan
            restorasi yang berkelanjutan.
            </p>

            {/* Card */}
            <div className="rise-card space-y-5 border-emerald-600/40">
            
            <span className="rise-chip">
                Fokus Program
            </span>

            <h2 className="text-2xl font-serif text-gray-800 -mt-2">
                Ekosistem Mangrove
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
                RISE mengembangkan berbagai inisiatif riset, pendampingan, dan
                penguatan data sosial-ekologi terkait ekosistem mangrove sebagai
                bagian dari upaya membangun ketahanan lingkungan dan ekonomi
                masyarakat pesisir secara berkelanjutan.
            </p>

            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                {fokusMangrove.map((f) => (
                <li key={f} className="flex gap-2">
                    <span className="text-rise-green">▸</span>
                    {f}
                </li>
                ))}
            </ul>

            </div>
        </main>
        </div>
    );
};

export default Mangrove;
