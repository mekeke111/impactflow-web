import { Button } from '@/components/Button';
import { WalletStatus } from '@/features/home/WalletStatus';

export function HomeHero() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">ImpactFlow</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Build missions that matter.
        </h1>
      </div>
      <p className="max-w-2xl text-slate-300 text-lg leading-8">
        ImpactFlow helps teams collaborate on measurable social impact programs with fast, accessible workflows and real-time clarity.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button>Get started</Button>
      </div>
      <WalletStatus />
    </div>
  );
}
