import Navbar from '../../components/Navbar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-20 px-8 max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-400 mb-12">
          Reach out to the ImpactFlow team for support or partnership inquiries.
        </p>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Write your message"
              className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-4 py-3 outline-none"
            />
          </div>

          <button className="bg-blue-600 px-8 py-4 rounded-2xl">
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}