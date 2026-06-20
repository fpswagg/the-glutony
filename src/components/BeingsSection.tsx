const beings = [
  {
    name: "The Twin",
    subtitle: "Elder Brother",
    role: "Predator · Teacher · Ceiling",
    description:
      "Stronger from the first breath. He discovered the truth early — everything can be consumed. He killed and consumed their parents, not from hatred, but understanding. He grows through accumulation, obsession, and experience theft.",
    accent: "border-crimson/40",
    glow: "hover:shadow-[0_0_30px_rgba(139,0,0,0.2)]",
  },
  {
    name: "The Wand of Hades",
    subtitle: "You — The Younger Brother",
    role: "Evolving Anomaly",
    description:
      "Born incomplete. Weak. Almost corpse-like. Your first consumption was guided — a human given by the twin. Intelligence awakened. Hunger became conscious. Humans named you a weapon of death. The name was imposed, not chosen.",
    accent: "border-infernal/40",
    glow: "hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]",
  },
  {
    name: "God of Monsters",
    subtitle: "The Divine Flower",
    role: "Hidden Watcher",
    description:
      "Shaped like a monstrous bloom — growth, expansion, absorption, eternal blooming through violence. The only being that directly inherited the essence of the Divinity of Darkness. Origin and continuation. Something even older watches it.",
    accent: "border-abyss/40",
    glow: "hover:shadow-[0_0_30px_rgba(109,40,217,0.2)]",
  },
];

export function BeingsSection() {
  return (
    <section id="beings" className="relative px-6 py-32">
      <div className="section-divider mx-auto mb-20 max-w-4xl" />
      <div className="mx-auto max-w-5xl">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-crimson">
          Key Beings
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-wide uppercase">
          Forces of The Hollow
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {beings.map((being) => (
            <article
              key={being.name}
              className={`rounded-sm border bg-white/[0.02] p-8 transition-all ${being.accent} ${being.glow}`}
            >
              <p className="font-display text-xs tracking-[0.3em] uppercase text-bone/40">
                {being.subtitle}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-wide uppercase">
                {being.name}
              </h3>
              <p className="mt-1 text-xs tracking-wide text-infernal/80">{being.role}</p>
              <p className="mt-6 text-sm leading-relaxed text-bone/60">
                {being.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
