import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getVisitorStats } from '../services/analyticsService';

const VisitorStatsDisplay = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getVisitorStats();
        setStats(data);
      } catch (err) {
        setError(t('visitorStats.errorLoad'));
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [t]);

  if (loading) return <div className="p-8 text-center text-gray-500">{t('loading.message')}</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  const requiredCountries = [
    'Indonesia', 'Norway', 'Germany', 'Finland', 'Sweden', 'Denmark',
    'Netherlands', 'United Kingdom', 'Switzerland', 'Australia', 'Japan',
    'Singapore', 'Canada', 'New Zealand', 'Brazil'
  ];

  const processedStats = requiredCountries.reduce((acc, country) => {
    acc[country] = 0;
    return acc;
  }, { 'Other': 0 });

  stats.forEach(item => {
    const name = requiredCountries.includes(item.country_name) ? item.country_name : 'Other';
    processedStats[name] += parseInt(item.count);
  });

  const chartData = Object.entries(processedStats)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({
      name: t(`visitorStats.countries.${name.toLowerCase().replace(/\s+/g, '')}`, { defaultValue: name }),
      count
    }));

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-serif text-gray-800 mb-8">{t('visitorStats.title')}</h3>
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={100}
              tick={{ fontSize: 12, fill: '#4B5563' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: '#F3F4F6' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.count > 0 ? '#10B981' : '#E5E7EB'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorStatsDisplay;
