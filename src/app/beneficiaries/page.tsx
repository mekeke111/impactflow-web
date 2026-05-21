'use client';

import { FormEvent, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAppStore } from '../../store/useAppStore';

export default function BeneficiariesPage() {
  const [name, setName] = useState('');
  const [program, setProgram] = useState('');
  const beneficiaries = useAppStore((state) => state.beneficiaries);
  const addBeneficiary = useAppStore((state) => state.addBeneficiary);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !program) return;

    addBeneficiary({ name, program });
    setName('');
    setProgram('');
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-20 px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="text-5xl font-bold mb-4">Beneficiaries</h1>
            <p className="text-gray-400 mb-12">Track beneficiary onboarding and program support status.</p>

            <div className="grid gap-8 md:grid-cols-2">
              {beneficiaries.map((beneficiary) => (
                <div key={beneficiary.id} className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
                  <h2 className="text-2xl font-semibold mb-3">{beneficiary.name}</h2>
                  <p className="text-gray-400 mb-3">{beneficiary.program}</p>
                  <span className="text-green-400">{beneficiary.status}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
            <h2 className="text-3xl font-bold mb-4">Onboard Beneficiary</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-gray-300">Beneficiary Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-gray-800 bg-black px-4 py-3 text-white"
                  placeholder="Enter full name"
                />
              </label>

              <label className="block">
                <span className="text-gray-300">Program</span>
                <input
                  type="text"
                  value={program}
                  onChange={(event) => setProgram(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-gray-800 bg-black px-4 py-3 text-white"
                  placeholder="Program name"
                />
              </label>

              <button type="submit" className="w-full bg-blue-600 px-5 py-3 rounded-xl text-white">
                Add Beneficiary
              </button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}
