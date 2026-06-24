import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/client';
import FormField from '../components/FormField';

export default function KegiatanForm() {
  const { id } = useParams();
  const isEdit = id && id !== 'new';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ judul: '', deskripsi: '', tanggal: '', lokasi: '', foto_url: '', status: 'draft' });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isEdit) {
      api.get(`/kegiatan/${id}`).then(res => {
        const d = res.data.data;
        // Format date for input type="date"
        const formattedDate = d.tanggal ? new Date(d.tanggal).toISOString().split('T')[0] : '';
        setForm({ judul: d.judul || '', deskripsi: d.deskripsi || '', tanggal: formattedDate, lokasi: d.lokasi || '', foto_url: d.foto_url || '', status: d.status || 'draft' });
      }).catch(console.error).finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    let payload = { ...form };

    try {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        const res = await api.post('/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        payload.foto_url = res.data.data.url;
      }

      if (isEdit) {
        await api.put(`/kegiatan/${id}`, payload);
      } else {
        await api.post('/kegiatan', payload);
      }
      navigate('/kegiatan');
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {isEdit ? 'Edit Kegiatan' : 'Tambah Kegiatan'}
      </h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <FormField label="Judul" name="judul" value={form.judul} onChange={handleChange} required />
        <FormField label="Deskripsi" name="deskripsi" type="textarea" value={form.deskripsi} onChange={handleChange} />
        <FormField label="Tanggal" name="tanggal" type="date" value={form.tanggal} onChange={handleChange} />
        <FormField label="Lokasi" name="lokasi" value={form.lokasi} onChange={handleChange} />
        <FormField label="Upload Foto" name="file" type="file" onChange={handleFileChange} />
        {form.foto_url && !file && <p className="text-sm text-gray-500">Foto saat ini: <a href={form.foto_url} target="_blank" rel="noopener noreferrer"><img src={form.foto_url} alt="foto kegiatan" className="w-40 h-auto mt-2"/></a></p>}
        <FormField label="Status" name="status" type="select" value={form.status} onChange={handleChange} options={['draft', 'published']} />

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50">
            {saving ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button type="button" onClick={() => navigate('/kegiatan')} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium transition">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
