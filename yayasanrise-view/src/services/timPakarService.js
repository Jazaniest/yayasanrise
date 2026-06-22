import api from './api';

export const getTimPakar = async () => {
  try {
    const response = await api.get('/tim-pakar?status=published');
    // The API should return them sorted by `urutan` from the backend, but we can sort here as a fallback.
    return response.data.data.sort((a, b) => a.urutan - b.urutan);
  } catch (error) {
    console.error("Error fetching tim pakar:", error);
    throw error;
  }
};
