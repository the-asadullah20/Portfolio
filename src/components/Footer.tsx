import BatLogo from "./BatLogo";
import { ArrowUpRightIcon, CoffeeIcon, GitHubIcon, GlobeIcon, InstagramIcon, LinkedInIcon } from "./Icons";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 border-b border-cream/15">
        <p className="font-mono text-xs tracking-widest text-orange mb-6">
          LET&apos;S COLLABORATE
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
            MAKE THE
            <br />
            NEXT BUILD{" "}
            <span className="text-orange">COUNT.</span>
          </h2>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-orange text-ink font-mono text-xs tracking-widest px-6 py-4 hover:bg-cream transition-colors"
          >
            Start a conversation <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <BatLogo className="w-9 h-6" color="var(--cream)" />
          <div>
            <p className="font-display font-black text-sm tracking-tight">
              ASADULLAH AHMAD
            </p>
            <p className="text-xs text-cream/60">
              Building intelligent systems with rigor and precision.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 border border-cream/30 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 border border-cream/30 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 border border-cream/30 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
            aria-label="LeetCode"
          >
            <GlobeIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 border border-cream/30 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.buyMeACoffee}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 border border-cream/30 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
            aria-label="Buy me a coffee"
          >
            <CoffeeIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-cream/50 relative z-10">
        <p>PORTFOLIO // SYSTEM ONLINE</p>
        <p>© 2026 Asadullah Ahmad. All rights reserved.</p>
      </div>

      <div className="pointer-events-none select-none absolute -bottom-6 left-0 w-full text-center font-display font-black text-[16vw] leading-none text-cream/[0.04] whitespace-nowrap">
        Asadullah Ahmad
      </div>
    </footer>
  );
}
