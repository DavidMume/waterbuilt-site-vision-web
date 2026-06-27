# SiteGuard Vision — Project Page

Interactive portfolio case study for [SiteGuard Vision](https://github.com/DavidMume/waterbuilt-site-vision), an AI-powered construction site safety monitor.

> **Portfolio project page.** This is the landing page / case study, not the Python service itself. The Python service (camera capture, Claude Vision analysis, PDF generation, n8n alerts) lives in the repository linked above.

---

## What this page covers

- Cinematic dark hero with animated construction-site camera feed
- 7-step pipeline: camera → AI analysis → checklist scoring → risk classification → PDF report → SQLite log → n8n alert
- 16-item compliance checklist with status/severity grid (demo data)
- Simulated AI vision overlay with detection bounding boxes
- Risk scoring dashboard (KPI cards, clearly marked as demo)
- PDF audit report mockup
- n8n webhook alert workflow diagram
- System architecture breakdown (5 layers)
- Technology stack cards
- Business and safety value case
- Limitations and honest notes
- Bilingual ES / EN throughout

---

## Stack

- **React 18** + **TypeScript** + **Vite 5** + **Tailwind CSS 3**
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

All translatable strings — including demo data — live in a single file:

```
src/i18n/translations.ts
```

The file exports a `translations` object with `en` and `es` keys. Edit either key to update the corresponding language. Search for these keys to find specific sections:

| Section | Key |
|---|---|
| Hero | `hero` |
| Executive summary | `summary` |
| Pipeline steps | `pipeline.nodes` |
| Compliance checklist | `checklist.categories` |
| AI vision detections | `vision.detections` |
| Dashboard KPIs | `dashboard.kpis` |
| PDF sample values | `pdf.sampleValues` |
| n8n payload | `n8n.payload` |
| Architecture layers | `architecture.layers` |
| Tech stack | `stack.items` |
| Limitations | `limitations.items` |

---

## Update demo data

Demo values (KPI placeholders, checklist statuses, detection boxes, PDF sample values) are embedded in `src/i18n/translations.ts` alongside the UI copy. They are clearly marked with `demoNote`, `demoLabel`, or `Demo data` labels in the UI.

---

## Add/update in the main portfolio index

In the main portfolio project, open `src/data/projects.js` and find the entry with `slug: 'waterbuilt-site-vision'`. The `liveUrl` should point to:

```
https://siteguard-vision.pages.dev
```

---

## Deploy to Cloudflare Pages

1. Push this repository to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → Create application → Pages → Connect to Git
3. Select the repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Node.js version:** 18 (add `NODE_VERSION=18` to environment variables)
5. Deploy

Every push to `main` triggers an automatic redeploy.

---

## Project structure

```
waterbuilt-site-vision-web/    ← folder name (repo slug kept for continuity)
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
        ├── Hero.tsx
        ├── Summary.tsx
        ├── Pipeline.tsx
        ├── Checklist.tsx
        ├── VisionDemo.tsx
        ├── Dashboard.tsx
        ├── PDFPreview.tsx
        ├── N8nSection.tsx
        ├── Architecture.tsx
        ├── TechStack.tsx
        ├── WhyItMatters.tsx
        ├── Limitations.tsx
        ├── Author.tsx
        └── Footer.tsx
```

---

## Disclaimer

This page describes a portfolio prototype. SiteGuard Vision is not:
- Certified safety infrastructure
- Approved for use as primary emergency communication
- A replacement for qualified physical inspections or certified safety management systems

Numerical claims shown are illustrative demo placeholders.

---

## Author

**Juan David Muñoz Mendivelso** · [@DavidMume](https://github.com/DavidMume)  
Data journalist · Developer · Brisbane, Australia  
Portfolio: [juandamunoz.com](https://juandamunoz.com/)
