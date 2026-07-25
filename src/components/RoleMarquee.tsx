import { roleMarquee } from "@/data/content";

export default function RoleMarquee() {
  const items = [...roleMarquee, ...roleMarquee];
  return (
    <div className="bg-orange border-y-2 border-ink overflow-hidden">
      <div className="flex whitespace-nowrap py-3">
        <div className="marquee-track-slow flex gap-3 pr-3">
          {items.map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs md:text-sm font-bold tracking-widest text-ink flex items-center gap-3"
            >
              {t} <span className="text-cream">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
