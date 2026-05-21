'use client';

import { FormEvent, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAppStore } from '../../store/useAppStore';

export default function CampaignsPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState(10000);
  const campaigns = useAppStore((state) => state.campaigns);
  const addCampaign = useAppStore((state) => state.addCampaign);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !description || goal <= 0) {
      return;
    }

    addCampaign({ title, description, goal });
    setTitle('');
    setDescription('');
    setGoal(10000);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-20 px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <h1 className="text-5xl font-bold mb-4">Funding Campaigns</h1>
            <p className="text-gray-400 mb-12">Explore active community funding campaigns and launch new initiatives.</p>

            <div className="grid gap-8">
              {campaigns.map((item) => (
                <div key={item.id} className="bg-gray-950 border border-gray-800 p-6 rounded-3xl">
                  <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
                  <p className="text-gray-400 mb-3">{item.description}</p>
                  <p className="text-green-400 mb-4">Raised: ${item.amountRaised.toLocaleString()} of ${item.goal.toLocaleString()}</p>
                  <button className="bg-blue-600 px-5 py-3 rounded-xl">Donate</button>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
            <h2 className="text-3xl font-bold mb-4">Create a Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-gray-300">Campaign Title</span>
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-gray-800 bg-black px-4 py-3 text-white"
                  placeholder="New community campaign"
                />
              </label>

              <label className="block">
                <span className="text-gray-300">Description</span>
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-gray-800 bg-black px-4 py-3 text-white"
                  rows={4}
                  placeholder="Describe the campaign goals"
                />
              </label>

              <label className="block">
                <span className="text-gray-300">Funding Goal</span>
                <input
                  type="number"
                  value={goal}
                  onChange={(event) => setGoal(Number(event.target.value))}
                  className="mt-2 w-full rounded-2xl border border-gray-800 bg-black px-4 py-3 text-white"
                />
              </label>

              <button type="submit" className="w-full bg-blue-600 px-5 py-3 rounded-xl text-white">
                Create Campaign
              </button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}
