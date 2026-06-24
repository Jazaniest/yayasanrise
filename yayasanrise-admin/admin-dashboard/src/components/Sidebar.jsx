import { NavLink } from 'react-router-dom';

const menuGroups = [
  {
    label: 'Umum',
    items: [
      { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    ],
  },
  {
    label: 'Publikasi & Riset',
    items: [
      { label: 'Artikel Ilmiah', path: '/publikasi/artikel-ilmiah', icon: '📄' },
      { label: 'Policy Brief', path: '/publikasi/policy-brief', icon: '📋' },
      { label: 'Laporan Penelitian', path: '/publikasi/laporan-penelitian', icon: '📑' },
      { label: 'Buku / Modul', path: '/publikasi/buku', icon: '📚' },
      { label: 'Infografis', path: '/publikasi/infografis', icon: '📊' },
    ],
  },
  {
    label: 'Konten',
    items: [
      { label: 'Kegiatan', path: '/kegiatan', icon: '📅' },
      { label: 'Tim Pakar', path: '/tim-pakar', icon: '👥' },
      { label: 'Insight & Opini', path: '/insight', icon: '✍️' },
      { label: 'Mitra', path: '/mitra', icon: '🤝' },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-lg font-bold text-emerald-800">Yayasan RISE</h2>
        <p className="text-xs text-gray-400 mt-0.5">Admin Panel</p>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-6">
        {menuGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`
                  }
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
