import { HomeHero } from '@/features/home/HomeHero';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
          <HomeHero />
        </section>
      </div>
    </main>
  );
}
