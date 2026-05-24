export default function EfferdBoxes() {
  return (
    <section className="bg-background text-foreground px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* THREE BOXES GRID CONTAINER */}
        {/* Gagamit tayo ng border-t at border-l, tapos ang mga anak ang may border-r at border-b. 
            Ito ang sikreto para walang nagpapatong o umuubrang dobleng linya. */}
        <div className="border-border bg-background grid grid-cols-1 border-t border-l md:grid-cols-3">
          {/* BOX 1 */}
          <div className="border-border hover:bg-card/50 group border-r border-b p-8 transition-colors duration-300">
            <span className="text-primary mb-4 block font-mono text-xs tracking-widest uppercase">
              01 / CONCEPT
            </span>
            <h3 className="font-display group-hover:text-primary mb-3 text-xl font-bold transition-colors">
              Pre-Production
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Scriptwriting, storyboarding, and planning the perfect visual
              strategy tailored for your brand's core audience.
            </p>
          </div>

          {/* BOX 2 */}
          <div className="border-border hover:bg-card/50 group border-r border-b p-8 transition-colors duration-300">
            <span className="text-primary mb-4 block font-mono text-xs tracking-widest uppercase">
              02 / FILMING
            </span>
            <h3 className="font-display group-hover:text-primary mb-3 text-xl font-bold transition-colors">
              Cinematography
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Capturing high-end 4K visuals utilizing professional lighting,
              audio setups, and cinematic camera movements.
            </p>
          </div>

          {/* BOX 3 */}
          <div className="border-border hover:bg-card/50 group border-r border-b p-8 transition-colors duration-300">
            <span className="text-primary mb-4 block font-mono text-xs tracking-widest uppercase">
              03 / CRAFT
            </span>
            <h3 className="font-display group-hover:text-primary mb-3 text-xl font-bold transition-colors">
              Post-Production
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced video editing, sound design, color grading, and motion
              graphics to deliver a polished masterpiece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
