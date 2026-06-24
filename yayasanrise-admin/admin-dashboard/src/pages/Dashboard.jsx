import { useState, useEffect } from 'react';
import api from '../api/client';

const LABEL_MAP = {
  artikel_ilmiah: 'Artikel Ilmiah',
  policy_brief: 'Policy Brief',
  laporan_penelitian: 'Laporan Penelitian',
  buku: 'Buku / Modul',
  infografis: 'Infografis',
  kegiatan: 'Kegiatan',
  tim_pakar: 'Tim Pakar',
  insight: 'Insight & Opini',
  mitra: 'Mitra',
};

const ICON_MAP = {
  artikel_ilmiah: '📄', policy_brief: '📋', laporan_penelitian: '📑',
  buku: '📚', infografis: '📊', kegiatan: '📅',
  tim_pakar: '👥', insight: '✍️', mitra: '🤝',
};

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get('/dashboard/stats'),
      api.get('/dashboard/recent'),
    ]).then(([statsRes, recentRes]) => {
      setStats(statsRes.data.data);
      setRecent(recentRes.data.data);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {stats && Object.entries(stats).map(([key, count]) => (
          <div key={key} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <span className="text-2xl">{ICON_MAP[key] || '📁'}</span>
            <p className="text-2xl font-bold text-gray-800 mt-2">{count}</p>
            <p className="text-sm text-gray-500">{LABEL_MAP[key] || key}</p>
          </div>
        ))}
      </div>

      {/* Recent Items */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-700">Aktivitas Terbaru</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {recent.length === 0 && (
            <p className="p-5 text-gray-400 text-sm">Belum ada data.</p>
          )}
          {recent.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4">
              <span className="text-lg">{ICON_MAP[item.type] || '📁'}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-700 truncate">{item.title}</p>
                <p className="text-xs text-gray-400">
                  {LABEL_MAP[item.type] || item.type} · {new Date(item.created_at).toLocaleDateString('id-ID')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
