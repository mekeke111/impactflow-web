import Navbar from '../../components/Navbar';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-20 px-8">

        <h1 className="text-5xl font-bold mb-4">
          Dashboard
        </h1>

        <p className="text-gray-400 mb-12">
          Monitor campaigns, donations, and governance activity.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">
              $25,000
            </h2>

            <p className="text-gray-400">
              Total Donations
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">
              12
            </h2>

            <p className="text-gray-400">
              Active Campaigns
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">
              320
            </h2>

            <p className="text-gray-400">
              Community Members
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}