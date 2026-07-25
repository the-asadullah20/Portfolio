import Image from "next/image";
import { featuredProjects } from "@/data/content";
import { ArrowUpRightIcon, InfoIcon } from "./Icons";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-cream border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <p className="font-mono text-xs tracking-widest text-orange mb-6">
          04 // SELECTED WORK
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight leading-[0.9]">
            FEATURED
            <br />
            PROJECTS
          </h2>
          <p className="text-muted max-w-sm md:text-right">
            A selection of work across full-stack AI products, RAG
            platforms, and computer-vision tools.
          </p>
        </div>
        <div className="mt-8 mb-12 h-1.5 bg-ink w-full" />

        <div className="grid sm:grid-cols-2 gap-8">
          {featuredProjects.map((p) => (
            <div
              key={p.code}
              className="group border-2 border-ink bg-cream flex flex-col card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-orange hover:shadow-[8px_8px_0_0_var(--orange)]"
            >
              <div className="relative w-full aspect-[16/10] border-b-2 border-ink overflow-hidden bg-ink">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={`${p.title} product UI`}
                    fill
                    className="object-cover object-top img-zoom-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                <span className="absolute top-3 right-3 bg-orange text-cream font-mono text-[10px] tracking-widest px-3 py-1.5 border-2 border-ink">
                  FEATURED
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="font-mono text-[11px] tracking-widest text-orange mb-2">
                  {p.tag}
                </p>
                <h3 className="font-display font-black text-2xl md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] tracking-widest border border-ink px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-cream font-mono text-xs tracking-widest hover:bg-orange transition-colors"
                    >
                      <ArrowUpRightIcon className="w-3.5 h-3.5" /> LIVE DEMO
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-ink font-mono text-xs tracking-widest hover:bg-ink hover:text-cream transition-colors"
                    >
                      <InfoIcon className="w-3.5 h-3.5" /> FULL DETAILS
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-ink bg-ink text-cream font-mono text-xs tracking-widest hover:bg-orange hover:border-orange transition-colors"
          >
            VIEW ALL PROJECTS
            <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
