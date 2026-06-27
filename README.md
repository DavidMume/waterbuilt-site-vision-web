# WaterBuilt Site Vision — Project Page

Interactive portfolio case study for [WaterBuilt Site Vision](https://github.com/DavidMume/waterbuilt-site-vision), an always-on AI construction site safety monitor.

> **Portfolio project page.** This is the landing page / case study, not the Python service itself. The Python service lives at the repo above.

---

## What this page covers

- Cinematic hero with animated construction-site camera feed
- 7-step pipeline walkthrough (camera → AI → checklist → risk → PDF → SQLite → n8n)
- 16-item compliance checklist with status/severity breakdown (demo data)
- Simulated AI vision overlay with detection boxes
- Risk scoring dashboard (demo KPI cards)
- PDF audit report mockup
- n8n webhook alert workflow
- System architecture breakdown
- Technology stack
- Business/safety value case
- Limitations and honest notes
- Bilingual ES / EN throughout

---

## Stack

- **React 18** + **TypeScript** + **Vite 5** + **Tailwind CSS 3**
- **Framer Motion** (animations) + **Lenis** (smooth scroll)
- **Lucide React** (icons)
- Bilingual system via `src/i18n/translations.ts`

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Build

```bash
npm run build
# output: dist/
npm run preview   # preview production build locally
```

---

## Edit bilingual content

All translatable strings are in one file:

```
src/i18n/translations.ts
```

The file exports a `translations` object with `en` and `es` keys containing the full content tree. Edit either key to update the corresponding language.

---

## Update demo data

Demo values (KPI placeholders, checklist statuses, detection boxes, PDF sample values) are embedded in `src/i18n/translations.ts` alongside the UI copy. Search for `demoNote`, `demoLabel`, `kpis`, `categories`, or `sampleValues` in that file.

---

## Deploy to Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → Create application → Pages → Connect to Git
3. Select `waterbuilt-site-vision-web`
4. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Node.js version:** 18 (set `NODE_VERSION=18` in environment variables)
5. Deploy

Every push to `main` triggers an automatic redeploy.

---

## Add to portfolio index

In the main portfolio project, open `src/data/projects.js` and find the entry with `slug: 'waterbuilt-site-vision'`. Update `liveUrl` with the Cloudflare Pages URL once deployed.

---

## Project structure

```
waterbuilt-site-vision-web/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── i18n/
    │   └── translations.ts        ← all bilingual content + demo data
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx               ← animated crane silhouettes + camera feed
        ├── Summary.tsx
        ├── Pipeline.tsx           ← animated 7-node pipeline diagram
        ├── Checklist.tsx          ← 16-item compliance checklist grid
        ├── VisionDemo.tsx         ← simulated AI vision overlay
        ├── Dashboard.tsx          ← KPI cards (demo data)
        ├── PDFPreview.tsx         ← PDF report mockup
        ├── N8nSection.tsx         ← webhook alert flow
        ├── Architecture.tsx
        ├── TechStack.tsx
        ├── WhyItMatters.tsx
        ├── Limitations.tsx
        ├── Author.tsx
        └── Footer.tsx
```

---

## Disclaimer

This page describes a portfolio prototype. WaterBuilt Site Vision is not:
- Certified safety infrastructure
- Approved for use as primary emergency communication
- A replacement for qualified physical inspections

Numerical claims are illustrative demo placeholders.

---

## Author

**Juan David Muñoz Mendivelso** · [@DavidMume](https://github.com/DavidMume)  
Data journalist · Developer · Brisbane, Australia  
Portfolio: [juandamunoz.com](https://juandamunoz.com/)
