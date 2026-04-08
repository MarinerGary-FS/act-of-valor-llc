# MOTION_SYSTEM.md — Mariner Nexus Motion System

> Motion must earn its place. Every animation must do one of four things:
> reinforce hierarchy, build trust, improve spatial clarity, or create brand differentiation.
> If it does none of those, remove it.

---

## The Rule Before All Rules

**Always implement `prefers-reduced-motion` support.**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

In Framer Motion:
```tsx
import { useReducedMotion } from 'framer-motion'

const shouldReduceMotion = useReducedMotion()
const variants = shouldReduceMotion ? staticVariants : animatedVariants
```

This is not optional. It is an accessibility requirement and a QA gate.

---

## Motion Stack by Profile

| Tool | Profile A | Profile B | Profile C |
|------|-----------|-----------|-----------|
| Framer Motion | ✅ Default | ✅ Default | ✅ Default |
| GSAP | ❌ Only for 1-2 premium sections | ✅ Available | ✅ Full use |
| Lenis | ❌ Avoid | ✅ For storytelling pages | ✅ Default |
| Rive | ❌ Only for premium CTA | ✅ Available | ✅ Available |
| Theatre.js | ❌ | ✅ When sequencing matters | ✅ Default |
| React Three Fiber | ❌ | ❌ | ✅ Selective use |

---

## Duration Tokens

All animation durations must use these token values. Do not invent custom durations.

| Token | Value | Usage |
|-------|-------|-------|
| `duration-instant` | 0ms | Immediate state changes, no visual transition |
| `duration-fast` | 100ms | Micro-interactions (button press, checkbox) |
| `duration-normal` | 200ms | Standard UI transitions (hover, focus) |
| `duration-moderate` | 300ms | Component entry/exit |
| `duration-slow` | 500ms | Page transitions, modal open |
| `duration-deliberate` | 700ms | Scroll reveals, editorial moments |
| `duration-cinematic` | 1000ms+ | Story sequences, hero entrances (Profile B/C only) |

---

## Easing Curves

| Token | Value | Usage |
|-------|-------|-------|
| `ease-standard` | `[0.4, 0, 0.2, 1]` | General purpose — most UI transitions |
| `ease-decelerate` | `[0, 0, 0.2, 1]` | Elements entering the screen |
| `ease-accelerate` | `[0.4, 0, 1, 1]` | Elements exiting the screen |
| `ease-spring` | `{ type: 'spring', stiffness: 300, damping: 30 }` | Physical, bouncy interactions |
| `ease-spring-gentle` | `{ type: 'spring', stiffness: 150, damping: 25 }` | Subtle spring for scroll reveals |
| `ease-linear` | `linear` | Progress bars, looping animations only |

In Framer Motion:
```tsx
// Standard transition
transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}

// Spring
transition={{ type: 'spring', stiffness: 300, damping: 30 }}
```

---

## Entry / Exit Rules

### Standard Fade-Up (default reveal pattern)
Used for: cards, sections, text blocks, images entering on scroll.

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}
```

Rules:
- Y offset: `20px` maximum for subtle reveals, `40px` for hero elements
- Never use large Y offsets (80px+) on Profile A projects — too theatrical
- Stagger children by `0.1s` maximum — more than that feels slow and heavy

### Fade Only
Used for: modals, overlays, tooltips, toasts.

```tsx
const fadeOnly = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } }
}
```

### Scale Entry (use sparingly)
Used for: modals, popovers, dropdowns. Not for page content.

```tsx
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } }
}
```

### Slide (directional entry)
Used for: drawers, mobile menus, side panels.

```tsx
// From right (e.g., mobile menu)
const slideFromRight = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit: { x: '100%', transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } }
}
```

---

## Hover / Focus Motion Rules

### Buttons
```tsx
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
transition={{ duration: 0.1, ease: 'easeOut' }}
```
- Scale values between `1.01` and `1.04` only
- Never scale text-only elements — it looks wrong
- Never scale layout containers

### Cards
```tsx
whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
```
- Y lift: `4px` maximum for Profile A, up to `8px` for Profile B/C
- Always pair Y lift with shadow elevation change

### Links / Nav Items
- Use CSS `transition` only — not Framer Motion — for simple color/underline transitions
- Duration: 150ms–200ms
- Never animate font-weight (causes layout shift)

---

## Scroll Choreography Constraints

### Profile A — Scroll Rules
- Scroll-triggered animations: **fade-up only**
- Trigger point: when element is `20%` into the viewport
- Stagger: `0.1s` between children, max 5 staggered children per group
- No parallax
- No scroll-linked transforms (these hurt performance and cause motion sickness)

### Profile B — Scroll Rules
- Fade-up and directional reveals allowed
- Parallax: subtle only (`0.1` to `0.2` scroll multiplier) — test on mobile before shipping
- GSAP ScrollTrigger allowed for 1-2 high-impact sections
- Lenis smooth scroll allowed for editorial/storytelling pages

### Profile C — Scroll Rules
- Full scroll orchestration available
- All GSAP ScrollTrigger patterns allowed
- Three.js scroll-linked experiences allowed
- Performance budget must be planned and documented before implementation
- Test on mid-range mobile device — if it stutters, it does not ship

---

## Page Transitions

Use Framer Motion's `AnimatePresence` for route-level transitions.

**Default (Profile A):**
```tsx
// Fade only — fast and clean
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.2 }}
```

**Enhanced (Profile B):**
```tsx
// Fade + subtle slide
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -8 }}
transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
```

**Cinematic (Profile C):**
Custom — define per project in a `transitions.ts` file.

---

## Lenis Setup (Profile B / C)

```tsx
// /app/providers.tsx
import Lenis from 'lenis'
import { useEffect } from 'react'

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return children
}
```

**Do not enable Lenis on Profile A projects** unless specifically approved for one storytelling section.

---

## GSAP Setup (Profile B / C)

```tsx
// Always register plugins at the module level
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Always clean up in useEffect return
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: false,
    }
  })

  tl.from(elementRef.current, { opacity: 0, y: 40, duration: 0.6 })

  return () => {
    tl.kill()
    ScrollTrigger.getAll().forEach(st => st.kill())
  }
}, [])
```

**GSAP + Lenis integration:** Pass Lenis scroll position to ScrollTrigger.
```tsx
lenis.on('scroll', ScrollTrigger.update)
```

---

## What Not to Do

- ❌ Do not stack Framer Motion + GSAP + CSS transitions on the same element
- ❌ Do not animate layout properties (`width`, `height`, `top`, `left`) — use `transform` instead
- ❌ Do not use `transition-all` — always specify the property
- ❌ Do not animate font-weight, font-size inline (causes reflow)
- ❌ Do not add scroll animations to every single element — choose the moments that matter
- ❌ Do not use `animation-fill-mode: forwards` without thinking about what happens after
- ❌ Do not add Lenis or GSAP to a project that does not explicitly need them
- ❌ Do not skip the reduced-motion check — ever

---

## Motion Review Checklist

Before shipping any animated feature:

- [ ] `prefers-reduced-motion` fallback implemented and tested
- [ ] Duration matches the token scale — no arbitrary values
- [ ] Easing matches one of the defined curves
- [ ] Animation does not cause layout shift (check CLS in Lighthouse)
- [ ] Scroll-linked animations tested on mobile (real device or low-end emulation)
- [ ] No animation stacks two competing libraries on the same element
- [ ] Performance profile reviewed in Chrome DevTools — no frame drops below 60fps
- [ ] Exit animation included if entry animation is included (for `AnimatePresence`)

---

*Last updated: [DATE]*
*Maintained by: Mariner Nexus*
