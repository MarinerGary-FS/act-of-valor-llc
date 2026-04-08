# QA_RULES.md — Mariner Nexus Quality Enforcement

> This file defines what must be true before any code ships.
> Quality is not an opinion here. It is a pipeline gate.
> Claude Code and all developers must treat this as non-negotiable.

---

## The Core Rule

**If it breaks the QA rules, it does not ship.**
No exceptions for "we'll fix it later." No exceptions for "it's just a small change."
The pipeline enforces this. So do you.

---

## 1. Build Gate

### Rule
`npm run build` must complete with **zero errors and zero warnings**.

### What this covers
- TypeScript type errors
- Missing imports
- Broken module paths
- ESLint violations treated as errors
- Next.js build-time failures

### How to verify
```bash
npm run build
```
Expected output ends with: `✓ Compiled successfully`

### Failure behavior
If build fails, stop all other work. Fix the build first.

---

## 2. Linting Gate

### Rule
`npm run lint` must pass with **zero errors**.

Warnings are acceptable if they are pre-existing and documented. New warnings introduced by a task are not acceptable.

### ESLint rules enforced
- No unused variables (`@typescript-eslint/no-unused-vars`)
- No `any` type without a comment (`@typescript-eslint/no-explicit-any`)
- No console.log in production code (`no-console`)
- No inline styles unless explicitly documented
- React hooks rules (`react-hooks/rules-of-hooks`, `react-hooks/exhaustive-deps`)
- Import order enforced (`import/order`)

### How to verify
```bash
npm run lint
```

---

## 3. Playwright End-to-End Tests

### Rule
`npm run test` must pass with **zero failing tests**.

Do not delete or skip tests to make the suite pass. If a test is legitimately outdated, flag it and wait for confirmation before modifying it.

### Coverage expectations by project profile

**Profile A (Lead-Gen / Business)**
- [ ] Homepage loads and renders above-the-fold content
- [ ] Primary CTA is visible and clickable
- [ ] Contact/lead form submits successfully (happy path)
- [ ] Form shows validation errors for empty required fields
- [ ] Navigation works across all primary routes
- [ ] Mobile menu opens and closes correctly
- [ ] Footer links resolve without 404

**Profile B (Premium Editorial)**
- All Profile A tests plus:
- [ ] Scroll-linked sections trigger at correct scroll positions
- [ ] Case study pages render fully
- [ ] Any video/media embeds load without errors
- [ ] All anchor/section navigation works

**Profile C (Experiential / Award)**
- All Profile B tests plus:
- [ ] 3D/WebGL canvas initializes without console errors
- [ ] Interactive sequences complete without hanging
- [ ] Performance budget check: LCP under 2.5s on desktop
- [ ] Graceful degradation verified on reduced-motion setting

### How to verify
```bash
npm run test                    # Full suite
npm run test -- --headed        # Watch mode for debugging
npm run test -- [filename]      # Single test file
```

---

## 4. Visual Regression

### Rule
No visual regression failures on existing pages or components are allowed to ship unreviewed.

Visual diffs must be intentional. If you changed something visually, update the baseline deliberately — not to make the test pass, but because the change is correct.

### Tolerance thresholds
- **Pixel diff tolerance:** 0.2% maximum (configurable per project in `playwright.config.ts`)
- **Full-page screenshots:** taken at 375px, 768px, 1280px, 1440px
- **Component screenshots:** taken in Storybook for each defined story

### How to verify
```bash
npm run test:visual             # Run visual regression suite
npm run test:visual -- --update-snapshots   # Update baselines (only when change is intentional)
```

### Baseline storage
Baselines live in `/tests/visual/__snapshots__/`. These are committed to the repo. Do not delete them.

---

## 5. Accessibility Gate (axe-core)

### Severity levels

| Level | Action |
|-------|--------|
| **Critical** | Blocks shipping. Must be fixed before any deployment. |
| **Serious** | Blocks shipping on new components. Must be resolved or explicitly documented with a fix date. |
| **Moderate** | Flagged in report. Must be tracked. Does not block shipping if pre-existing. |
| **Minor** | Logged. Addressed in scheduled accessibility sprints. |

