import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <LogoMark className="h-10 w-10 text-crimson/60" />
        <p className="mt-4 font-display text-lg font-bold tracking-[0.2em] uppercase">
          The Glutony
        </p>
        <p className="mt-2 text-xs tracking-wide text-bone/40">
          Dark fantasy · Monster evolution · The Hollow awaits
        </p>
        <p className="mt-8 text-xs text-bone/30">
          Minigame experience coming soon. Evolve or be consumed.
        </p>
      </div>
    </footer>
  );
}
