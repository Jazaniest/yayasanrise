import Navbar from "../../components/Navbar";

const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";
// const LEAF_LEFT_URL = "/assets/profil-leaf-kiri.png";
// const LEAF_RIGHT_URL = "/assets/profil-leaf-kanan.png";

const Sampah = () => {
    return (
        // 1. TAMBAHKAN 'relative' DI SINI agar absolute di dalamnya bekerja dengan benar
        <div className="relative min-h-screen font-sans overflow-x-hidden">

            {/* Background Layer (Scrollable & Opacity) */}
            <div
                className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `url(${BG_URL})`,
                    backgroundAttachment: 'scroll'
                }}
            />

            {/* 2. UBAH class Header: Tambahkan 'relative z-10' dan ganti bg menjadi semi-transparan (opsional) agar background forest tembus */}
            <header className="relative z-100 flex items-center justify-between px-10 py-4 bg-[#f1f8f1]/90 backdrop-blur-sm shadow-sm">
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
            <main className="relative z-10 flex flex-col items-center py-12 px-6">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
                    Sampah
                </h1>

                {/* Content Container with Green Border */}
                {/* Tambahkan bg-white/80 atau semacamnya agar teks tetap terbaca jelas di atas background */}

            </main>
        </div>
    );
};

export default Sampah;