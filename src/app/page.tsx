import OverviewCard from "../components/OverviewCard";
import { appConfig } from "../utils/appConfig";
import { roadmap } from "../features/roadmap";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-8 rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/20">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white">{appConfig.name}</h1>
          <p className="max-w-3xl text-slate-300">{appConfig.description}</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <OverviewCard
            title="Project structure"
            description="This repository follows the documented ImpactFlow structure with dedicated source folders for components, features, services, hooks, store state and utilities."
          >
            <ul className="mt-4 space-y-2 text-slate-300">
              {appConfig.structure.map((path) => (
                <li key={path} className="rounded-2xl bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
                  {path}
                </li>
              ))}
            </ul>
          </OverviewCard>

          <OverviewCard
            title="Roadmap"
            description="The current feature roadmap is represented here so the homepage stays consistent with the README and project goals."
          >
            <ul className="mt-4 space-y-3 text-slate-300">
              {roadmap.map((item) => (
                <li key={item.label} className="flex items-center gap-3 rounded-2xl bg-slate-950/80 px-4 py-3">
                  <span className={item.completed ? "text-emerald-400" : "text-slate-400"}>
                    {item.completed ? "✔" : "○"}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </OverviewCard>

          <OverviewCard
            title="Features"
            description="Core platform capabilities are defined in the README and reflected in the current project plan."
          >
            <ul className="mt-4 space-y-2 text-slate-300">
              {appConfig.features.map((feature) => (
                <li key={feature} className="rounded-2xl bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
                  {feature}
                </li>
              ))}
            </ul>
          </OverviewCard>

          <OverviewCard
            title="Tech Stack"
            description="The stack is intentionally minimal and aligned with the README for frontend development and integration."
          >
            <ul className="mt-4 space-y-2 text-slate-300">
              {appConfig.techStack.map((tech) => (
                <li key={tech} className="rounded-2xl bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
                  {tech}
                </li>
              ))}
            </ul>
          </OverviewCard>
        </div>
      </div>
    </main>
  );
}
