import Navbar from '../components/Navbar';

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-20 px-8">

        <h1 className="text-5xl font-bold mb-4">
          DAO Governance
        </h1>

        <p className="text-gray-400 mb-12">
          Participate in community governance and voting.
        </p>

        <div className="space-y-8">

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold mb-3">
              Proposal #1
            </h2>

            <p className="text-gray-400 mb-6">
              Increase community funding allocation for healthcare initiatives.
            </p>

            <div className="flex gap-4">
              <button className="bg-green-600 px-5 py-3 rounded-xl">
                Vote Yes
              </button>

              <button className="bg-red-600 px-5 py-3 rounded-xl">
                Vote No
              </button>
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold mb-3">
              Proposal #2
            </h2>

            <p className="text-gray-400 mb-6">
              Expand validator participation requirements.
            </p>

            <div className="flex gap-4">
              <button className="bg-green-600 px-5 py-3 rounded-xl">
                Vote Yes
              </button>

              <button className="bg-red-600 px-5 py-3 rounded-xl">
                Vote No
              </button>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}