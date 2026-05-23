import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";
const LEAF_LEFT_URL = "/assets/profil-leaf-kiri.png";
const LEAF_RIGHT_URL = "/assets/profil-leaf-kanan.png";

const Profil = () => {
    return (
        // 1. TAMBAHKAN 'relative' DI SINI agar absolute di dalamnya bekerja dengan benar
        <div className="relative min-h-screen font-sans overflow-x-hidden">

            {/* Background Layer (Scrollable & Opacity) */}
            <Background />

            {/* 2. UBAH class Header: Tambahkan 'relative z-10' dan ganti bg menjadi semi-transparan (opsional) agar background forest tembus */}
            <header className="relative z-100 overflow-visible flex items-center justify-between px-10 py-4 bg-rise-mint/90 backdrop-blur-sm shadow-sm">
                <div className="w-12">
                    <img
                        src={LOGO_URL}
                        alt="Logo"
                        className="w-full h-auto"
                    />
                </div>

                <Navbar />

                {/* Spacer balance */}
                <div className="w-12 italic opacity-0">RISE</div>
            </header>

            {/* 3. TAMBAHKAN 'relative z-10' pada konten utama agar teks berada di atas gambar background */}
            <main className="relative z-0 flex flex-col items-center py-12 px-6">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
                    Profil
                </h1>

                {/* Content Container with Green Border */}
                {/* Tambahkan bg-white/80 atau semacamnya agar teks tetap terbaca jelas di atas background */}
                <div className="relative w-full max-w-6xl border-[3px] border-[#4A7C44] rounded-[40px] md:rounded-[60px] p-10 md:p-16 min-h-125 bg-white/60 backdrop-blur-xs">
                    {/* Dummy Profile Text */}
                    <div className="text-gray-700 leading-relaxed text-justify space-y-6 text-lg">
                        <p>
                            <strong>Yayasan RISE (Sosial Ekologis Indonesia)</strong> adalah
                            sebuah lembaga non-profit yang berfokus pada integrasi antara
                            pemberdayaan sosial masyarakat dan pelestarian ekosistem
                            lingkungan di Indonesia. Kami percaya bahwa kesejahteraan manusia
                            tidak dapat dipisahkan dari kesehatan alam sekitarnya.
                        </p>

                        <p>
                            Didirikan dengan semangat kolaborasi, kami menjalankan berbagai
                            program mulai dari edukasi lingkungan, pengembangan ekonomi
                            kreatif berbasis sumber daya alam berkelanjutan, hingga advokasi
                            kebijakan ekologis. Melalui pendekatan yang holistik, RISE
                            berkomitmen untuk menjadi jembatan bagi terciptanya harmoni antara
                            kemajuan sosial dan keberlanjutan bumi.
                        </p>

                        <p>
                            Fokus utama kami meliputi restorasi lahan kritis, manajemen limbah
                            komunitas, dan pendampingan masyarakat adat dalam menjaga
                            kearifan lokal yang mendukung kelestarian alam.
                        </p>
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
    );
};

export default Profil;