### Rules enforced (minimum)
- [ ] All images have meaningful `alt` text or `alt=""` for decorative images
- [ ] Color contrast ratio: 4.5:1 minimum for normal text, 3:1 for large text (WCAG AA)
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible on all interactive elements
- [ ] Form inputs have associated labels
- [ ] Page has exactly one `<h1>`
- [ ] Heading hierarchy is logical (no skipped levels)
- [ ] Motion respects `prefers-reduced-motion` media query
- [ ] ARIA roles and attributes are valid and necessary

### How to verify
```bash
npm run test:a11y               # Full axe-core audit
```

axe-core is also integrated into Storybook and runs on each story. Review the Storybook accessibility panel before shipping any component.

---

## 6. Storybook Coverage

### Rule
Every component that could render independently must have a Storybook story.

### Required stories per component (minimum)
- `Default` — standard usage, all required props
- `Loading` — skeleton or loading state (if applicable)
- `Error` — error state (if applicable)
- `Empty` — empty/no-data state (if applicable)
- `Mobile` — viewport set to 375px (for any layout-sensitive component)

### Story quality checklist
- [ ] Story renders without console errors
- [ ] All props have JSDoc comments or ArgTable descriptions
- [ ] Interaction tests defined for interactive components
- [ ] Accessibility tab shows zero critical/serious violations

### How to verify
```bash
npm run storybook               # Review visually
npm run test-storybook          # Run Storybook interaction tests headlessly
```

---

## 7. TypeScript Strictness

### Rule
This project runs with strict TypeScript. No exceptions.

```json
// tsconfig.json (required settings)
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Prohibited patterns
- `as any` — if absolutely required, add a comment explaining why
- `// @ts-ignore` — never. Use `// @ts-expect-error` with a comment if truly necessary
- `!` non-null assertion without a comment explaining the guarantee

---

## 8. Performance Budget (Profile A minimum)

These are not aspirational. They are gates.

| Metric | Target | Hard Limit |
|--------|--------|------------|
| LCP (Largest Contentful Paint) | < 2.0s | < 2.5s |
| FID / INP | < 100ms | < 200ms |
| CLS | < 0.05 | < 0.1 |
| Total JS bundle (gzipped) | < 150kb | < 200kb |
| Total page weight (initial load) | < 500kb | < 1MB |

### How to verify
```bash
npm run build && npx lighthouse http://localhost:3000 --output=json
```

Profile B and C projects have adjusted budgets — document them explicitly in this file per project.

---

## 9. Responsive Verification Breakpoints

Every component and page must be verified at:

| Breakpoint | Width | Represents |
|------------|-------|------------|
| Mobile S | 375px | iPhone SE / small Android |
| Mobile L | 430px | iPhone Pro Max |
| Tablet | 768px | iPad portrait |
| Desktop S | 1280px | Laptop |
| Desktop L | 1440px | Standard monitor |
| Wide | 1920px | Large monitor (spot check) |

---

## 10. Pre-Deployment Checklist

Before any production deployment, confirm:

- [ ] Build passes (`npm run build`)
- [ ] Full Playwright suite passes (`npm run test`)
- [ ] No new axe-core critical or serious violations
- [ ] Visual regression reviewed and baselines updated intentionally
- [ ] Sentry is connected and receiving events in staging
- [ ] Environment variables confirmed in Vercel dashboard
- [ ] `robots.txt` and `sitemap.xml` correct for environment
- [ ] Open Graph and meta tags verified
- [ ] Console is clean in production build (no errors, no debug logs)
- [ ] All forms tested end-to-end in staging environment
- [ ] Mobile experience verified on a real device (not just devtools)

---

## CI/CD Integration

These checks should run automatically in CI on every pull request:

```yaml
# Recommended GitHub Actions gates (minimum)
- npm run build
- npm run lint
- npm run test
- npm run test:a11y
- npm run test-storybook
```

Visual regression is run on PR and reviewed before merge. It does not automatically block — it requires human review of the diff report.

---

*Last updated: [DATE]*
*Maintained by: Mariner Nexus*
