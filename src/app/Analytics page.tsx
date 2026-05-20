import Navbar from '../components/Navbar';

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-20 px-8">

        <h1 className="text-5xl font-bold mb-4">
          Analytics Dashboard
        </h1>

        <p className="text-gray-400 mb-12">
          View platform statistics and funding insights.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">
              150+
            </h2>

            <p className="text-gray-400">
              Campaigns Created
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">
              $120K
            </h2>

            <p className="text-gray-400">
              Total Funds Distributed
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">
              2,500+
            </h2>

            <p className="text-gray-400">
              Active Users
            </p>
          </div>

        </div>

        <div className="mt-16 bg-gray-950 border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-3xl font-semibold mb-6">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>
              Campaign "Clean Water Project" reached 80% funding.
            </li>

            <li>
              25 new beneficiaries were verified this week.
            </li>

            <li>
              DAO Proposal #2 received majority approval.
            </li>

          </ul>

        </div>

      </section>

    </main>
  );
}