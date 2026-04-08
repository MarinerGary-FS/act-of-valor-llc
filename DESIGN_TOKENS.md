# DESIGN_TOKENS.md — Mariner Nexus Design Tokens

> This is the source of truth for all visual decisions.
> Tokens are defined here first. They are implemented in `globals.css` as CSS custom properties.
> A machine-readable version lives in `tokens.json` at the project root.
> No hardcoded values are permitted in components. Always reference a token.

---

## How Tokens Work in This Stack

1. Tokens are **defined and documented** in this file.
2. Tokens are **implemented** as CSS custom properties in `/styles/globals.css`.
3. Tokens are **exported** in `/tokens.json` for AI agent and Cowork automation reference.
4. Tokens are **referenced** in Tailwind config to extend the utility class system.
5. Tokens are **never hardcoded** directly in components.

### Correct usage
```tsx
// ✅ Correct — uses a Tailwind token-mapped class
<div className="bg-brand-primary text-content-primary text-body-md">

// ✅ Correct — uses CSS custom property directly when needed
<div style={{ borderColor: 'var(--color-border-subtle)' }}>

// ❌ Wrong — hardcoded value
<div className="bg-[#1A2B3C] text-[16px]">
```

---

## Color System

### Brand Colors
| Token | CSS Variable | Usage |
|-------|-------------|-------|
| `brand-primary` | `--color-brand-primary` | Primary brand color, primary CTAs |
| `brand-primary-hover` | `--color-brand-primary-hover` | Hover state of primary brand |
| `brand-secondary` | `--color-brand-secondary` | Secondary brand accent |
| `brand-secondary-hover` | `--color-brand-secondary-hover` | Hover state of secondary brand |

> **Project-level:** Replace placeholder values in `globals.css` with actual client brand colors.

### Content Colors
| Token | CSS Variable | Usage |
|-------|-------------|-------|
| `content-primary` | `--color-content-primary` | Main body text, headings |
| `content-secondary` | `--color-content-secondary` | Subheadings, secondary labels |
| `content-tertiary` | `--color-content-tertiary` | Captions, metadata, placeholders |
| `content-disabled` | `--color-content-disabled` | Disabled state text |
| `content-inverse` | `--color-content-inverse` | Text on dark backgrounds |
| `content-link` | `--color-content-link` | Link text |
| `content-link-hover` | `--color-content-link-hover` | Link hover |

### Surface Colors
| Token | CSS Variable | Usage |
|-------|-------------|-------|
| `surface-page` | `--color-surface-page` | Base page background |
| `surface-card` | `--color-surface-card` | Card backgrounds |
| `surface-subtle` | `--color-surface-subtle` | Subtle section differentiation |
| `surface-elevated` | `--color-surface-elevated` | Modals, drawers, overlays |
| `surface-inverse` | `--color-surface-inverse` | Dark backgrounds |
| `surface-overlay` | `--color-surface-overlay` | Modal backdrops |

### Border Colors
| Token | CSS Variable | Usage |
|-------|-------------|-------|
| `border-default` | `--color-border-default` | Standard borders |
| `border-subtle` | `--color-border-subtle` | Subtle dividers |
| `border-strong` | `--color-border-strong` | Emphasized borders |
| `border-focus` | `--color-border-focus` | Focus ring color |

### Semantic Colors
| Token | CSS Variable | Usage |
|-------|-------------|-------|
| `semantic-success` | `--color-semantic-success` | Success states |
| `semantic-success-surface` | `--color-semantic-success-surface` | Success backgrounds |
| `semantic-warning` | `--color-semantic-warning` | Warning states |
| `semantic-warning-surface` | `--color-semantic-warning-surface` | Warning backgrounds |
| `semantic-error` | `--color-semantic-error` | Error states |
| `semantic-error-surface` | `--color-semantic-error-surface` | Error backgrounds |
| `semantic-info` | `--color-semantic-info` | Info states |
| `semantic-info-surface` | `--color-semantic-info-surface` | Info backgrounds |

---

## Typography Scale

### Font Families
| Token | CSS Variable | Usage |
|-------|-------------|-------|
| `font-display` | `--font-display` | Headlines, hero text |
| `font-body` | `--font-body` | Body copy, UI text |
| `font-mono` | `--font-mono` | Code, technical content |

