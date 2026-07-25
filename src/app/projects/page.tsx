import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { featuredProjects, systemProjects, type Project } from "@/data/content";
import { ArrowUpRightIcon, InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "All Projects | Asadullah Ahmad",
  description:
    "Full catalogue of projects by Asadullah Ahmad — RAG platforms, AI systems, full-stack products, competitive programming tools, and more.",
};

function ProjectCard({ p, featured }: { p: Project; featured?: boolean }) {
  return (
    <div className="group border-2 border-ink bg-cream flex flex-col card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-orange hover:shadow-[8px_8px_0_0_var(--orange)]">
      {/* Image — only for featured projects */}
      {featured && p.image && (
        <div className="relative w-full aspect-[16/10] border-b-2 border-ink overflow-hidden bg-ink">
          <Image
            src={p.image}
            alt={`${p.title} screenshot`}
            fill
            className="object-cover object-top img-zoom-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span className="absolute top-3 right-3 bg-orange text-cream font-mono text-[10px] tracking-widest px-3 py-1.5 border-2 border-ink">
            FEATURED
          </span>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col">
        {/* Code + tag */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] tracking-widest text-orange">
            {p.tag}
          </span>
          <span className="font-mono text-[10px] tracking-widest text-ink/40">
            {p.code}
          </span>
        </div>

        <h3 className="font-display font-black text-xl md:text-2xl leading-tight">
          {p.title}
        </h3>

        <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
          {p.desc}
        </p>

        {/* Stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] tracking-widest border border-ink px-2 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      {(p.demo || p.github) && (
        <div className="flex border-t-2 border-ink">
          {p.demo && p.demo !== "#" && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 flex-1 px-4 py-3 bg-orange text-ink font-mono text-[10px] tracking-widest hover:bg-ink hover:text-cream transition-colors"
            >
              <ArrowUpRightIcon className="w-3.5 h-3.5" /> LIVE DEMO
            </a>
          )}
          {p.github && p.github !== "#" && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-1.5 flex-1 px-4 py-3 border-ink font-mono text-[10px] tracking-widest hover:bg-ink hover:text-cream transition-colors ${
                p.demo && p.demo !== "#"
                  ? "border-l-2 bg-cream"
                  : "bg-ink text-cream hover:bg-orange"
              }`}
            >
              <InfoIcon className="w-3.5 h-3.5" /> GITHUB
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function AllProjectsPage() {
  const allProjects: (Project & { featured?: boolean })[] = [
    ...featuredProjects.map((p) => ({ ...p, featured: true })),
    ...systemProjects,
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream">
        {/* Header */}
        <section className="border-b-2 border-ink grid-bg">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
            <p className="font-mono text-xs tracking-widest text-orange mb-4">
              ALL WORK // {allProjects.length} PROJECTS
            </p>
            <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight leading-[0.9]">
              FULL
              <br />
              <span className="text-orange">CATALOGUE.</span>
            </h1>
            <div className="mt-6 h-1.5 bg-ink w-full" />
            <p className="mt-4 font-body text-muted max-w-xl">
              Every project I&apos;ve shipped — from production AI platforms and
              RAG pipelines to systems simulations and competitive programming
              tools. Updated as I build.
            </p>

            <a
              href="/#projects"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-widest border-2 border-ink px-4 py-2 hover:bg-ink hover:text-cream transition-colors"
            >
              ← BACK TO PORTFOLIO
            </a>
          </div>
        </section>

        {/* Projects grid */}
        <section className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((p) => (
              <ProjectCard key={p.code} p={p} featured={p.featured} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
