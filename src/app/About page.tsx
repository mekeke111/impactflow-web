import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-20 px-8 max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          About ImpactFlow
        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          ImpactFlow is a transparent aid distribution and community funding
          platform powered by Stellar and Soroban smart contracts.
          Our mission is to improve trust, accountability, and transparency
          in community-driven funding systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-3xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-7">
              We aim to make aid distribution transparent and accessible
              through blockchain technology and decentralized governance.
            </p>

          </div>

          <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-3xl font-semibold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-400 leading-7">
              Building a future where communities can track, govern,
              and verify every funding process transparently.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}