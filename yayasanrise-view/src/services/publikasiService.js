import api from './api';

const fetchData = async (endpoint) => {
  try {
    const response = await api.get(`${endpoint}?status=published`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

export const getArtikelIlmiah = () => fetchData('/artikel-ilmiah');
export const getPolicyBrief = () => fetchData('/policy-brief');
export const getLaporanPenelitian = () => fetchData('/laporan-penelitian');
export const getBuku = () => fetchData('/buku');
export const getInfografis = () => fetchData('/infografis');
