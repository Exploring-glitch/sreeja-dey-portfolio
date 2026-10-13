# Sreeja Dey — Developer Portfolio

Personal developer portfolio for **Sreeja Dey**, BCA student at
Techno India University, Kolkata and aspiring full-stack developer.

A minimal, responsive, static single-page site. No backend, no database —
all content lives in one data file.

## Features

- Sticky navbar with anchor navigation and accessible mobile menu
  (Escape-to-close, `aria-expanded` state)
- Hero with clear calls to action (Explore My Work / Get In Touch)
- About, Skills (grouped, no fake proficiency bars), and
  DSA/learning sections
- Featured project cards with verified links only — Live, GitHub,
  and In Progress states are visually distinct
- Education and contact sections (no fake internships, stats, or forms)
- Skip-to-content link, visible focus states, 44px touch targets,
  `prefers-reduced-motion` support, no-JS content fallback
- SEO basics: title, description, theme-color, Open Graph / Twitter metadata

## Technology stack

| Layer   | Choice                                  |
| ------- | --------------------------------------- |
| UI      | React 19                                |
| Build   | Vite 8                                  |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`)   |
| Icons   | `lucide-react` + small inline SVGs for brand marks |
| Fonts   | Inter via Google Fonts (`display=swap`) |
| Lint    | `oxlint`                                |
| Hosting | Vercel (static `dist/` output)          |

## Prerequisites

- Node.js 18+ (developed with Node 24)
- npm (lockfile `package-lock.json` is committed — use npm, not yarn/pnpm)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output goes to `dist/` (git-ignored). Preview it locally with:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

Note: one known `react(purity)` warning about `new Date()` in
`src/components/Footer.jsx` (dynamic copyright year) is expected and harmless.

There is no test suite in this repo — verification is `npm run lint`
plus `npm run build`.

## Deployment (Vercel)

1. Push `main` to GitHub.
2. On [vercel.com](https://vercel.com), import the repository.
3. Framework preset: **Vite**. Build command `npm run build`, output directory
   `dist/` — both are auto-detected; no `vercel.json` needed.
4. Deploy. Every push to `main` redeploys automatically.

## Screenshots

No screenshots committed yet. To add them later, place files under
`public/` (e.g. `public/og-cover.png`) and reference them here and in
`index.html` (`og:image`).

<!--
![Homepage](./public/screenshot-home.png)
![Projects](./public/screenshot-projects.png)
-->

## Featured projects (in display order)

1. **StatiQ** — hiring marketplace streamlining recruitment for
   job seekers and employers: candidates explore opportunities, save
   positions, and apply with personalized pitches; employers publish
   listings, evaluate applicants, and manage candidates through the
   hiring pipeline. Live:
   https://stati-q.vercel.app/
2. **Waverly** — college-focused, LinkedIn-inspired social platform
   (React, Node.js, Express.js, MongoDB). GitHub:
   https://github.com/Exploring-glitch/Waverly — Live:
   https://waverly-six.vercel.app
3. **Task Manager** — role-based task management app with dashboard
   (stack verified against repo source). GitHub:
   https://github.com/Exploring-glitch/Task-Manager
4. **URL Shortener** — MERN URL shortener. Live:
   https://url-shortener-45vx.vercel.app/ — API:
   https://url-shortener-n4ee.onrender.com — GitHub (verified):
   https://github.com/Exploring-glitch/URL-Shortener

## Customising content

All portfolio content lives in `src/data/portfolio.js`:

- `profile.email` — empty by default, so the UI shows an
  "Email on request" placeholder instead of inventing an address.
  Set it to a real public address to enable the `mailto:` button.
- `profile.resumeUrl` — empty by default, so the navbar hides the
  Resume button. Set it to a hosted resume PDF to show it.
- `projects[]` — only add links you have verified; use
  `status: "in-progress"` and omit URLs for unfinished work.

## Project structure

```
index.html               # title, meta, OG tags, font links
public/favicon.svg       # favicon
src/main.jsx             # React entry
src/App.jsx              # section composition + skip link
src/index.css            # Tailwind v4 import, @theme tokens, reveal/focus styles
src/data/portfolio.js    # all content: profile, links, skills, projects
src/hooks/useReveal.js   # IntersectionObserver scroll reveal (no deps)
src/components/          # Navbar, Hero, About, Skills, Projects,
                         # ProjectCard, Dsa, Education, Contact,
                         # Footer, SectionHeading, icons
```

## Links

- GitHub: https://github.com/Exploring-glitch
- LinkedIn: https://www.linkedin.com/in/sreeja-dey-858395317/
- LeetCode: https://leetcode.com/u/sreeja_solves/
