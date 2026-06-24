import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/client';
import FormField from '../components/FormField';

export default function MitraForm() {
  const { id } = useParams();
  const isEdit = id && id !== 'new';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ nama: '', tipe: 'kolaborator', logo_url: '', website: '', deskripsi: '', urutan: 0, status: 'draft' });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isEdit) {
      api.get(`/mitra/${id}`).then(res => {
        const d = res.data.data;
        setForm({ nama: d.nama || '', tipe: d.tipe || 'kolaborator', logo_url: d.logo_url || '', website: d.website || '', deskripsi: d.deskripsi || '', urutan: d.urutan || 0, status: d.status || 'draft' });
      }).catch(console.error).finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({ ...form, [name]: type === 'number' ? parseInt(value, 10) : value });
  };
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
        payload.logo_url = res.data.data.url;
      }

      if (isEdit) {
        await api.put(`/mitra/${id}`, payload);
      } else {
        await api.post('/mitra', payload);
      }
      navigate('/mitra');
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
        {isEdit ? 'Edit Mitra' : 'Tambah Mitra'}
      </h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <FormField label="Nama" name="nama" value={form.nama} onChange={handleChange} required />
        <FormField label="Tipe" name="tipe" type="select" value={form.tipe} onChange={handleChange} options={['donatur', 'kolaborator', 'sponsor']} />
        <FormField label="Website" name="website" value={form.website} onChange={handleChange} />
        <FormField label="Deskripsi" name="deskripsi" type="textarea" value={form.deskripsi} onChange={handleChange} />
        <FormField label="Urutan" name="urutan" type="number" value={form.urutan} onChange={handleChange} />
        <FormField label="Upload Logo" name="file" type="file" onChange={handleFileChange} />
        {form.logo_url && !file && <p className="text-sm text-gray-500">Logo saat ini: <a href={form.logo_url} target="_blank" rel="noopener noreferrer"><img src={form.logo_url} alt="logo mitra" className="w-32 h-auto mt-2"/></a></p>}
        <FormField label="Status" name="status" type="select" value={form.status} onChange={handleChange} options={['draft', 'published']} />

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50">
            {saving ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button type="button" onClick={() => navigate('/mitra')} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium transition">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
