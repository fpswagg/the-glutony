import { LogoMark } from "./LogoMark";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <div className="animate-fade-up mb-8">
        <LogoMark className="mx-auto h-20 w-20 text-crimson drop-shadow-[0_0_30px_rgba(139,0,0,0.5)]" />
      </div>

      <h1
        className="animate-fade-up font-display text-5xl font-black tracking-[0.15em] uppercase sm:text-7xl md:text-8xl"
        style={{ animationDelay: "0.1s", opacity: 0 }}
      >
        <span className="text-gradient-infernal">The Glutony</span>
      </h1>

      <p
        className="animate-fade-up mt-6 max-w-xl text-lg tracking-wide text-bone/60 sm:text-xl"
        style={{ animationDelay: "0.2s", opacity: 0 }}
      >
        Dark fantasy monster evolution RPG
      </p>

      <blockquote
        className="animate-fade-up mt-10 max-w-2xl border-l-2 border-crimson/60 pl-6 text-left font-display text-xl italic leading-relaxed text-bone/80 sm:text-2xl"
        style={{ animationDelay: "0.3s", opacity: 0 }}
      >
        &ldquo;Those who cannot evolve will be consumed.&rdquo;
      </blockquote>

      <p
        className="animate-fade-up mt-8 max-w-lg text-sm leading-relaxed text-bone/50"
        style={{ animationDelay: "0.4s", opacity: 0 }}
      >
        You are not a hero. You are a monster — incomplete, hungry, evolving — trying to
        surpass every other creature in a world born from the death of a god.
      </p>

      <div
        className="animate-fade-up mt-12 flex flex-col items-center gap-4 sm:flex-row"
        style={{ animationDelay: "0.5s", opacity: 0 }}
      >
        <a
          href="#world"
          className="border-glow rounded-sm bg-crimson/20 px-8 py-3 font-display text-sm font-semibold tracking-[0.2em] uppercase text-bone transition-all hover:bg-crimson/40 hover:shadow-[0_0_30px_rgba(139,0,0,0.4)]"
        >
          Enter The Hollow
        </a>
        <span className="rounded-sm border border-white/10 px-8 py-3 font-display text-sm tracking-[0.2em] uppercase text-bone/40">
          Game Coming Soon
        </span>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse-glow">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-crimson/50 to-transparent" />
      </div>
    </section>
  );
}
