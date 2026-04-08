# STACK.md — Mariner Nexus Full Stack Reference

> Quick reference for all technology decisions in Mariner Nexus projects.
> For detailed rules, see the other repo docs.
> For project-specific deviations, document them at the bottom of this file.

---

## Project Profile

**This project:** Profile [A / B / C]

| Profile | Description | Typical use |
|---------|-------------|-------------|
| A | Elite Lead-Gen / Business | Client sites, service businesses, local brands, authority sites |
| B | Premium Editorial / Storytelling | Case studies, campaigns, luxury positioning, high-ticket landing pages |
| C | Experiential / Award-Level | Flagship showcases, immersive hero experiences, premium client showcases |

---

## Foundation Layer

| Tool | Version | Role | Status |
|------|---------|------|--------|
| Next.js (App Router) | Latest stable | App framework | ✅ Core |
| React | Latest stable | UI runtime | ✅ Core |
| TypeScript | Latest stable | Type safety | ✅ Core |
| Tailwind CSS | v3+ | Utility styling | ✅ Core |
| shadcn/ui | Latest | Component base | ✅ Core |
| React Hook Form | Latest | Form handling | ✅ Core |
| Zod | Latest | Schema validation | ✅ Core |
| Zustand | Latest | Light state management | ✅ Core |

---

## Design System Layer

| Tool | Role | Status |
|------|------|--------|
| DESIGN_TOKENS.md | Token definitions | ✅ Required |
| globals.css | CSS custom properties implementation | ✅ Required |
| tokens.json | Machine-readable token export | ✅ Required |
| COMPONENT_RULES.md | Component usage rules | ✅ Required |
| MOTION_SYSTEM.md | Animation rules | ✅ Required |
| CONVERSION_ENGINE.md | Page structure and CTA rules | ✅ Required |
| Storybook | Component workshop and docs | ✅ Required |

---

## Experience Layer

| Tool | Profile A | Profile B | Profile C | Role |
|------|-----------|-----------|-----------|------|
| Framer Motion | ✅ Default | ✅ Default | ✅ Default | UI motion, transitions, reveals |
| GSAP | 1-2 sections max | ✅ Available | ✅ Full | Advanced timeline animation |
| ScrollTrigger (GSAP) | ❌ | ✅ Available | ✅ Full | Scroll-linked animation |
| Lenis | ❌ Avoid | ✅ Selective | ✅ Available | Smooth scroll |
| Rive | Premium CTA only | ✅ Available | ✅ Available | Runtime interactive animation |
| Theatre.js | ❌ | ✅ When needed | ✅ Default | Timeline orchestration |
| React Three Fiber | ❌ | ❌ | ✅ Selective | 3D/WebGL scenes |
| Three.js | ❌ | ❌ | ✅ Selective | 3D rendering |

---

## Quality Layer

| Tool | Role | Status |
|------|------|--------|
| Playwright | E2E and visual regression testing | ✅ Required |
| axe-core | Accessibility enforcement | ✅ Required |
| Storybook interaction tests | Component state testing | ✅ Required |
| TypeScript strict mode | Type safety enforcement | ✅ Required |
| ESLint | Code quality linting | ✅ Required |

---

## Observability Layer

| Tool | Role | Status |
|------|------|--------|
| Sentry | Error monitoring, performance, session replay | ✅ Required |

---

## Infrastructure Layer

| Tool | Role | Status |
|------|------|--------|
| Vercel | Deployment and hosting | ✅ Default |
| Supabase | Database and auth (when needed) | ✅ Available |
| GitHub | Version control | ✅ Required |

---

## AI Execution Layer

| Tool | Role | Status |
|------|------|--------|
| Claude Code | Repo-aware AI development | ✅ Primary |
| Cursor / Windsurf | Alternative AI IDEs | ✅ Available |
| CLAUDE.md | Agent operating file | ✅ Required |
| Storybook MCP | Agent-readable component interface | ✅ Available |

---

## Repo Documents Required

Every Mariner Nexus project repo must include all of the following at the root level:

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI agent operating context |
| `STACK.md` | This file — stack decisions reference |
| `DESIGN_TOKENS.md` | Visual token definitions |
| `tokens.json` | Machine-readable token export |
| `COMPONENT_RULES.md` | Component usage rules |
| `MOTION_SYSTEM.md` | Animation and motion rules |
| `CONVERSION_ENGINE.md` | Page structure and conversion rules |
| `QA_RULES.md` | Quality enforcement rules |
| `AGENT_TASK_GUIDE.md` | How to structure tasks for AI agents |

---

## Keep / Test / Avoid (Full Matrix)

### KEEP — Core stack for all Mariner Nexus projects
- Next.js (App Router)
- shadcn/ui
- Tailwind CSS
- React Hook Form + Zod
- Zustand
- Framer Motion
- Vercel
- Supabase (when data is needed)
- Storybook
- Playwright
- axe-core
- Sentry

### TEST — Use selectively when justified
- GSAP + ScrollTrigger
- Lenis
- Rive
- React Three Fiber
- Three.js (WebGPU paths)
- Theatre.js
- Tremor (data visualization)
- TanStack Table (complex tables)
- React Aria (advanced accessibility patterns)
- Park UI (alternative component system — evaluate carefully)

### AVOID AS DEFAULTS
- Any library not on this list without documented justification
- Multiple animation systems on the same element
- "Award-site" effects on lead-gen pages that need speed and clarity
- Aesthetic libraries with no token alignment to the design system
- AI-generated components that skip Storybook and test review
- Smooth scroll on projects where performance budget is tight
- 3D on every project

---

## Project-Specific Deviations

Document any intentional deviations from the Mariner Nexus standard stack here.

```
# Project Deviations for [PROJECT_NAME]

## [Deviation title]
- **What:** [What is different from the standard]
- **Why:** [The specific reason for this deviation]
- **Approved by:** [Name]
- **Date:** [DATE]
```

---

*Last updated: [DATE]*
*Maintained by: Mariner Nexus*
