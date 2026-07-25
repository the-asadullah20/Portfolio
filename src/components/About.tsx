"use client";

import { useEffect, useRef, useState } from "react";
import { aboutStats } from "@/data/content";

/** Parse "650+" → { target: 650, suffix: "+" } */
function parseStat(value: string) {
  const suffix = value.replace(/[0-9]/g, "");
  const target = parseInt(value.replace(/[^0-9]/g, ""), 10);
  return { target, suffix };
}

/** Easing function — fast start, slow end */
function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function CountUp({
  target,
  suffix,
  duration = 1800,
  active,
}: {
  target: number;
  suffix: string;
  duration?: number;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target); // ensure exact final value
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.35 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasAnimated]);

  return (
    <section id="about" className="bg-cream border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight">
          ABOUT
        </h2>
        <div className="mt-4 mb-10 flex">
          <span className="w-24 h-1.5 bg-orange" />
          <span className="flex-1 h-1.5 bg-ink" />
        </div>

        <p className="font-display font-bold text-2xl md:text-4xl leading-tight max-w-4xl">
          I&apos;m a Computer Science student at PUCIT and an ICPC 2026 Silver
          Medalist, building practical AI systems and full-stack products
          that blend rigorous problem solving with reliable engineering.
        </p>

        <p className="mt-6 font-body text-muted max-w-2xl leading-relaxed">
          My work spans multimodal RAG platforms, production AI assistants,
          computer-vision pipelines, and adaptive learning tools. I care
          about clean architecture, measurable outcomes, and code that
          survives contact with real users.
        </p>

        {/* Stats grid — count-up triggered on scroll */}
        <div
          ref={sectionRef}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-0 sm:divide-x-2 divide-ink border-2 border-ink"
        >
          {aboutStats.map((s, idx) => {
            const { target, suffix } = parseStat(s.value);
            // stagger each counter slightly
            const delay = idx * 200;

            return (
              <div key={s.label} className="p-6 bg-cream-2">
                <div className="font-display font-black text-4xl md:text-5xl text-orange tabular-nums">
                  {hasAnimated ? (
                    <CountUp
                      target={target}
                      suffix={suffix}
                      duration={1800 + delay}
                      active={hasAnimated}
                    />
                  ) : (
                    <span>0{suffix}</span>
                  )}
                </div>
                <div className="font-mono text-[11px] tracking-widest mt-2">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
