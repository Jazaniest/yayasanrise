import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/client';
import FormField from '../../components/FormField';

export default function BukuForm() {
  const { id } = useParams();
  const isEdit = id && id !== 'new';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ judul: '', penulis: '', deskripsi: '', cover_url: '', file_url: '', tahun: '', status: 'draft' });
  const [coverFile, setCoverFile] = useState(null);
  const [bookFile, setBookFile] = useState(null);

  useEffect(() => {
    if (isEdit) {
      api.get(`/buku/${id}`).then(res => {
        const d = res.data.data;
        setForm({ judul: d.judul || '', penulis: d.penulis || '', deskripsi: d.deskripsi || '', cover_url: d.cover_url || '', file_url: d.file_url || '', tahun: d.tahun || '', status: d.status || 'draft' });
      }).catch(console.error).finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleCoverFileChange = (e) => setCoverFile(e.target.files[0]);
  const handleBookFileChange = (e) => setBookFile(e.target.files[0]);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await api.post('/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    return res.data.data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    let payload = { ...form };

    try {
      if (coverFile) {
        payload.cover_url = await uploadFile(coverFile);
      }
      if (bookFile) {
        payload.file_url = await uploadFile(bookFile);
      }

      if (isEdit) {
        await api.put(`/buku/${id}`, payload);
      } else {
        await api.post('/buku', payload);
      }
      navigate('/publikasi/buku');
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
        {isEdit ? 'Edit Buku / Modul' : 'Tambah Buku / Modul'}
      </h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <FormField label="Judul" name="judul" value={form.judul} onChange={handleChange} required />
        <FormField label="Penulis" name="penulis" value={form.penulis} onChange={handleChange} />
        <FormField label="Deskripsi" name="deskripsi" type="textarea" value={form.deskripsi} onChange={handleChange} />
        <FormField label="Upload Cover (Gambar)" name="coverFile" type="file" onChange={handleCoverFileChange} />
        {form.cover_url && !coverFile && <p className="text-sm text-gray-500">Cover saat ini: <a href={form.cover_url} target="_blank" rel="noopener noreferrer"><img src={form.cover_url} alt="cover" className="w-20 h-auto"/></a></p>}
        <FormField label="Upload File Buku (PDF)" name="bookFile" type="file" onChange={handleBookFileChange} />
        {form.file_url && !bookFile && <p className="text-sm text-gray-500">File saat ini: <a href={form.file_url} target="_blank" rel="noopener noreferrer" className="text-emerald-600">{form.file_url}</a></p>}
        <FormField label="Tahun" name="tahun" value={form.tahun} onChange={handleChange} />
        <FormField label="Status" name="status" type="select" value={form.status} onChange={handleChange} options={['draft', 'published']} />

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50">
            {saving ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button type="button" onClick={() => navigate('/publikasi/buku')} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium transition">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
