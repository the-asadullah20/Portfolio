import Image from "next/image";
import {
  profile,
  experience,
  education,
  skillBars,
  softSkills,
  achievements,
} from "@/data/content";
import {
  BriefcaseIcon,
  CoffeeIcon,
  DownloadIcon,
  GitHubIcon,
  GlobeIcon,
  GraduationCapIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TrophyIcon,
} from "./Icons";

export default function Resume() {
  return (
    <section id="resume" className="bg-cream border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight leading-[0.9]">
            ENGINEERING
            <br />
            PROFILE
          </h2>
          <p className="font-body text-muted max-w-sm md:text-right">
            AI systems, competitive programming, production delivery, and
            practical software engineering.
          </p>
        </div>
        <div className="mt-4 mb-10 h-1.5 bg-ink w-full" />

        <div className="grid md:grid-cols-[320px_1fr] border-2 border-ink">
          {/* Sidebar */}
          <div className="bg-ink text-cream flex flex-col">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/images/profile.jpg"
                alt="Asadullah Ahmad"
                fill
                className="object-cover grayscale"
                sizes="320px"
              />
            </div>
            <div className="p-6 border-t-2 border-orange">
              <p className="font-display font-black text-lg tracking-tight">
                {profile.name.toUpperCase()}
              </p>
              <p className="font-mono text-[11px] text-orange tracking-widest mt-1">
                COMPUTER SCIENCE · AI/ML
              </p>

              <div className="mt-6 pt-6 border-t border-cream/20 space-y-3">
                <p className="font-mono text-[11px] tracking-widest text-orange">
                  CONTACT
                </p>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm hover:text-orange break-all">
                  <MailIcon className="w-3.5 h-3.5 shrink-0" /> {profile.email}
                </a>
                <a href={`tel:${profile.phoneHref}`} className="flex items-center gap-2 text-sm hover:text-orange">
                  <PhoneIcon className="w-3.5 h-3.5 shrink-0" /> {profile.phone}
                </a>
                <p className="flex items-center gap-2 text-sm">
                  <MapPinIcon className="w-3.5 h-3.5 shrink-0" /> {profile.location}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-cream/20 space-y-3">
                <p className="font-mono text-[11px] tracking-widest text-orange">
                  LINKS
                </p>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-orange">
                  <GitHubIcon className="w-3.5 h-3.5 shrink-0" /> {profile.githubHandle}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-orange">
                  <LinkedInIcon className="w-3.5 h-3.5 shrink-0" /> {profile.linkedinHandle}
                </a>
                <a href={profile.leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-orange">
                  <GlobeIcon className="w-3.5 h-3.5 shrink-0" /> {profile.leetcodeHandle}
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-cream/20">
                <p className="font-mono text-[11px] tracking-widest text-orange mb-4">
                  TECHNICAL SKILLS
                </p>
                <div className="space-y-4">
                  {skillBars.map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{s.label}</span>
                        <span className="text-orange">{s.value}%</span>
                      </div>
                      <div className="h-1.5 bg-cream/15">
                        <div
                          className="h-1.5 bg-orange"
                          style={{ width: `${s.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-cream/20">
                <p className="font-mono text-[11px] tracking-widest text-orange mb-3">
                  SOFT SKILLS
                </p>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] tracking-widest border border-cream/30 px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={profile.resumePath}
                download
                className="mt-8 flex items-center justify-center gap-2 text-center bg-orange text-cream font-mono text-xs tracking-widest py-3 hover:bg-cream hover:text-ink transition-colors"
              >
                <DownloadIcon className="w-3.5 h-3.5" /> DOWNLOAD RESUME
              </a>
              <a
                href={profile.buyMeACoffee}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 text-center border border-cream/40 text-cream font-mono text-xs tracking-widest py-3 hover:bg-cream hover:text-ink transition-colors"
              >
                <CoffeeIcon className="w-3.5 h-3.5" /> BUY ME A COFFEE
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="bg-cream-2 p-6 md:p-10">
            <div>
              <h3 className="font-display font-black text-2xl">INTRODUCTION</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Computer Science student and ICPC 2026 Silver Medalist
                focused on practical AI systems, robust backend services,
                and full-stack product delivery. I build RAG pipelines,
                agentic workflows, and computer-vision systems with an
                emphasis on reliability and measurable outcomes.
              </p>
            </div>

            <hr className="my-8 border-ink" />

            <div>
              <h3 className="font-display font-black text-2xl flex items-center gap-2">
                <BriefcaseIcon className="w-6 h-6" /> WORK EXPERIENCE
              </h3>
              <div className="mt-4 space-y-8">
                {experience.map((e) => (
                  <div key={e.title}>
                    <p className="font-bold">{e.title}</p>
                    <p className="font-mono text-[11px] text-orange tracking-widest mt-1">
                      {e.org.toUpperCase()} · {e.period.toUpperCase()}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {e.points.map((pt) => (
                        <li key={pt} className="text-sm text-ink-soft flex gap-2">
                          <span className="text-orange">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-8 border-ink" />

            <div>
              <h3 className="font-display font-black text-2xl flex items-center gap-2">
                <GraduationCapIcon className="w-6 h-6" /> EDUCATION
              </h3>
              <p className="mt-3 font-bold">{education.degree}</p>
              <p className="font-mono text-[11px] text-orange tracking-widest mt-1">
                {education.school.toUpperCase()} · {education.period.toUpperCase()}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{education.detail}</p>
            </div>

            <hr className="my-8 border-ink" />

            <div>
              <h3 className="font-display font-black text-2xl flex items-center gap-2">
                <TrophyIcon className="w-6 h-6" /> ACHIEVEMENTS
              </h3>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                {achievements.map((a) => (
                  <div key={a.title} className="border-2 border-ink p-4 bg-cream flex flex-col gap-2">
                    {a.badge && (
                      <Image
                        src={a.badge}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    )}
                    <p className="font-mono text-xs font-bold tracking-wide">
                      {a.title}
                    </p>
                    <p className="text-xs text-muted">{a.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="relative aspect-square border-2 border-ink overflow-hidden">
                  <Image
                    src="/images/icpc-medal.jpg"
                    alt="ICPC 2026 Silver Medal — biting the medal"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="relative aspect-square border-2 border-ink overflow-hidden">
                  <Image
                    src="/images/award-trophy.jpeg"
                    alt="VisioSpark 2025 winner trophy, COMSATS Wah Campus"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="relative aspect-square border-2 border-ink overflow-hidden">
                  <Image
                    src="/images/award-ceremony.jpeg"
                    alt="Award ceremony on stage"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
