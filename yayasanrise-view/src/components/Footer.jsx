import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

            {/* Kiri: Identitas */}
            <div>
            <h2 className="text-lg font-serif text-gray-800">{t('footer.identity.title')}</h2>
            <p className="text-sm text-gray-500 mt-2">
                {t('footer.identity.location')}
            </p>
            <a href="mailto:contact@yayasanrise.or.id" className="text-sm text-green-800 hover:underline block">
                contact@yayasanrise.or.id
            </a>
            <Link to="/mitra-kolaborasi#kontak" className="text-sm text-gray-500 hover:text-green-800 mt-1 inline-block">
                {t('footer.identity.contactPage')}
            </Link>
            </div>

            {/* Kanan: Dukungan */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-1">
                {t('footer.support.title')}
            </span>
            <nav className="flex flex-wrap gap-4 md:gap-6">
                {[
                  { label: t('footer.support.links.donate'), to: '/mitra-kolaborasi#donasi' },
                  { label: t('footer.support.links.collaborate'), to: '/mitra-kolaborasi#kolaborasi' },
                  { label: t('footer.support.links.sponsorship'), to: '/mitra-kolaborasi#sponsorship' },
                ].map((item) => (
                <Link
                    key={item.label}
                    to={item.to}
                    className="text-sm text-gray-700 hover:text-green-800 transition-colors"
                >
                    {item.label}
                </Link>
                ))}
            </nav>
            </div>
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-100 text-left md:text-center text-xs text-gray-400">
            {t('footer.copyright', { year })}
        </div>
        </footer>
    );
};

export default Footer;