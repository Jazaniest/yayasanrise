import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import api from '../api/client'; // Assuming the public analytics endpoint is on the same base URL

const VisitorStatsCard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/analytics/visitor-stats');
        setStats(response.data.data);
      } catch (err) {
        setError('Failed to load visitor stats.');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const totalVisitors = stats.reduce((sum, item) => sum + item.count, 0);
  const totalCountries = stats.length;
  // Get top 5 for the chart
  const chartData = stats.slice(0, 5).map(item => ({ name: item.country_code, visitors: item.count }));

  if (loading) return <div className="bg-white p-4 rounded-lg shadow">Loading Stats...</div>;
  if (error) return <div className="bg-white p-4 rounded-lg shadow text-red-500">{error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Visitor Statistics</h3>
      <div className="grid grid-cols-2 gap-4 mb-6 text-center">
        <div>
          <p className="text-2xl font-bold text-emerald-600">{totalVisitors}</p>
          <p className="text-sm text-gray-500">Total Visitors</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-emerald-600">{totalCountries}</p>
          <p className="text-sm text-gray-500">Total Countries</p>
        </div>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="visitors" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorStatsCard;
