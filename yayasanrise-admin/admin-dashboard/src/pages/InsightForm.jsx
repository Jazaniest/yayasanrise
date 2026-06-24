import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/client';
import FormField from '../components/FormField';

export default function InsightForm() {
  const { id } = useParams();
  const isEdit = id && id !== 'new';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ judul: '', konten: '', penulis: '', thumbnail_url: '', kategori: 'insight', status: 'draft' });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isEdit) {
      api.get(`/insight/${id}`).then(res => {
        const d = res.data.data;
        setForm({ judul: d.judul || '', konten: d.konten || '', penulis: d.penulis || '', thumbnail_url: d.thumbnail_url || '', kategori: d.kategori || 'insight', status: d.status || 'draft' });
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
        payload.thumbnail_url = res.data.data.url;
      }

      if (isEdit) {
        await api.put(`/insight/${id}`, payload);
      } else {
        await api.post('/insight', payload);
      }
      navigate('/insight');
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
        {isEdit ? 'Edit Insight / Opini' : 'Tambah Insight / Opini'}
      </h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <FormField label="Judul" name="judul" value={form.judul} onChange={handleChange} required />
        <FormField label="Konten" name="konten" type="textarea" rows={10} value={form.konten} onChange={handleChange} />
        <FormField label="Penulis" name="penulis" value={form.penulis} onChange={handleChange} />
        <FormField label="Kategori" name="kategori" type="select" value={form.kategori} onChange={handleChange} options={['insight', 'opini']} />
        <FormField label="Upload Thumbnail" name="file" type="file" onChange={handleFileChange} />
        {form.thumbnail_url && !file && <p className="text-sm text-gray-500">Thumbnail saat ini: <a href={form.thumbnail_url} target="_blank" rel="noopener noreferrer"><img src={form.thumbnail_url} alt="thumbnail" className="w-40 h-auto mt-2"/></a></p>}
        <FormField label="Status" name="status" type="select" value={form.status} onChange={handleChange} options={['draft', 'published']} />

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50">
            {saving ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button type="button" onClick={() => navigate('/insight')} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium transition">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
