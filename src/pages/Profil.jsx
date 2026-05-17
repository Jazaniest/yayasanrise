import Navbar from "../components/Navbar";

const LOGO_URL = '/assets/logo.png';
const LEAF_LEFT_URL = '/assets/profil-leaf-kiri.png';
const LEAF_RIGHT_URL = '/assets/profil-leaf-kanan.png';

const Profil = () => {
    return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Header / Navbar (Light Version) */}
      <header className="flex items-center justify-between px-10 py-4 bg-[#f1f8f1]">
        <div className="w-12">
          <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
        </div>
        <Navbar />
        <div className="w-12 italic opacity-0">RISE</div> {/* Spacer balance */}
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center py-12 px-6">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
          Profil
        </h1>

        {/* Content Container with Green Border */}
        <div className="relative w-full max-w-6xl border-[3px] border-[#4A7C44] rounded-[40px] md:rounded-[60px] p-10 md:p-16 min-h-125">
          
          {/* Dummy Profile Text */}
          <div className="text-gray-700 leading-relaxed text-justify space-y-6 text-lg">
            <p>
              <strong>Yayasan RISE (Sosial Ekologis Indonesia)</strong> adalah sebuah lembaga non-profit yang berfokus pada integrasi antara pemberdayaan sosial masyarakat dan pelestarian ekosistem lingkungan di Indonesia. Kami percaya bahwa kesejahteraan manusia tidak dapat dipisahkan dari kesehatan alam sekitarnya.
            </p>
            <p>
              Didirikan dengan semangat kolaborasi, kami menjalankan berbagai program mulai dari edukasi lingkungan, pengembangan ekonomi kreatif berbasis sumber daya alam berkelanjutan, hingga advokasi kebijakan ekologis. Melalui pendekatan yang holistik, RISE berkomitmen untuk menjadi jembatan bagi terciptanya harmoni antara kemajuan sosial dan keberlanjutan bumi.
            </p>
            <p>
              Fokus utama kami meliputi restorasi lahan kritis, manajemen limbah komunitas, dan pendampingan masyarakat adat dalam menjaga kearifan lokal yang mendukung kelestarian alam.
            </p>
          </div>

          {/* Decorative Leaf Assets */}
          <div className="absolute bottom-6 left-6 w-16 md:w-24">
            <img src={LEAF_LEFT_URL} alt="Dekorasi Daun Kiri" className="w-full h-auto" />
          </div>
          
          <div className="absolute bottom-6 right-6 w-16 md:w-24">
            <img src={LEAF_RIGHT_URL} alt="Dekorasi Daun Kanan" className="w-full h-auto" />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Profil;