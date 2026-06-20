const themes = [
  "Evolution through consumption",
  "Identity through violence",
  "Power through transformation",
  "Obsession as destiny",
];

export function ThemesSection() {
  return (
    <section id="themes" className="relative px-6 py-32">
      <div className="section-divider mx-auto mb-20 max-w-4xl" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-infernal">
          Core Themes
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-wide uppercase">
          Not Heroism
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-bone/55">
          The Hollow is not about saving the world. It is about forbidden power, hunger,
          dominance, and the mystery of what you become when everything you consume becomes
          part of you.
        </p>

        <ul className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
          {themes.map((theme) => (
            <li
              key={theme}
              className="flex items-center gap-4 rounded-sm border border-white/5 bg-white/[0.02] px-6 py-4 text-left text-sm text-bone/70"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
              {theme}
            </li>
          ))}
        </ul>

        <blockquote className="mx-auto mt-16 max-w-2xl font-display text-xl italic leading-relaxed text-bone/75 sm:text-2xl">
          &ldquo;If everything you consume becomes part of you… what are you, really?&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
