'use client';

import Navbar from '../../components/Navbar';
import { useQuery } from '@tanstack/react-query';
import { useAppStore } from '../../store/useAppStore';
import { fetchDashboardMetrics } from '../../services/mockData';

export default function DashboardPage() {
  const campaigns = useAppStore((state) => state.campaigns);
  const beneficiaries = useAppStore((state) => state.beneficiaries);
  const { data, isLoading } = useQuery({
    queryKey: ['dashboardMetrics'],
    queryFn: fetchDashboardMetrics,
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-20 px-8">
        <h1 className="text-5xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-400 mb-12">Monitor campaigns, beneficiaries, milestones and governance activity.</p>

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
            <h2 className="text-3xl font-bold mb-2">Total Donations</h2>
            <p className="text-green-400 text-4xl mt-4">${data ? data.totalDonations.toLocaleString() : 'â€”'}</p>
            <p className="text-gray-400 mt-3">Live funding data refreshes every 10 seconds.</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
            <h2 className="text-3xl font-bold mb-2">Active Campaigns</h2>
            <p className="text-blue-400 text-4xl mt-4">{data ? data.activeCampaigns : campaigns.length}</p>
            <p className="text-gray-400 mt-3">Current community-funded initiatives.</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
            <h2 className="text-3xl font-bold mb-2">Verified Beneficiaries</h2>
            <p className="text-purple-400 text-4xl mt-4">{data ? data.verifiedBeneficiaries : beneficiaries.length}</p>
            <p className="text-gray-400 mt-3">Beneficiaries connected to ongoing programs.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
            <h2 className="text-3xl font-bold mb-6">Milestone Tracking</h2>
            <div className="space-y-4 text-gray-400">
              <div className="rounded-3xl border border-gray-800 bg-black/30 p-5">
                <p className="font-semibold">Park Renovation</p>
                <p className="mt-2">80% complete with budget tracking and community sign-off.</p>
              </div>
              <div className="rounded-3xl border border-gray-800 bg-black/30 p-5">
                <p className="font-semibold">School Supplies Drive</p>
                <p className="mt-2">60% complete and ready for distribution.</p>
              </div>
              <div className="rounded-3xl border border-gray-800 bg-black/30 p-5">
                <p className="font-semibold">Food Pantry Expansion</p>
                <p className="mt-2">75% funded. Logistics plan is in review.</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
            <h2 className="text-3xl font-bold mb-6">Transparency Feed</h2>
            <div className="space-y-4 text-gray-400">
              <p>Blockchain transaction records and campaign updates appear here for community review.</p>
              <p>Every donation and milestone update links back to Stellar for verification.</p>
              <p>Governance proposals and funding votes are visible in real-time.</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
