import Navbar from '../../components/Navbar';

const campaigns = [
  {
    id: 1,
    title: 'Community Park Renovation',
    description: 'Help restore our local park with better facilities.',
    amountRaised: 12500,
  },
  {
    id: 2,
    title: 'School Supplies Drive',
    description: 'Support students with essential supplies for the school year.',
    amountRaised: 8300,
  },
  {
    id: 3,
    title: 'Neighborhood Food Pantry',
    description: 'Fund the food pantry for families in need.',
    amountRaised: 14600,
  },
];

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-20 px-8">

        <h1 className="text-5xl font-bold mb-4">
          Funding Campaigns
        </h1>

        <p className="text-gray-400 mb-12">
          Explore active community funding campaigns.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {campaigns.map((item) => (
            <div key={item.id} className="bg-gray-950 border border-gray-800 p-6 rounded-3xl">

              <h2 className="text-2xl font-semibold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-400 mb-4">
                {item.description}
              </p>

              <p className="text-green-400 mb-6">
                Raised: ${item.amountRaised}
              </p>

              <button className="bg-blue-600 px-5 py-3 rounded-xl">
                Donate
              </button>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}