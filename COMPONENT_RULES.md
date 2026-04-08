# COMPONENT_RULES.md — Mariner Nexus Component Rules

> This document defines when to use components, when not to, how to compose them, and what states they must handle.
> AI agents: read this before generating or modifying any component.

---

## Core Principle

**Components are decisions, not decorations.**
Every component in a Mariner Nexus build must earn its place by solving a specific UX or conversion problem.
Never add a component because it looks interesting. Add it because it does something specific for the user or the business goal.

---

## Component Categories

### 1. Layout Components
Global structural components that wrap all content.

**Included:**
- `Header` — primary navigation
- `Footer` — links, legal, secondary navigation
- `Section` — semantic section wrapper with consistent vertical spacing
- `Container` — constrains content width per token values
- `Grid` — responsive column grid
- `Stack` — vertical spacing utility

**Rules:**
- `Section` must always wrap page content blocks — never place content divs directly in the page root
- `Container` must always respect the token-defined container widths — never define `max-width` inline
- Do not nest `Grid` inside `Grid` more than two levels deep

---

### 2. Navigation Components

#### When to use `Navbar`
- Every page has exactly one `Navbar`
- Mobile version must include a functional hamburger/menu trigger
- Nav links must be keyboard navigable and include focus states
- Active route must be visually indicated

#### When to use `MobileMenu`
- Triggered from the `Navbar` hamburger
- Must trap focus when open (use Radix Dialog or shadcn Sheet)
- Must close on Escape key
- Must close on route change
- Never use a custom scroll-lock — use the shadcn/Radix built-in behavior

#### When to use `Breadcrumb`
- Use on content-heavy pages with clear hierarchy (blog posts, case studies, docs)
- Do not use on landing pages or homepage
- Always include the home link as the first item

---

### 3. Content Display Components

#### Cards
**Use when:**
- Displaying a repeating set of items (services, team members, blog posts, testimonials)
- Items have a consistent structure (image/icon + title + description + optional CTA)
- There are 2 or more items that share the same pattern

**Do not use when:**
- There is only one item — use a feature block instead
- The content is a single long text passage — use a prose block
- The intent is to group unrelated content — use a section with subsections

**Required states:** default, hover, focus, loading (skeleton), empty

**Card spacing rules:**
- Internal padding: `space-6` (24px) minimum
- Gap between cards in a grid: `space-6` desktop, `space-4` mobile
- Cards in a row: maximum 4 columns at `xl`, 3 at `lg`, 2 at `md`, 1 at mobile

#### Testimonials
**Use when:** Social proof is needed near a conversion moment
**Do not use:** At the very top of the page before any value is established
**Required:** Avatar or brand logo, name, role/company, quote text
**Optional:** Star rating, date, link to full case study

#### Stats / Metrics
**Use when:** Quantifying value or trust (years in business, clients served, revenue generated)
**Rules:**
- Maximum 4 stats in a row
- Each stat needs a label — a number alone is meaningless
- Animate on scroll entry using Framer Motion (respect `prefers-reduced-motion`)

---

### 4. Interactive Components

#### Accordions
**Use when:**
- FAQ sections
- Feature lists where not all detail needs to be visible at once
- Settings or filter panels

**Do not use when:**
- Content is critical and should always be visible
- There are fewer than 3 items (just show the content directly)
- The content inside is complex — accordions work for simple text, not nested components

**Rules:**
- Use shadcn Accordion (Radix-based)
- Default state: first item open OR all closed — decide per page and document the choice
- Never nest accordions

#### Tabs
**Use when:**
- Switching between views of the same content type (e.g., pricing tiers, feature categories)
- Content is parallel — each tab covers the same type of information

**Do not use when:**
- Content is sequential — use steps/timeline instead
- There are more than 6 tabs — consider a different navigation pattern
- Mobile experience would be poor — evaluate before adding

**Rules:**
- Use shadcn Tabs (Radix-based)
- Tab content must be pre-loaded, not lazy-loaded (for accessibility and performance)
- Active tab state must be keyboard accessible

#### Drawers / Sheets
**Use when:**
- Mobile navigation menus
- Filter panels on mobile
- Supplementary detail that does not need a full page

**Do not use when:**
- The content warrants its own page (navigate instead)
- The user needs to compare drawer content to page content simultaneously

**Rules:**
- Use shadcn Sheet (Radix-based)
- Always include a close button visible on mobile
- Focus trap must be active when open

#### Dialogs / Modals
**Use when:**
- Confirmation of destructive actions
- Quick-entry forms (newsletter, waitlist)
- Media lightboxes
- Critical alerts requiring user decision

