// API base URL - change for production later
const API_BASE = 'http://localhost:5000';

export const checkHealth = async () => {
  try {
    const res = await fetch(`${API_BASE}/api/health`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return { status: 'offline' };
  }
};
