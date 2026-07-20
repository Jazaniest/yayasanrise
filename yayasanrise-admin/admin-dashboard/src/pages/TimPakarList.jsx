import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

const COLUMNS = [
  { key: 'id', label: 'ID' },
  { key: 'nama', label: 'Nama' },
  { key: 'jabatan', label: 'Jabatan' },
  { key: 'bidang_keahlian', label: 'Bidang Keahlian' },
  { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
];

export default function TimPakarList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    setLoading(true);
    api.get('/tim-pakar').then(res => setData(res.data.data)).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id) => {
    if (!confirm('Hapus anggota tim ini?')) return;
    await api.delete(`/tim-pakar/${id}`);
    fetchData();
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    await api.put(`/tim-pakar/${id}`, { status: newStatus });
    fetchData();
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Tim Pakar</h2>
        <button onClick={() => navigate('/tim-pakar/new')} className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto text-center">
          + Tambah Anggota Tim
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <DataTable
            columns={COLUMNS}
            data={data}
            onEdit={(id) => navigate(`/tim-pakar/${id}`)}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
          />
        </div>
      )}
    </div>
  );
}
