export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/20">
        <h1 className="text-4xl font-semibold tracking-tight text-white">ImpactFlow Web</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          A starter frontend for the ImpactFlow Protocol, built with Next.js, TypeScript, and Tailwind CSS.
        </p>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <h2 className="text-xl font-semibold text-white">Features</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Wallet authentication</li>
              <li>Funding campaign creation</li>
              <li>Beneficiary onboarding</li>
              <li>Milestone tracking</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>React</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
