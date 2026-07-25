"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import { DownloadIcon } from "./Icons";

const PHRASES = [
  "RAG SYSTEMS BUILDER",
  "AI/ML ENGINEER",
  "FULL STACK DEVELOPER",
  "COMPETITIVE PROGRAMMER",
];

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let current = 0;
    const tick = () => {
      const text = PHRASES[current];
      setTyped(text.slice(0, i));
      if (!deleting) {
        if (i < text.length) { i++; }
        else { deleting = true; return setTimeout(tick, 1400); }
      } else {
        if (i > 0) { i--; }
        else { deleting = false; current = (current + 1) % PHRASES.length; }
      }
      setTimeout(tick, deleting ? 35 : 85);
    };
    const id = setTimeout(tick, 400);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden grid-bg border-b-2 border-ink"
      style={{ minHeight: "100vh" }}
    >
      {/* ── </> watermark — right half, positioned higher in hero section ── */}
      <div
        className="hero-float pointer-events-none select-none absolute"
        aria-hidden="true"
        style={{
          right: "1%",
          top: "12%",
          width: "44%",
          height: "72vh",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 460 500"
          width="100%"
          height="100%"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* < */}
          <polyline
            points="120,160 20,270 120,380"
            stroke="#e8541c"
            strokeWidth="42"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.14"
          />
          {/* / */}
          <line
            x1="180"
            y1="460"
            x2="245"
            y2="60"
            stroke="#e8541c"
            strokeWidth="42"
            strokeLinecap="round"
            strokeOpacity="0.14"
          />
          {/* > — shifted right for extra spacing */}
          <polyline
            points="310,140 410,250 310,360"
            stroke="#e8541c"
            strokeWidth="42"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.14"
          />
        </svg>
      </div>

      <div
        className="mx-auto max-w-7xl w-full px-5 md:px-8 relative flex flex-col"
        style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2.5rem" }}
      >
        {/* ── Top meta row ── */}
        <div className="flex items-center justify-between font-mono text-xs tracking-widest">
          <span>PORTFOLIO // 2026</span>
          <span className="hidden sm:flex items-center gap-2 text-orange">
            <span className="w-2 h-2 bg-orange inline-block" />
            AVAILABLE FOR SELECTED WORK
          </span>
        </div>

        {/* ── Orange square with retro black shadow ── */}
        <div className="absolute z-10" style={{ right: "1.5rem", top: "5rem" }}>
          <div className="absolute bg-ink" style={{ inset: 0, transform: "translate(6px,6px)" }} />
          <div className="relative bg-orange border-2 border-ink" style={{ width: 76, height: 76 }} />
        </div>

        {/* ── Name — 7.5vw so ASADULLAH fits in ~50% width ── */}
        <h1
          className="fade-up font-display font-black tracking-tight select-none relative"
          style={{
            fontSize: "clamp(2.4rem, 7.5vw, 7.5rem)",
            lineHeight: 0.9,
            margin: "auto 0",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <span className="block text-ink">ASADULLAH</span>
          <span className="block text-orange">AHMAD.</span>
        </h1>

        {/* ── Bottom CTA row ── */}
        <div className="border-t-2 border-ink pt-5 flex flex-col md:flex-row md:items-end justify-between gap-5 relative">
          <p className="font-mono text-sm md:text-base">
            BUILDING AS A{" "}
            <span className="text-orange font-bold">
              {typed}
              <span className="caret">_</span>
            </span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 bg-ink text-cream border-2 border-ink font-mono text-xs tracking-widest hover:bg-orange hover:border-orange transition-colors"
            >
              VIEW SELECTED WORK
            </a>
            <a
              href="#contact"
              className="px-5 py-3 bg-cream text-ink border-2 border-ink font-mono text-xs tracking-widest hover:bg-ink hover:text-cream transition-colors"
            >
              START A CONVERSATION
            </a>
            <a
              href={profile.resumePath}
              download
              className="px-5 py-3 bg-orange text-cream border-2 border-orange font-mono text-xs tracking-widest hover:bg-ink hover:border-ink transition-colors inline-flex items-center gap-2"
            >
              <DownloadIcon className="w-3.5 h-3.5" /> DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
