import { LogoMark } from "./LogoMark";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 text-bone transition-opacity hover:opacity-80">
          <LogoMark className="h-8 w-8 text-crimson" />
          <span className="font-display text-sm font-bold tracking-[0.25em] uppercase">
            The Glutony
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm tracking-wide text-bone/70 sm:flex">
          <a href="#world" className="transition-colors hover:text-infernal">
            The Hollow
          </a>
          <a href="#law" className="transition-colors hover:text-infernal">
            The Law
          </a>
          <a href="#beings" className="transition-colors hover:text-infernal">
            Beings
          </a>
          <a href="#themes" className="transition-colors hover:text-infernal">
            Themes
          </a>
        </nav>
      </div>
    </header>
  );
}
