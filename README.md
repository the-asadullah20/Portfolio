# Asadullah Ahmad — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 portfolio, styled after the
reference design you shared (cream/black/orange, bold display type, mono labels).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Next.js (auto-detected). No env vars needed.
4. Deploy.

## Before you deploy — update these placeholders

Open `src/data/content.ts` and update:

- `github`, `linkedin`, `leetcode` — real profile URLs (currently placeholders)
- `buyMeACoffee` — your real Buy Me a Coffee page URL
- Anything else you want to tweak (achievements, stats, skill %s)

## Assets

- `public/resume/Asadullah_Ahmad_Resume.pdf` — swap this file to update the downloadable resume (keep the same filename, or update the path in `content.ts`).
- `public/images/` — project screenshots (pixora, baatkaro, shanakht, lumio), your profile photo, and the two award photos. Replace any of these directly to update the site.

## Structure

- `src/app/page.tsx` — assembles all sections
- `src/components/` — one file per section (Navbar, Hero, TechMarquee, PressureStatement, About, Resume, SystemProjects, RoleMarquee, FeaturedProjects, Contact, Footer)
- `src/data/content.ts` — all text content in one place, edit here first