**Do not use when:**
- The content is complex enough to warrant its own page
- The user needs the background page context to make a decision
- You want to show information only — use a toast or inline message instead

**Rules:**
- Use shadcn Dialog (Radix-based)
- Maximum one modal open at a time — never stack modals
- Always closable via Escape key and clicking the backdrop
- Form modals must not lose data if accidentally dismissed — use a confirmation step

#### Tooltips
**Use when:** Providing additional context for an icon or abbreviated label
**Do not use:** For essential information — it must be accessible without hover
**Rules:**
- Use shadcn Tooltip (Radix-based)
- Trigger must be keyboard accessible
- Delay: 300ms open, 100ms close
- Never put interactive elements inside a tooltip

---

### 5. Form Components

All forms use React Hook Form + Zod. See also: `CONVERSION_ENGINE.md` for form placement rules.

#### Input Fields
- Always have an associated `<label>` — never use `placeholder` as the only label
- Show validation errors inline below the field, not in a toast
- Required fields: mark with `*` and include a legend ("* Required")
- Error state: red border + red error text below + error icon
- Success state: subtle check icon (for validated fields only)
- Disabled state: reduced opacity, cursor-not-allowed

#### Buttons
**Primary CTA:** One per section maximum. High contrast, brand color, full label (not "Submit")
**Secondary:** Supporting actions, outlined or ghost style
**Destructive:** Red/error color, requires confirmation dialog before proceeding
**Disabled:** Never the primary CTA state — if something is not ready, explain why inline

**Button label rules:**
- Always verb-first: "Get Your Quote", "Start Free Trial", "Book a Call"
- Never: "Submit", "OK", "Click Here", "Learn More" (without context)
- Loading state: spinner + "Processing..." or context-specific text

#### Select / Combobox
- Use shadcn Select for simple lists (< 20 options, no search needed)
- Use shadcn Combobox for searchable lists or > 20 options
- Always include a default empty option for required selects

---

### 6. Feedback Components

#### Toast / Notifications
**Use when:** Confirming an action that just completed (form submitted, item saved)
**Do not use:** For errors that need user action — use inline errors instead
**Rules:**
- Use shadcn Sonner
- Maximum 3 toasts visible at once
- Auto-dismiss after 4 seconds (success), 6 seconds (error), do not auto-dismiss for warnings requiring action
- Always include a close button

#### Skeleton / Loading States
Every component that fetches data must have a skeleton loading state.
**Rules:**
- Match the skeleton shape to the actual content shape
- Use Tailwind's `animate-pulse` class
- Never show a spinner for entire page loads — use skeleton layouts

#### Empty States
Every list, table, or data component must have an empty state.
**Rules:**
- Include an icon or illustration
- Explain why it is empty in plain language
- Include an action if the user can do something to fix it ("Add your first client")

---

## Component Spacing Rules

| Context | Spacing |
|---------|---------|
| Within a component (internal padding) | `space-4` to `space-6` |
| Between components in a section | `space-6` to `space-8` |
| Between page sections | `space-12` (mobile) to `space-20` (desktop) |
| Between major visual blocks | `space-16` (mobile) to `space-32` (desktop) |

---

## Hierarchy and Composition Patterns

### The correct way to build a page section
```
<Section>           ← semantic section wrapper, handles vertical spacing
  <Container>       ← constrains width, handles horizontal padding
    <SectionHeader> ← optional eyebrow + heading + subheading
    <Grid>          ← or Stack, or whatever the content layout needs
      <ComponentA>
      <ComponentB>
    </Grid>
    <SectionCTA>    ← optional CTA below the content
  </Container>
</Section>
```

### Do not do this
```
<div className="py-20 px-4 max-w-[1280px] mx-auto">   ← hardcoded spacing
  <div className="grid grid-cols-3 gap-8">              ← no semantic wrapper
    ...
  </div>
</div>
```

---

## Component Production Checklist

Before any component is merged:

- [ ] Renders correctly at 375px, 768px, 1280px, 1440px
- [ ] Has a Storybook story for each defined state
- [ ] Passes axe-core accessibility check in Storybook
- [ ] Uses design tokens — no hardcoded values
- [ ] Keyboard navigable if interactive
- [ ] Focus state visible and uses `--color-border-focus`
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Loading, error, and empty states handled (if applicable)
- [ ] TypeScript props interface fully typed
- [ ] No `console.log` or debug code

---

*Last updated: [DATE]*
*Maintained by: Mariner Nexus*
