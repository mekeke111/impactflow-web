import Navbar from '../components/Navbar';
import OverviewCard from '../components/OverviewCard';
import { appConfig } from '../utils/appConfig';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="py-24 px-8 text-center">
        <h1 className="text-6xl font-bold max-w-4xl mx-auto leading-tight">
          Transparent Community Funding on Stellar
        </h1>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          {appConfig.overview}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="/campaigns" className="bg-blue-600 px-8 py-4 rounded-2xl text-white">
            Launch Campaign
          </a>
          <a href="/dashboard" className="border border-gray-700 px-8 py-4 rounded-2xl text-white">
            View Dashboard
          </a>
        </div>
      </section>

      <section className="py-24 px-8 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-16">Platform Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {appConfig.features.map((feature) => (
            <OverviewCard key={feature} title={feature} description={`Built to support ${feature.toLowerCase()}.`} />
          ))}
        </div>
      </section>

      <section className="py-24 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Roadmap Progress</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {appConfig.features.map((feature) => (
            <div key={feature} className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
              <h3 className="text-2xl font-semibold text-white">{feature}</h3>
              <p className="mt-3 text-gray-400">{feature === 'Wallet authentication' ? 'Live wallet connect with Stellar Wallet Kit.' : `Core support for ${feature.toLowerCase()}.`}</p>
              <div className="mt-4 text-sm text-green-300">{feature === 'Wallet authentication' ? 'Implemented' : 'In progress'}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
