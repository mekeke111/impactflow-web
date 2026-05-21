'use client';

import Navbar from '../../components/Navbar';
import { useAppStore } from '../../store/useAppStore';

export default function GovernancePage() {
  const proposals = useAppStore((state) => state.proposals);
  const voteProposal = useAppStore((state) => state.voteProposal);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-20 px-8">
        <h1 className="text-5xl font-bold mb-4">DAO Governance</h1>
        <p className="text-gray-400 mb-12">Participate in community governance and voting.</p>

        <div className="space-y-8">
          {proposals.map((proposal) => (
            <div key={proposal.id} className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
              <h2 className="text-2xl font-semibold mb-3">{proposal.title}</h2>
              <p className="text-gray-400 mb-6">{proposal.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={() => voteProposal(proposal.id, true)} className="bg-green-600 px-5 py-3 rounded-xl">
                  Vote Yes
                </button>
                <button onClick={() => voteProposal(proposal.id, false)} className="bg-red-600 px-5 py-3 rounded-xl">
                  Vote No
                </button>
                <div className="text-gray-300">Yes: {proposal.yes} / No: {proposal.no}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
