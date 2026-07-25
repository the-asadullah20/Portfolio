import { profile } from "@/data/content";
import { CoffeeIcon, GitHubIcon, GlobeIcon, InstagramIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <p className="font-mono text-xs tracking-widest text-orange mb-6">
          05 // COMMS
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-muted max-w-sm md:text-right">
            I&apos;m always open to discussing new projects, competitive
            programming teams, or opportunities to be part of your vision.
          </p>
        </div>
        <div className="mt-8 mb-12 h-1.5 bg-ink w-full" />

        <div className="grid sm:grid-cols-3 border-2 border-ink divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-ink">
          <div className="p-8 bg-cream-2">
            <div className="w-11 h-11 bg-orange border-2 border-ink flex items-center justify-center mb-4">
              <MailIcon className="w-5 h-5 text-ink" />
            </div>
            <p className="font-display font-black text-lg">EMAIL ME</p>
            <p className="text-sm text-muted mt-1">Drop me a line anytime</p>
            <a
              href={`mailto:${profile.email}`}
              className="block mt-3 text-orange font-medium break-all hover:underline"
            >
              {profile.email}
            </a>
          </div>

          <div className="p-8 bg-cream-2">
            <div className="w-11 h-11 bg-orange border-2 border-ink flex items-center justify-center mb-4">
              <PhoneIcon className="w-5 h-5 text-ink" />
            </div>
            <p className="font-display font-black text-lg">CALL ME</p>
            <p className="text-sm text-muted mt-1">Mon–Fri from 9am to 6pm</p>
            <a
              href={`tel:${profile.phoneHref}`}
              className="block mt-3 text-orange font-medium hover:underline"
            >
              {profile.phone}
            </a>
          </div>

          <div className="p-8 bg-cream-2">
            <div className="w-11 h-11 bg-orange border-2 border-ink flex items-center justify-center mb-4">
              <MapPinIcon className="w-5 h-5 text-ink" />
            </div>
            <p className="font-display font-black text-lg">VISIT ME</p>
            <p className="text-sm text-muted mt-1">Come say hello</p>
            <p className="mt-3 text-orange font-medium">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="font-display font-black text-2xl">
            CONNECT ON SOCIAL MEDIA
          </p>
          <div className="flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 border-2 border-ink bg-ink text-cream flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 border-2 border-ink bg-ink text-cream flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 border-2 border-ink bg-ink text-cream flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
              aria-label="LeetCode"
            >
              <GlobeIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 border-2 border-ink bg-ink text-cream flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.buyMeACoffee}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 border-2 border-ink bg-orange text-ink flex items-center justify-center hover:bg-ink hover:text-cream transition-colors"
              aria-label="Buy me a coffee"
            >
              <CoffeeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
