<div align="center">

# Opsyx Technologies

![Veteran Owned](https://img.shields.io/badge/Veteran_Owned-EE2B2B?style=for-the-badge&logoColor=white)
![Cybersecurity Driven](https://img.shields.io/badge/Cybersecurity_Driven-333333?style=for-the-badge&logoColor=white)
![Mission Assured](https://img.shields.io/badge/Mission_Assured-5E6B47?style=for-the-badge&logoColor=white)

**Mission-Critical Cybersecurity at the Speed of Relevance**

[![Deploy](https://github.com/OpsyxTechnologies/opsyx-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/OpsyxTechnologies/opsyx-site/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fopsyxtechnologies.com&style=flat-square&label=opsyxtechnologies.com)](https://opsyxtechnologies.com)

[Website](https://opsyxtechnologies.com) · [LinkedIn](https://linkedin.com/company/opsyx-technologies) · [Discord](https://discord.gg/opsyxtechnologies) · [Contact](https://opsyxtechnologies.com/#contact)

</div>

---

## About

Opsyx Technologies is a Service-Disabled Veteran-Owned Small Business (SDVOSB) delivering cybersecurity solutions to federal and commercial clients. This repository contains the source code for the official company website, live at [opsyxtechnologies.com](https://opsyxtechnologies.com).

Core capabilities include Purple Team Operations, Security Automation and Orchestration, Federal Compliance (NIST, CMMC, FedRAMP), and Threat Intelligence Integration.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS + shadcn/ui |
| Data Fetching | TanStack Query 5 |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Domain | opsyxtechnologies.com via CNAME |

---

## Site Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, mission statement, core values, strategic focus, and contact |
| About | `/about` | Company background and team information |
| Services | `/services` | Cybersecurity service offerings and capabilities |
| Work | `/work` | Portfolio and case studies |
| Projects | `/projects` | Technical projects and initiatives |
| Contact | `/contact` | Direct contact form and information |
| 404 | `/*` | Custom military-themed "Target Not Found" page |

---

## Project Structure
```text
opsyx-site/
├── .github/
│   ├── dependabot.yml                 # Dependabot grouped update config
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions deploy to GitHub Pages
├── public/
│   ├── assets/
│   │   └── og-image.png               # OpenGraph social sharing image
│   ├── 404.html                       # SPA fallback for GitHub Pages routing
│   ├── android-chrome-192x192.png     # Android PWA icon
│   ├── android-chrome-512x512.png     # Android PWA icon (large)
│   ├── apple-touch-icon.png           # iOS home screen icon
│   ├── CNAME                          # Custom domain configuration
│   ├── favicon-16x16.png              # Browser tab icon (small)
│   ├── favicon-32x32.png              # Browser tab icon (large)
│   ├── favicon.ico                    # Legacy favicon
│   ├── robots.txt                     # Search engine crawl directives
│   └── sitemap.xml                    # SEO sitemap (6 routes)
├── scripts/
│   └── generate-og-image.cjs          # OG image generation script
├── src/
│   ├── assets/
│   │   ├── hero-command-center.jpg    # Hero background image
│   │   └── tactical-grid.jpg          # Grid background image
│   ├── components/
│   │   ├── layout/                    # Structural components
│   │   │   ├── footer.tsx             # Site footer with social links
│   │   │   ├── nav-header.tsx         # Primary navigation header
│   │   │   └── projects-nav-header.tsx # Projects page navigation
│   │   ├── sections/                  # Page section components
│   │   │   ├── contact-section.tsx    # Contact form and details
│   │   │   ├── core-values.tsx        # Company values display
│   │   │   ├── hero-section.tsx       # Landing hero with CTA
│   │   │   ├── mission-statement.tsx  # Mission and purpose
│   │   │   └── strategic-focus.tsx    # Service focus areas
│   │   └── ui/                        # shadcn/ui component library (50+ components)
│   ├── config/
│   │   ├── navigation.ts             # Route definitions and nav items
│   │   └── site.ts                    # Centralized site metadata and social links
│   ├── hooks/
│   │   ├── use-mobile.tsx             # Responsive breakpoint detection
│   │   └── use-toast.ts              # Toast notification system
│   ├── lib/
│   │   └── utils.ts                   # Utility helpers (cn class merging)
│   ├── pages/
│   │   ├── About.tsx                  # About page
│   │   ├── Contact.tsx                # Contact page
│   │   ├── Index.tsx                  # Home page
│   │   ├── NotFound.tsx               # 404 page (military themed)
│   │   ├── Projects.tsx               # Projects page
│   │   ├── Services.tsx               # Services page
│   │   └── Work.tsx                   # Work/portfolio page
│   ├── App.tsx                        # Root component with router
│   ├── index.css                      # Design system (HSL color tokens)
│   ├── main.tsx                       # Application entry point
│   └── vite-env.d.ts                  # Vite type declarations
├── .env.local.example                 # Environment variable template
├── .gitattributes                     # Git line ending configuration
├── .gitignore                         # Git ignore rules
├── components.json                    # shadcn/ui component configuration
├── index.html                         # HTML entry point with SEO meta and JSON-LD
├── package.json                       # Dependencies and scripts
├── postcss.config.js                  # PostCSS configuration
├── README.md                          # Project documentation
├── SECURITY.md                        # Security policy and vulnerability reporting
├── tailwind.config.ts                 # Tailwind CSS theme and design tokens
├── tsconfig.json                      # TypeScript base configuration
├── tsconfig.app.json                  # TypeScript app configuration
├── tsconfig.node.json                 # TypeScript node configuration
└── vite.config.ts                     # Vite build configuration
```

---

## Design System

The site uses a military-industrial dark theme with HSL color tokens defined in `src/index.css`.

| Token | Role | Value |
|-------|------|-------|
| `--background` | Page background | `#121212` |
| `--foreground` | Primary text | `#F2F2F2` |
| `--alert` | Accent red (CTAs, highlights) | `#EE2B2B` |
| `--ops` | Tactical olive (secondary accent) | `#5E6B47` |
| `--tactical` | Gunmetal (borders, cards) | `#404040` |
| `--border` | Dividers and outlines | `#333333` |
| `--muted-foreground` | Secondary text | `#999999` |

Typography uses Bebas Neue for headings (stencil/military feel) and Inter for body text.

---

## SEO and Integrations

**Structured Data:** JSON-LD Organization schema in `index.html` for Google Business Profile integration.

**Sitemap:** `public/sitemap.xml` registered in `robots.txt` for search engine indexing.

**Social Meta:** Open Graph and Twitter Card meta tags configured for link previews.

**Custom Domain:** `public/CNAME` maps to opsyxtechnologies.com with GitHub Pages HTTPS enforcement.

---

## Deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which installs dependencies, builds the production bundle, and deploys to GitHub Pages. Branch protection on `main` requires passing CI builds and pull request review before merge.

---

## Local Development

**Prerequisites:** Node.js 20+ and npm 10+
```bash
npm install
npm run dev
```

**Production Build:**
```bash
npm run build
npm run preview
```

---

## Security

This repository enforces branch protection, least-privilege CI/CD permissions, and dependency vulnerability monitoring. See [SECURITY.md](SECURITY.md) for the full security policy, coordinated disclosure process, and safe harbor statement.

---

<div align="center">

**Opsyx Technologies LLC** · Veteran-Owned · Cybersecurity-Driven · Mission-Assured

*Defend Forward. Operate Resilient.*

[![Made with Love by Veterans](https://img.shields.io/badge/Made_with_♥_by_Veterans-EE2B2B?style=flat-square&logoColor=white)](https://github.com/opsyxtechnologies)

</div>