type OverviewCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function OverviewCard({ title, description, children }: OverviewCardProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/10">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-slate-300">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