> **Project-level:** Define actual font family names and ensure they are loaded via `next/font`.

### Font Sizes
| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-display-2xl` | 72px / 4.5rem | 1.1 | Hero headlines |
| `text-display-xl` | 60px / 3.75rem | 1.1 | Large hero text |
| `text-display-lg` | 48px / 3rem | 1.15 | Section headlines |
| `text-display-md` | 36px / 2.25rem | 1.2 | Sub-section headlines |
| `text-display-sm` | 30px / 1.875rem | 1.25 | Card headlines |
| `text-heading-xl` | 24px / 1.5rem | 1.3 | UI headings |
| `text-heading-lg` | 20px / 1.25rem | 1.4 | Sub-headings |
| `text-heading-md` | 18px / 1.125rem | 1.4 | Small headings |
| `text-body-xl` | 18px / 1.125rem | 1.6 | Lead paragraphs |
| `text-body-lg` | 16px / 1rem | 1.6 | Standard body |
| `text-body-md` | 14px / 0.875rem | 1.5 | Secondary body, captions |
| `text-body-sm` | 12px / 0.75rem | 1.4 | Labels, micro-copy |
| `text-label-lg` | 14px / 0.875rem | 1.2 | Button labels, nav |
| `text-label-md` | 12px / 0.75rem | 1.2 | Tags, badges |
| `text-label-sm` | 11px / 0.6875rem | 1.2 | Micro labels |

### Font Weights
| Token | Value | Usage |
|-------|-------|-------|
| `font-regular` | 400 | Body text |
| `font-medium` | 500 | UI labels, secondary emphasis |
| `font-semibold` | 600 | Headings, strong emphasis |
| `font-bold` | 700 | Display text, CTAs |

---

## Spacing Scale

Built on a 4px base unit. All spacing values are multiples of 4px.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro gaps, icon padding |
| `space-2` | 8px | Tight internal spacing |
| `space-3` | 12px | Compact component padding |
| `space-4` | 16px | Standard component padding |
| `space-5` | 20px | Comfortable padding |
| `space-6` | 24px | Section internal spacing |
| `space-8` | 32px | Component separation |
| `space-10` | 40px | Sub-section separation |
| `space-12` | 48px | Section gaps (mobile) |
| `space-16` | 64px | Section gaps (desktop) |
| `space-20` | 80px | Large section gaps |
| `space-24` | 96px | XL section gaps |
| `space-32` | 128px | Hero spacing |
| `space-40` | 160px | Cinematic spacing |

---

## Radius Scale

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| `radius-none` | `--radius-none` | 0 | Square elements |
| `radius-sm` | `--radius-sm` | 4px | Subtle rounding |
| `radius-md` | `--radius-md` | 8px | Cards, inputs |
| `radius-lg` | `--radius-lg` | 12px | Modals, panels |
| `radius-xl` | `--radius-xl` | 16px | Large cards |
| `radius-2xl` | `--radius-2xl` | 24px | Prominent cards |
| `radius-full` | `--radius-full` | 9999px | Pills, badges, avatars |

---

## Elevation / Shadow System

| Token | CSS Variable | Usage |
|-------|-------------|-------|
| `shadow-none` | `--shadow-none` | Flat elements |
| `shadow-xs` | `--shadow-xs` | Subtle lift (tags, small cards) |
| `shadow-sm` | `--shadow-sm` | Cards at rest |
| `shadow-md` | `--shadow-md` | Cards on hover, dropdowns |
| `shadow-lg` | `--shadow-lg` | Modals, sidebars |
| `shadow-xl` | `--shadow-xl` | Elevated overlays |
| `shadow-brand` | `--shadow-brand` | Brand-colored glow (CTAs, highlights) |

---

## Border Rules

- Default border width: `1px`
- Strong border width: `2px`
- Never use borders for spacing — use margins and padding
- Focus rings: `2px` solid `--color-border-focus` with `2px` offset
- Dividers: use `border-subtle` at `1px` — never thicker

---

## Container Widths

| Token | CSS Variable | Max Width | Usage |
|-------|-------------|-----------|-------|
| `container-sm` | `--container-sm` | 640px | Narrow content, blog posts |
| `container-md` | `--container-md` | 768px | Forms, focused content |
| `container-lg` | `--container-lg` | 1024px | Standard content |
| `container-xl` | `--container-xl` | 1280px | Wide content |
| `container-2xl` | `--container-2xl` | 1440px | Full-width sections |
| `container-prose` | `--container-prose` | 65ch | Long-form reading |

All containers have horizontal padding of `space-4` (mobile) and `space-8` (desktop).

---

## Responsive Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| `sm` | 640px | Mobile landscape, small tablet |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape, laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1440px | Large desktop |

Always mobile-first. Write base styles for mobile, then `md:`, `lg:`, `xl:` overrides.

---

## Token Implementation in globals.css

```css
/* /styles/globals.css — token implementation */
:root {
  /* Brand */
  --color-brand-primary: [PROJECT_VALUE];
  --color-brand-primary-hover: [PROJECT_VALUE];
  --color-brand-secondary: [PROJECT_VALUE];
  --color-brand-secondary-hover: [PROJECT_VALUE];

  /* Content */
  --color-content-primary: [PROJECT_VALUE];
  --color-content-secondary: [PROJECT_VALUE];
  --color-content-tertiary: [PROJECT_VALUE];
  --color-content-disabled: [PROJECT_VALUE];
  --color-content-inverse: [PROJECT_VALUE];
  --color-content-link: [PROJECT_VALUE];
  --color-content-link-hover: [PROJECT_VALUE];

  /* Surfaces */
  --color-surface-page: [PROJECT_VALUE];
  --color-surface-card: [PROJECT_VALUE];
  --color-surface-subtle: [PROJECT_VALUE];
  --color-surface-elevated: [PROJECT_VALUE];
  --color-surface-inverse: [PROJECT_VALUE];
  --color-surface-overlay: rgba(0,0,0,0.5);

  /* Borders */
  --color-border-default: [PROJECT_VALUE];
  --color-border-subtle: [PROJECT_VALUE];
  --color-border-strong: [PROJECT_VALUE];
  --color-border-focus: [PROJECT_VALUE];

  /* Semantic */
  --color-semantic-success: #16A34A;
  --color-semantic-success-surface: #F0FDF4;
  --color-semantic-warning: #D97706;
  --color-semantic-warning-surface: #FFFBEB;
  --color-semantic-error: #DC2626;
  --color-semantic-error-surface: #FEF2F2;
  --color-semantic-info: #2563EB;
  --color-semantic-info-surface: #EFF6FF;

  /* Radius */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-none: none;
  --shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
  --shadow-xl: 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04);
  --shadow-brand: 0 0 0 3px [PROJECT_BRAND_COLOR_WITH_ALPHA];

  /* Containers */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
  --container-prose: 65ch;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode overrides — define per project */
  }
}
```

---

## tokens.json (Machine-Readable Export)

A `tokens.json` file must exist at the project root. This is used by AI agents and Cowork automations to validate token usage.

```json
{
  "version": "1.0.0",
  "project": "[PROJECT_NAME]",
  "lastUpdated": "[DATE]",
  "colors": {
    "brand": {
      "primary": { "cssVar": "--color-brand-primary", "value": "[VALUE]" },
      "secondary": { "cssVar": "--color-brand-secondary", "value": "[VALUE]" }
    },
    "content": {
      "primary": { "cssVar": "--color-content-primary", "value": "[VALUE]" },
      "secondary": { "cssVar": "--color-content-secondary", "value": "[VALUE]" }
    }
  },
  "spacing": {
    "1": "4px", "2": "8px", "3": "12px", "4": "16px",
    "5": "20px", "6": "24px", "8": "32px", "10": "40px",
    "12": "48px", "16": "64px", "20": "80px", "24": "96px"
  },
  "radius": {
    "sm": "4px", "md": "8px", "lg": "12px",
    "xl": "16px", "2xl": "24px", "full": "9999px"
  },
  "breakpoints": {
    "sm": "640px", "md": "768px",
    "lg": "1024px", "xl": "1280px", "2xl": "1440px"
  }
}
```

---

*Last updated: [DATE]*
*Maintained by: Mariner Nexus*
