import axios from 'axios';

// This uses the same backend as the admin dashboard
const API_URL = import.meta.env.VITE_ADMIN_API_URL || 'http://localhost:3001/api/v1';

const apiClient = axios.create({
  baseURL: API_URL,
});

export const trackVisit = async (visitData) => {
  try {
    // This is a fire-and-forget call, we don't need the response.
    await apiClient.post('/analytics/track-visit', visitData);
  } catch (error) {
    // We swallow the error to not disrupt user experience if tracking fails.
    console.error('Failed to track visit:', error);
  }
};

export const getVisitorStats = async () => {
    const response = await apiClient.get('/analytics/visitor-stats');
    return response.data.data;
};
