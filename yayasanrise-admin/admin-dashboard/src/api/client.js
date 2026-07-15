import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1',
  withCredentials: true, // Send cookies with every request
  headers: { 'Content-Type': 'application/json' },
});

// The request interceptor for localStorage is no longer needed,
// as the browser handles the cookie automatically.

// The response interceptor that caused the reload loop is removed.
// Error handling should be done within the components or context that make the API call.
// For example, AuthContext already handles the 401 from /me correctly.

export default api;
