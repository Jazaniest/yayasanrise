import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

// Final "smart" Navbar. All logic is self-contained here.

const NavItem = ({ item, isHome, onLinkClick }) => {
  const { t } = useTranslation();
  const hasSubMenu = item.subMenu && item.subMenu.length > 0;
  // For desktop, main menu items with submenus are not clickable links
  const clickHandler = hasSubMenu ? (e) => e.preventDefault() : onLinkClick;

  return (
    <div className="relative group">
      <Link to={item.path} onClick={clickHandler} className={`block py-2 px-1 transition-colors duration-300 ${isHome ? "hover:text-green-300 drop-shadow-md" : "hover:text-green-600"}`}>
        {t(item.name)}
      </Link>
      {hasSubMenu && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className={`rounded-xl p-2 shadow-2xl backdrop-blur-xl border ${isHome ? "bg-black/20 border-white/20" : "bg-white/90 border-gray-100"}`}>
            {item.subMenu.map((sub) => (
              <Link key={sub.name} to={sub.path} onClick={onLinkClick} className={`block px-4 py-2 text-xs font-normal rounded-lg transition-colors whitespace-nowrap ${isHome ? "text-white/90 hover:bg-white/10" : "text-gray-700 hover:bg-emerald-50"}`}>
                {t(sub.name)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavItem = ({ item, onLinkClick }) => {
  const { t } = useTranslation();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasSubMenu = item.subMenu && item.subMenu.length > 0;

  const handleToggle = (e) => {
    if (hasSubMenu) {
      e.preventDefault();
      setIsSubMenuOpen(!isSubMenuOpen);
    } else {
      onLinkClick();
    }
  };

  return (
    <div className="border-b border-gray-100">
      <Link to={item.path} onClick={handleToggle} className="flex justify-between items-center w-full py-4 px-6 text-gray-800 font-medium">
        <span>{t(item.name)}</span>
        {hasSubMenu && <svg className={`w-4 h-4 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
      </Link>
      {hasSubMenu && isSubMenuOpen && (
        <div className="pl-8 pb-2 bg-slate-50">
          {item.subMenu.map(sub => (
            <Link key={sub.name} to={sub.path} onClick={onLinkClick} className="block py-2 text-sm text-gray-600 hover:text-rise-green">
              {t(sub.name)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = location.pathname === "/home" || location.pathname === "/";

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = [
    { name: "beranda", path: "/home" },
    {
      name: "tentangKami", path: "/tentang-kami",
      subMenu: [
        { name: "profil", path: "/tentang-kami/profil" },
        { name: "visiMisi", path: "/tentang-kami/visi-misi" },
        { name: "nilaiPendekatan", path: "/tentang-kami/nilai-pendekatan" },
        { name: "timPakar", path: "/tentang-kami/tim-pakar" },
        { name: "strukturOrganisasi", path: "/tentang-kami/struktur" },
        { name: "legalitas", path: "/tentang-kami/legalitas" },
      ],
    },
    {
      name: "isuPrioritas", path: "/isu-prioritas",
      subMenu: [
        { name: "perubahanIklim", path: "/isu-prioritas/perubahan-iklim" },
        { name: "gambut", path: "/isu-prioritas/gambut" },
        { name: "mangrove", path: "/isu-prioritas/mangrove" },
        { name: "energi", path: "/isu-prioritas/energi" },
        { name: "konflikAgraria", path: "/isu-prioritas/konflik-agraria" },
        { name: "sampah", path: "/isu-prioritas/sampah" },
        { name: "ekonomiHijau", path: "/isu-prioritas/ekonomi-hijau" },
        { name: "ketahananPangan", path: "/isu-prioritas/ketahanan-pangan" },
      ],
    },
    {
      name: "programKerja", path: "/program-kerja",
      subMenu: [
        { name: "risetPengembangan", path: "/program-kerja/research-development" },
        { name: "pemberdayaanKomunitas", path: "/program-kerja/community-empowerment" },
        { name: "resolusiKonflikEkologis", path: "/program-kerja/ecological-conflict-resolution" },
        { name: "pendidikanLingkungan", path: "/program-kerja/environmental-education" },
        { name: "pusatDataSosioEkologis", path: "/program-kerja/riau-socio-eco" },
      ],
    },
    { name: "insight", path: "/insight" },
    {
      name: "publikasi", path: "/publikasi-riset",
      subMenu: [
        { name: "artikelIlmiah", path: "/publikasi-riset/artikel-ilmiah" },
        { name: "policyBrief", path: "/publikasi-riset/policy-brief" },
        { name: "laporanPenelitian", path: "/publikasi-riset/laporan-penelitian" },
        { name: "bukuModul", path: "/publikasi-riset/buku" },
        { name: "infografis", path: "/publikasi-riset/infografis" },
      ],
    },
    { name: "kegiatan", path: "/kegiatan" },
    { name: "dampak", path: "/dampak" },
    { name: "mitra", path: "/mitra" },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center flex-1 items-center space-x-4">
        <nav className={`flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm font-medium ${isHome ? 'text-white' : 'text-gray-700'}`}>
          {menuItems.map((item) => (
            <NavItem key={item.name} item={item} isHome={isHome} onLinkClick={() => setIsOpen(false)} />
          ))}
        </nav>
        <LanguageSwitcher />
      </div>

      {/* Burger Button */}
      {createPortal(
        <div
          className="md:hidden fixed z-10000"
          style={{ top: '1.1rem', right: '1.5rem' }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isHome && !isOpen ? 'text-white' : 'text-gray-800'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>,
        document.body
      )}

      {/* ✅ Mobile Menu Panel — di-portal ke document.body, bebas dari stacking context header */}
      {createPortal(
        <div className={`md:hidden fixed inset-0 bg-white z-9999 transition-transform transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="pt-20 h-full overflow-y-auto">
            {menuItems.map(item => (
              <MobileNavItem key={item.name} item={item} onLinkClick={() => setIsOpen(false)} />
            ))}
          </div>
        </div>,
        document.body // ← render langsung ke body, keluar dari stacking context manapun
      )}
    </>
  );
};

export default Navbar;