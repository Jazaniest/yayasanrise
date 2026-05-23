import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';
const PDF_FILE_URL = '/assets/sk-rise.pdf'; // Path ke file PDF dummy kamu

const Legalitas = () => {
  return (
    <div className="relative min-h-screen w-full font-sans bg-white overflow-x-hidden">

      {/* Background Layer (Scrollable & Opacity) */}
      <Background />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Header */}
        <header className="relative z-100 overflow-visible flex items-center justify-between px-10 py-4 bg-white/60">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center py-16 px-6 grow">

          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
            Legalitas
          </h1>

          {/* PDF Viewer Container */}
          <div className="w-full max-w-5xl bg-white/40 backdrop-blur-sm border-2 border-green-800/30 rounded-xl overflow-hidden shadow-2xl h-200 mb-10">
            <iframe
              src={`${PDF_FILE_URL}#toolbar=0`}
              title="Dokumen Legalitas Yayasan RISE"
              className="w-full h-full border-none"
            >
              <p>Browser Anda tidak mendukung tampilan PDF.
                <a href={PDF_FILE_URL} className="text-green-700 underline"> Klik di sini untuk mengunduh.</a>
              </p>
            </iframe>
          </div>

          {/* Tombol Download Tambahan (Opsional) */}
          <div className="mb-20">
            <a
              href={PDF_FILE_URL}
              download
              className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-900 transition-all shadow-lg flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Unduh Dokumen Legalitas
            </a>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Legalitas;