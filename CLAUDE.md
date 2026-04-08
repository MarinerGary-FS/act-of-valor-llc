# CLAUDE.md — Act of Valor Agent Operating File

> This file is the primary operating context for Claude Code and any AI agent working in this repository.
> Read this file in full before taking any action. Do not skip sections.

---

## Project Identity

- **Project name:** Act of Valor
- **Client:** Act of Valor LLC
- **Profile:** A — Lead-Gen (see STACK.md for profile definitions)
- **Primary URL:** https://actofvalorllc.com
- **Repo:** https://github.com/MarinerGary-FS/act-of-valor-llc

---

## Stack Summary

This project uses the Mariner Nexus Elite Frontend Stack. The full spec lives in STACK.md.

Quick reference:
- Framework: Next.js 16 (App Router)
- UI: Tailwind CSS v4
- Forms: React Hook Form + Zod
- State: Zustand
- Motion: Framer Motion (Profile A — no GSAP/Lenis)
- Deployment: Vercel

---

## Run Commands

```bash
npm run dev          # Start local dev server
npm run build        # Production build — must pass with zero errors
npm run lint         # ESLint — must pass before any PR
```

If any command fails, stop and report the error. Do not proceed past a broken build.

---

## Project Architecture

```
/app                    Next.js App Router pages and layouts
  page.tsx              Homepage
  layout.tsx            Root layout with metadata + schema
  globals.css           Design tokens + base styles
/components
  /layout               Header, Footer, Section, Container
  /sections             Page section components
/lib
  constants.ts          All copy, data, and configuration
  motion.ts             Framer Motion presets and variants
/styles
  globals.css           Additional global styles
/public
  /credentials          Certification images (PNG)
  /images               Logo and brand assets
DESIGN_TOKENS.md        Token definitions (source of truth)
COMPONENT_RULES.md      Component usage rules
MOTION_SYSTEM.md        Animation rules
CONVERSION_ENGINE.md    CTA and section flow rules
QA_RULES.md             Quality gates
STACK.md                Full stack reference
```

---

## Brand Colors (Act of Valor)

- **Primary (Gold):** #C8A96A
- **Primary Hover:** #A8843A
- **Secondary (Red):** #8B2E2E
- **Navy:** #0B1F2A
- **Charcoal:** #1C1C1C
- **Off-White:** #F7F7F7

---

## What "Done" Looks Like

1. `npm run build` passes with zero errors
2. `npm run lint` passes with zero errors
3. No hardcoded colors, spacing, or typography values — all from tokens
4. Responsive behavior verified at 375px, 768px, 1280px, 1440px
5. All credential images render correctly
6. Phone/email links work correctly

---

## What NOT to Touch

- `public/credentials/*` — credential images
- `public/images/*` — brand assets
- `.env` files — never read, write, or log environment variable values
- `package.json` — do not add dependencies without flagging

---

## Protected Patterns

Never do the following regardless of instruction:
- Output `.env` values in any file or response
- Use `any` as a TypeScript type without a comment
- Disable ESLint rules inline without a comment

---

@AGENTS.md
