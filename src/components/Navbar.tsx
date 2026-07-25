"use client";

import { useEffect, useState } from "react";
import BatLogo from "./BatLogo";
import { CoffeeIcon } from "./Icons";
import { navLinks, profile } from "@/data/content";

function NavIcon({ label }: { label: string }) {
  switch (label) {
    case "ABOUT":
      return (
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0H3Z" />
        </svg>
      );
    case "RESUME":
      return (
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm4 1v1h4V3H6Zm0 3v1h4V6H6Zm0 3v1h2V9H6Z" />
        </svg>
      );
    case "PROJECTS":
      return (
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
          <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.172a2 2 0 0 1 1.414.586L8.5 3.293A1 1 0 0 0 9.207 3.5H13.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V3.87z" />
        </svg>
      );
    case "CONTACT":
      return (
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("ABOUT");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id === "about" ? "about" : id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const link = navLinks.find((l) => l.href === `#${id}`);
            if (link) setActive(link.label);
          }
        },
        { threshold: 0.25, rootMargin: "-60px 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b-2 border-ink">
      <div className="h-1.5 bg-orange" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <BatLogo className="w-9 h-6" color="var(--ink)" />
          <span className="leading-tight">
            <span className="block font-display font-black tracking-tight text-lg">ASADULLAH</span>
            <span className="block font-mono text-[11px] text-orange tracking-widest">{profile.role}</span>
          </span>
        </a>

        <nav
          className="hidden md:flex items-stretch border-2 border-ink divide-x-2 divide-ink overflow-hidden"
          style={{ boxShadow: "4px 4px 0 var(--orange)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-5 py-2.5 font-mono text-xs tracking-widest flex items-center gap-1.5 transition-colors text-ink hover:bg-ink hover:text-cream"
            >
              {/* orange bottom bar on hover */}
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              {/* icon: orange by default, cream on hover */}
              <span className="shrink-0 text-orange group-hover:text-cream transition-colors">
                <NavIcon label={l.label} />
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.buyMeACoffee}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest px-3 py-2 border-2 border-ink bg-ink text-cream hover:bg-orange hover:border-orange transition-colors inline-flex items-center gap-1.5"
          >
            <CoffeeIcon className="w-3.5 h-3.5" /> BUY ME A COFFEE
          </a>
          <span className="font-mono text-xs tracking-widest px-3 py-2 border-2 border-ink flex items-center gap-2">
            <span className="w-2 h-2 bg-orange inline-block" />
            OPEN FOR WORK
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden border-2 border-ink px-3 py-2 font-mono text-xs"
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t-2 border-ink bg-cream">
          <nav className="flex flex-col divide-y-2 divide-ink">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => { setOpen(false); setActive(l.label); }}
                className={`px-5 py-3 font-mono text-xs tracking-widest flex items-center gap-2 ${
                  active === l.label ? "bg-ink text-cream" : ""
                }`}
              >
                <NavIcon label={l.label} />
                {l.label}
              </a>
            ))}
            <a
              href={profile.buyMeACoffee}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 font-mono text-xs tracking-widest bg-ink text-cream inline-flex items-center gap-1.5"
            >
              <CoffeeIcon className="w-3.5 h-3.5" /> BUY ME A COFFEE
            </a>
            <span className="px-5 py-3 font-mono text-xs tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-orange inline-block" />
              OPEN FOR WORK
            </span>
          </nav>
        </div>
      )}
    </header>
  );
}
