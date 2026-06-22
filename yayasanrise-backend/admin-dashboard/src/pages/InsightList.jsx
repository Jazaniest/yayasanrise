import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

const COLUMNS = [
  { key: 'id', label: 'ID' },
  { key: 'judul', label: 'Judul' },
  { key: 'penulis', label: 'Penulis' },
  { key: 'kategori', label: 'Kategori' },
  { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
];

export default function InsightList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    setLoading(true);
    api.get('/insight').then(res => setData(res.data.data)).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id) => {
    if (!confirm('Hapus insight ini?')) return;
    await api.delete(`/insight/${id}`);
    fetchData();
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    await api.put(`/insight/${id}`, { status: newStatus });
    fetchData();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Insight & Opini</h2>
        <button onClick={() => navigate('/insight/new')} className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          + Tambah Insight
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <DataTable
          columns={COLUMNS}
          data={data}
          onEdit={(id) => navigate(`/insight/${id}`)}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      )}
    </div>
  );
}
