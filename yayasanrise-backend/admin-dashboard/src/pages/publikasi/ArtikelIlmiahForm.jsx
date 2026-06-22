import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/client';
import FormField from '../../components/FormField';

export default function ArtikelIlmiahForm() {
  const { id } = useParams();
  const isEdit = id && id !== 'new';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ judul: '', penulis: '', abstrak: '', link_url: '', tahun: '', status: 'draft' });

  useEffect(() => {
    if (isEdit) {
      api.get(`/artikel-ilmiah/${id}`).then(res => {
        const d = res.data.data;
        setForm({ judul: d.judul || '', penulis: d.penulis || '', abstrak: d.abstrak || '', link_url: d.link_url || '', tahun: d.tahun || '', status: d.status || 'draft' });
      }).catch(console.error).finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (isEdit) {
        await api.put(`/artikel-ilmiah/${id}`, form);
      } else {
        await api.post('/artikel-ilmiah', form);
      }
      navigate('/publikasi/artikel-ilmiah');
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
        {isEdit ? 'Edit Artikel Ilmiah' : 'Tambah Artikel Ilmiah'}
      </h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <FormField label="Judul" name="judul" value={form.judul} onChange={handleChange} required />
        <FormField label="Penulis" name="penulis" value={form.penulis} onChange={handleChange} />
        <FormField label="Abstrak" name="abstrak" type="textarea" rows={5} value={form.abstrak} onChange={handleChange} />
        <FormField label="Link URL (DOI/Jurnal)" name="link_url" value={form.link_url} onChange={handleChange} />
        <FormField label="Tahun" name="tahun" value={form.tahun} onChange={handleChange} placeholder="2026" />
        <FormField label="Status" name="status" type="select" value={form.status} onChange={handleChange} options={[
          { value: 'draft', label: 'Draft' },
          { value: 'published', label: 'Published' },
        ]} />

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50">
            {saving ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button type="button" onClick={() => navigate('/publikasi/artikel-ilmiah')} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium transition">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
