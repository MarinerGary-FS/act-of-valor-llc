# AGENT_TASK_GUIDE.md — How to Give Claude Code a Task

> This document is for the Mariner Nexus team — not for AI agents.
> It defines how to structure tasks so Claude Code executes them correctly, efficiently, and within our standards.

---

## Why This Matters

Claude Code performs significantly better when tasks are:
- Scoped to a clear boundary
- Connected to the relevant docs
- Given explicit acceptance criteria
- Told what tests should pass

Without this structure, the agent makes assumptions — and assumptions lead to work that does not match the system.

---

## The Core Task Format

Use this template every time you give Claude Code a task.

```
## Task: [Short title]

**Scope:** [What file(s), component(s), or feature area this touches]

**What to build / change:**
[Clear description of what needs to happen]

**Reference docs:**
- [Which Mariner Nexus doc applies — COMPONENT_RULES.md, MOTION_SYSTEM.md, etc.]
- [Specific section if relevant — e.g., "COMPONENT_RULES.md — Cards section"]

**Acceptance criteria:**
- [ ] [Specific thing that must be true when done]
- [ ] [Another specific requirement]
- [ ] [etc.]

**Tests to pass:**
- [Specific test file or test name, or "all existing tests"]
- [New test to write, if applicable]

**Do not touch:**
- [Files or patterns that should be left alone]
```

---

## Profile A Task Examples

### Example 1 — Add a new section to a page
```
## Task: Add testimonials section to the homepage

**Scope:** /app/page.tsx, /components/sections/TestimonialsSection.tsx (new file)

**What to build:**
Add a testimonials section after the Features section on the homepage.
Use a 3-column card grid on desktop, single column on mobile.
Each card shows: quote text, name, role, company, photo.
Data should be defined in a local array inside the component for now.

**Reference docs:**
- COMPONENT_RULES.md — Testimonials section
- COMPONENT_RULES.md — Card spacing rules
- DESIGN_TOKENS.md — spacing scale, color tokens
- CONVERSION_ENGINE.md — Trust Block Placement

**Acceptance criteria:**
- [ ] Section renders after the Features section
- [ ] 3-column grid at 1280px, 2-column at 768px, 1-column at 375px
- [ ] Each card includes all four required fields (quote, name, role/company, photo)
- [ ] Section heading and subheading included
- [ ] No hardcoded colors or spacing values — all from tokens
- [ ] Entry animation uses MOTION_SYSTEM.md fade-up pattern
- [ ] prefers-reduced-motion respected

**Tests to pass:**
- All existing Playwright tests
- New: Visual regression baseline for the homepage

**Do not touch:**
- /components/ui/ — shadcn base components
- /app/layout.tsx
```

---

### Example 2 — Fix a form validation issue
```
## Task: Fix contact form validation — phone field error state

**Scope:** /components/sections/ContactForm.tsx

**What to build / change:**
The phone field is not showing an inline error when the format is wrong.
It should show a red error message below the field immediately on blur.
Use the Zod schema in /lib/validators/contactForm.schema.ts for validation rules.
Error styling must match COMPONENT_RULES.md — Input Fields error state.

**Reference docs:**
- COMPONENT_RULES.md — Form Components — Input Fields
- DESIGN_TOKENS.md — Semantic Colors (error)

**Acceptance criteria:**
- [ ] Phone field shows error message on blur if format is invalid
- [ ] Error message appears below the field (not as a toast)
- [ ] Error state uses --color-semantic-error for text and border
- [ ] Error clears when user types a valid format
- [ ] No other form fields affected

**Tests to pass:**
- All existing Playwright tests
- New Playwright test: /tests/e2e/contactForm.spec.ts — "phone field shows error on invalid input"

**Do not touch:**
- /lib/validators/contactForm.schema.ts — do not change the Zod schema
- Any other form fields
```

---

