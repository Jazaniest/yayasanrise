import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/client';
import DataTable from '../../components/DataTable';
import StatusBadge from '../../components/StatusBadge';

const COLUMNS = [
  { key: 'id', label: 'ID' },
  { key: 'judul', label: 'Judul' },
  { key: 'tahun', label: 'Tahun' },
  { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
];

export default function PolicyBriefList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    setLoading(true);
    api.get('/policy-brief').then(res => setData(res.data.data)).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id) => {
    if (!confirm('Hapus policy brief ini?')) return;
    await api.delete(`/policy-brief/${id}`);
    fetchData();
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    await api.put(`/policy-brief/${id}`, { status: newStatus });
    fetchData();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Policy Brief</h2>
        <button onClick={() => navigate('/publikasi/policy-brief/new')} className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          + Tambah Policy Brief
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <DataTable
          columns={COLUMNS}
          data={data}
          onEdit={(id) => navigate(`/publikasi/policy-brief/${id}`)}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      )}
    </div>
  );
}
