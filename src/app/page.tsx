import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-bold max-w-4xl leading-tight">
          Transparent Community Funding on Stellar
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          ImpactFlow helps organizations distribute aid transparently using blockchain technology.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-blue-600 px-8 py-4 rounded-2xl">
            Launch Campaign
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-2xl">
            Learn More
          </button>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-8 bg-gray-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-black border border-gray-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">
              Transparent Funding
            </h3>

            <p className="text-gray-400">
              Track donations and aid distribution transparently.
            </p>
          </div>

          <div className="bg-black border border-gray-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">
              DAO Governance
            </h3>

            <p className="text-gray-400">
              Community members participate in governance decisions.
            </p>
          </div>

          <div className="bg-black border border-gray-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">
              Real-Time Tracking
            </h3>

            <p className="text-gray-400">
              Monitor campaigns and milestones in real time.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 ImpactFlow Protocol
      </footer>

    </main>
  );
}