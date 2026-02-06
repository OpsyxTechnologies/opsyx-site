<div align="center">

# OPSYX TECHNOLOGIES

**Mission-Critical Cybersecurity at the Speed of Relevance**

[![Deploy](https://github.com/OpsyxTechnologies/opsyx-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/OpsyxTechnologies/opsyx-site/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fopsyxtechnologies.com)](https://opsyxtechnologies.com)

[Website](https://opsyxtechnologies.com) • [LinkedIn](https://linkedin.com/company/opsyx-technologies) • [Contact](https://opsyxtechnologies.com/#contact)

</div>

---

## About

Opsyx Technologies is a **Service-Disabled Veteran-Owned Small Business (SDVOSB)** delivering cybersecurity solutions to federal and commercial clients.

**Core Capabilities**
- Purple Team Operations
- Security Automation & Orchestration
- Federal Compliance (NIST, CMMC, FedRAMP)
- Threat Intelligence Integration

---

## Tech Stack (Current)

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 7 |
| Routing | React Router DOM 6 |
| Styling | Tailwind CSS + shadcn/ui |
| Data Fetching | TanStack Query 5 |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

---

## Local Development

### Prerequisites
- Node.js 20+
- npm 10+

### Install and Run
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

Latest successful local production build (from this repo):
- `vite v7.3.1`
- `1674 modules transformed`
- Output includes:
  - `dist/assets/index-Cf-23t3l.js` (365.09 kB, gzip 112.58 kB)
  - `dist/assets/index-D7mq7Vcl.css` (70.48 kB, gzip 12.22 kB)

### Other Scripts
```bash
npm run preview
npm run build:dev
npm run lint
```

> Note: `npm run lint` currently points to `config/eslint.config.js`, which is not present in this repository.

---

## Project Structure

```text
src/
  components/        # UI primitives and section/layout components
  config/            # Site metadata + navigation config
  pages/             # Route-level page components
  hooks/             # Reusable React hooks
  lib/               # Utility helpers
public/              # Static files, SEO artifacts, and domain config
```

---

<div align="center">

**© Opsyx Technologies** — Defend Forward. Operate Resilient.

</div>
