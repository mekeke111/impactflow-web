'use client';

import Navbar from '../../components/Navbar';
import { useQuery } from '@tanstack/react-query';
import { fetchAnalyticsActivity } from '../../services/mockData';

export default function AnalyticsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['analyticsActivity'],
    queryFn: fetchAnalyticsActivity,
    refetchInterval: 15000,
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-20 px-8">
        <h1 className="text-5xl font-bold mb-4">Analytics Dashboard</h1>
        <p className="text-gray-400 mb-12">View platform statistics, transparent funding insights, and real-time updates.</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">150+</h2>
            <p className="text-gray-400">Campaigns Created</p>
          </div>
          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">$120K</h2>
            <p className="text-gray-400">Total Funds Distributed</p>
          </div>
          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">2,500+</h2>
            <p className="text-gray-400">Active Users</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-950 border border-gray-800 p-8 rounded-3xl">
          <h2 className="text-3xl font-semibold mb-6">Recent Activity</h2>
          {isLoading ? (
            <p className="text-gray-400">Loading updates...</p>
          ) : (
            <ul className="space-y-4 text-gray-400">
              {data?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
