import Navbar from '../../components/Navbar';

export default function BeneficiariesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-20 px-8">

        <h1 className="text-5xl font-bold mb-4">
          Beneficiaries
        </h1>

        <p className="text-gray-400 mb-12">
          Track and manage beneficiary support programs.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold mb-3">
              Amina Yusuf
            </h2>

            <p className="text-gray-400 mb-2">
              Education Support Program
            </p>

            <p className="text-green-500">
              Verified Beneficiary
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold mb-3">
              David Okoro
            </h2>

            <p className="text-gray-400 mb-2">
              Healthcare Assistance Program
            </p>

            <p className="text-green-500">
              Verified Beneficiary
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}