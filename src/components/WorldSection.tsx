export function WorldSection() {
  return (
    <section id="world" className="relative px-6 py-32">
      <div className="section-divider mx-auto mb-20 max-w-4xl" />
      <div className="mx-auto max-w-4xl">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-infernal">
          The World
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-wide uppercase sm:text-5xl">
          The Hollow
        </h2>
        <p className="mt-2 font-display text-lg italic text-bone/50">
          It was not born. It was created from the death of a god.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-glow rounded-sm border border-white/5 bg-white/[0.02] p-8">
            <h3 className="font-display text-lg font-semibold tracking-wide text-crimson uppercase">
              Divinity of Darkness
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-bone/65">
              An ancient being tied to darkness itself. When it began to die, its essence
              collapsed into the world as blood — corrupting the land, twisting matter, and
              birthing monsters from the void.
            </p>
          </div>

          <div className="border-glow rounded-sm border border-white/5 bg-white/[0.02] p-8">
            <h3 className="font-display text-lg font-semibold tracking-wide text-abyss uppercase">
              God of Monsters
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-bone/65">
              Born when a divine drop fell upon a flower. A monstrous, divine bloom — child
              of the dead god and distortion of it. It watches over the ecosystem, ensuring
              only evolution survives. Most monsters never know it is real.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm leading-relaxed text-bone/50">
          Nothing remains static in The Hollow. Everything evolves or disappears. The world
          is a living ecosystem of evolution through violence and consumption.
        </p>
      </div>
    </section>
  );
}
