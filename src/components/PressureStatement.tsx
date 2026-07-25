export default function PressureStatement() {
  return (
    <section className="relative overflow-hidden bg-cream border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 relative">
        <p className="font-mono text-xs tracking-widest text-orange mb-6">
          02 // BUILT UNDER PRESSURE
        </p>
        <p className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] max-w-4xl">
          I ship RAG pipelines and full-stack products the same week I&apos;m
          debugging a graph problem at 2AM for the next contest.
        </p>
        <p className="mt-8 font-display font-bold text-xl md:text-2xl text-orange max-w-2xl">
          Powered by caffeine, competitive programming, and a genuine love
          for systems that actually work in production.
        </p>

        <svg
          className="absolute right-[-40px] bottom-[-30px] w-64 h-64 md:w-96 md:h-96 opacity-[0.06] pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="46" stroke="var(--ink)" strokeWidth="2" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="var(--ink)" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
}
