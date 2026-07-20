import { useTranslation } from 'react-i18next';

const PDF_FILE_URL = '/assets/sk-rise.pdf'; // Path ke file PDF dummy kamu

const Legalitas = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center py-16 px-6 grow">

      <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
        {t('legalitas.title')}
      </h1>

      {/* PDF Viewer Container */}
      <div className="w-full max-w-5xl bg-white/40 backdrop-blur-sm border-2 border-green-800/30 rounded-xl overflow-hidden shadow-2xl h-200 mb-10">
        <iframe
          src={`${PDF_FILE_URL}#toolbar=0`}
          title={t('legalitas.pdfTitle')}
          className="w-full h-full border-none"
        >
          <p>{t('legalitas.noPdfSupport')}
            <a href={PDF_FILE_URL} className="text-green-700 underline"> {t('legalitas.downloadLink')}</a>
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
          {t('legalitas.downloadButton')}
        </a>
      </div>

    </main>
  );
};

export default Legalitas;
