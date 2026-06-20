const states = [
  {
    title: "Predator",
    description: "Creatures that hunt without hesitation. They consume to dominate.",
    accent: "text-crimson",
  },
  {
    title: "Prey",
    description: "The weak. Those who fail to adapt are erased from existence.",
    accent: "text-bone/50",
  },
  {
    title: "Evolving Anomaly",
    description: "Unstable. Rare. Dangerous. You belong here.",
    accent: "text-infernal",
  },
];

export function LawSection() {
  return (
    <section id="law" className="relative px-6 py-32">
      <div className="section-divider mx-auto mb-20 max-w-4xl" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-abyss">
          The Law
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-wide uppercase sm:text-4xl">
          One Rule Governs All
        </h2>

        <blockquote className="mx-auto mt-12 max-w-2xl font-display text-2xl italic leading-relaxed text-bone sm:text-3xl">
          &ldquo;Those who cannot evolve will be consumed.&rdquo;
        </blockquote>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {states.map((state) => (
            <div
              key={state.title}
              className="group rounded-sm border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-crimson/30"
            >
              <h3
                className={`font-display text-sm font-bold tracking-[0.2em] uppercase ${state.accent}`}
              >
                {state.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/55">
                {state.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