### Example 3 — Add a new page
```
## Task: Create /services/web-design page

**Scope:** /app/services/web-design/page.tsx (new), /components/sections/ (any new sections)

**What to build:**
New page at the /services/web-design route.
Follow the Profile A section order from CONVERSION_ENGINE.md.
Required sections: Hero, Social Proof Bar, Features/How It Works, Testimonials, FAQ, Final CTA.
Use existing reusable section components where they exist.
Create new section components only where they do not exist yet.

**Reference docs:**
- CONVERSION_ENGINE.md — Standard Lead-Gen Page Flow
- CONVERSION_ENGINE.md — Hero Section Rules
- COMPONENT_RULES.md — all sections
- MOTION_SYSTEM.md — Profile A scroll rules

**Acceptance criteria:**
- [ ] Page renders at /services/web-design
- [ ] All 6 required sections present in the specified order
- [ ] Page has correct <title> and Open Graph meta tags
- [ ] Breadcrumb included (Services > Web Design)
- [ ] Primary CTA appears above the fold
- [ ] Mobile layout verified at 375px
- [ ] Page added to sitemap.xml
- [ ] No TypeScript errors

**Tests to pass:**
- All existing Playwright tests
- New: /tests/e2e/services.spec.ts — "web-design page loads and renders hero"

**Do not touch:**
- /app/services/page.tsx (services index page)
- Existing section components — reuse, do not modify
```

---

## Profile B / C Task Additions

For Profile B and C tasks, add to the reference docs:
- MOTION_SYSTEM.md — specific section (GSAP Setup, Lenis Setup, etc.)
- Performance budget from QA_RULES.md

For Profile C tasks, also specify:
- WebGL/3D section scope (what part of the canvas, not the whole page)
- Target device for performance testing

---

## What Makes a Bad Task (avoid these)

### Too vague
```
❌ "Make the homepage look better"
❌ "Fix the animations"
❌ "Update the styles"
```

### No acceptance criteria
```
❌ "Add a services section" — with no definition of what makes it done
```

### No scope boundary
```
❌ "Update the component" — which component? what update?
```

### Missing reference docs
```
❌ "Add a card component" — without specifying COMPONENT_RULES.md card rules
    → The agent will make up its own rules, which will not match the system
```

---

## Asking Claude Code to Review Existing Work

You can also ask Claude Code to review rather than build:

```
## Review Task: Audit homepage against Mariner Nexus standards

**Scope:** /app/page.tsx and all components it imports

**What to do:**
Review the current homepage and identify any violations of:
- COMPONENT_RULES.md
- DESIGN_TOKENS.md (hardcoded values)
- CONVERSION_ENGINE.md (section order, CTA rules)
- QA_RULES.md (accessibility, responsive)

**Output:**
Produce a markdown report listing:
1. Each violation found
2. Which rule it violates
3. The file and line number
4. What the fix should be

Do not make any changes. Report only.
```

---

## Cowork Task Delegation (for non-developer team tasks)

For tasks that do not require code — file organization, moving assets, preparing handoffs — use Cowork with this format:

```
Task: [Title]
Folder: [Which project folder this involves]
Action: [What to move, rename, organize, or prepare]
Output location: [Where the result should go]
Notify me: [Discord or WhatsApp] when complete
```

See `COWORK_SETUP.md` for the full Cowork + mobile notification setup.

---

## Quick Reference — Which Doc to Reference

| Task type | Primary doc |
|-----------|-------------|
| Building a UI component | COMPONENT_RULES.md |
| Adding animation or motion | MOTION_SYSTEM.md |
| Building or updating a page | CONVERSION_ENGINE.md + COMPONENT_RULES.md |
| Styling / visual changes | DESIGN_TOKENS.md |
| Testing or QA work | QA_RULES.md |
| AI agent setup or config | CLAUDE.md |
| Stack decisions | STACK.md |

---

*Last updated: [DATE]*
*Maintained by: Mariner Nexus*
