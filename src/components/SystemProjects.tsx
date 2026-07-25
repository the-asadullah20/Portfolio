import { systemProjects } from "@/data/content";
import { ArrowUpRightIcon } from "./Icons";

export default function SystemProjects() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream border-b-2 border-ink">
      {/* Robot background aesthetic — large emoji watermarks */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Main large robot — top right */}
        <span
          className="absolute -top-6 right-4 md:right-16 text-[200px] md:text-[280px] leading-none"
          style={{
            opacity: 0.06,
            filter: "sepia(1) saturate(4) hue-rotate(10deg)",
            color: "#e8541c",
            transform: "rotate(15deg)",
          }}
        >
          🤖
        </span>
        {/* Medium robot — bottom left */}
        <span
          className="absolute bottom-8 -left-8 text-[140px] md:text-[180px] leading-none"
          style={{
            opacity: 0.04,
            transform: "rotate(-20deg) scaleX(-1)",
          }}
        >
          🤖
        </span>
        {/* Small robot — center right */}
        <span
          className="absolute top-1/2 right-1/3 text-[80px] leading-none"
          style={{
            opacity: 0.035,
            transform: "rotate(8deg)",
          }}
        >
          🤖
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 relative">
        <p className="font-mono text-xs tracking-widest text-orange mb-6">
          03 // AI SYSTEMS
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight leading-[0.9]">
            INTELLIGENCE,
            <br />
            APPLIED.
          </h2>
          <p className="text-cream/70 max-w-sm md:text-right">
            Computer vision, financial intelligence, and retrieval systems
            built around practical AI workflows.
          </p>
        </div>
        <div className="mt-8 mb-12 h-1.5 bg-orange/60 w-40" />

        <div className="grid sm:grid-cols-2 gap-6">
          {systemProjects.map((p) => (
            <div key={p.code} className="group border-2 border-cream/30 bg-ink flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-orange">
              <div className="flex items-center justify-between px-5 py-3 border-b border-cream/20 font-mono text-[11px] tracking-widest">
                <span>AI // {p.code}</span>
                <span className="flex items-center gap-2 text-orange">
                  <span className="w-2 h-2 bg-orange inline-block" />
                  AI SYSTEM
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="font-mono text-[11px] tracking-widest text-orange mb-2">
                  {p.tag}
                </p>
                <h3 className="font-display font-black text-2xl md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-cream/70 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] tracking-widest bg-cream/10 px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {(p.github || p.demo) && (
                <div className="flex border-t-2 border-cream/20">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-between px-5 py-3 bg-cream/10 text-cream font-mono text-xs tracking-widest hover:bg-cream/20 transition-colors flex-1`}
                    >
                      Repository
                      <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between px-5 py-3 bg-orange text-ink font-mono text-xs tracking-widest hover:bg-cream transition-colors flex-1 border-l border-cream/20"
                    >
                      Live Demo
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
