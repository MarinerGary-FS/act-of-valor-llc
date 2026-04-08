# CONVERSION_ENGINE.md — Mariner Nexus Conversion Engine

> This document defines how pages are structured to generate leads, build trust, and move visitors toward action.
> These are not suggestions. This is the operating logic of every Mariner Nexus build.

---

## The Core Principle

**A visitor does not convert because you asked them to. They convert because you resolved their doubt at the right moment.**

Every section on a page has a job. If a section does not advance the visitor toward conversion, it should not be there.

---

## Section Ordering Logic

### The Standard Lead-Gen / Business Page Flow (Profile A)

This is the default section sequence. Deviation requires a documented reason.

```
1. Hero                    → Establish what this is and who it's for
2. Social Proof Bar        → Immediate credibility signal (logos, stats, media mentions)
3. Problem Statement       → Name the pain — make the visitor feel seen
4. Solution / Value Prop   → Position the service as the answer
5. Features / How It Works → Reduce confusion, build clarity
6. Trust Block             → Testimonials, case results, credentials
7. Objection Handler       → Address the reasons people do not buy
8. Secondary CTA           → Re-offer the action before the next section
9. FAQ                     → Resolve specific lingering doubts
10. Final CTA / Contact    → Clear, low-friction conversion moment
11. Footer                 → Navigation, legal, secondary links
```

### What Can Change
- `Social Proof Bar` can move below the hero if brand names are not strong enough to lead with
- `Problem Statement` can be woven into the hero for shorter pages
- `Secondary CTA` can be omitted on short pages (under 4 sections)
- FAQ can be omitted if objections are fully handled in the body

### What Cannot Change
- Hero is always first
- The final CTA section is always before the footer
- Social proof is never the last section before the footer
- The page must not start with a features list before establishing who this is for

---

## Hero Section Rules

The hero has one job: make the right person say "this is for me."

### Required elements
- **Headline:** Outcome-focused, not feature-focused. "Book more clients without chasing leads" not "Our CRM platform."
- **Subheadline:** One sentence that adds specificity or a mechanism. 2 lines maximum.
- **Primary CTA:** One button. Verb-first label. Above the fold.
- **Visual:** Image, video, or illustration that supports the headline — not decoration.

### Optional elements (use selectively)
- Social proof snippet ("Join 400+ agencies" / star rating)
- Trust badge row (logos, certifications)
- Secondary CTA (ghost button) if two audiences need different paths

### Hero headline formula options
- Outcome + Audience: "More clients for [X type of business], guaranteed"
- Problem + Solution: "Stop [problem]. Start [result]."
- Before / After: "From [current state] to [desired state]"
- Specific claim: "[Specific result] in [specific timeframe]"

### What the hero must NOT do
- List features before establishing value
- Use jargon the audience does not use themselves
- Have more than one primary CTA
- Have a background so busy it competes with the text

---

## CTA Hierarchy

There is one primary CTA per page. Everything else is secondary.

### Primary CTA
- One per page (can repeat at the bottom — same label, same action)
- High contrast — always the most visually prominent interactive element on screen
- Verb-first label that describes the action and the outcome
- Never disabled state on the hero — if it is not ready, do not show it yet

**Good primary CTA labels:**
- "Get Your Free Quote"
- "Book a Strategy Call"
- "Start Your Free Trial"
- "See How It Works"
- "Apply for a Spot"

**Bad CTA labels (never use):**
- "Submit"
- "Click Here"
- "Learn More" (without context)
- "Get Started" (too vague — get started doing what?)
- "Sign Up" (too generic — sign up for what benefit?)

### Secondary CTA
- Used when there is a second audience path or a lower-commitment action
- Ghost button or text link style — visually subordinate to the primary CTA
- Examples: "See case studies", "Watch a 2-min demo", "Read how it works"

### Inline CTAs (mid-page)
- Use after a trust block or a strong value statement — not randomly
- Same label as the primary CTA or a contextually relevant variant
- One per section maximum — do not repeat CTAs every 100px

---

## Trust Block Placement

Trust blocks (testimonials, logos, stats, case results) work by resolving doubt at the right moment.

### Where to place trust blocks

| Placement | Purpose |
|-----------|---------|
| Directly below the hero | Establish credibility before the visitor reads further |
| After the value prop / features | Confirm that the claims are real |
| Before the primary CTA | Reduce hesitation at the conversion moment |
| After the FAQ | Final reassurance before the visitor decides |

### Never place a trust block
- As the very first element (before any value is established)
- At the bottom of the page after the final CTA
- In isolation without surrounding context

### Testimonial requirements
- **Name** — always. Anonymous testimonials are low-trust.
- **Role and company** — always. "Business owner" is not enough.
- **Photo or logo** — strongly preferred. Increases credibility significantly.
- **Specific result** — preferred. "Saved 10 hours a week" beats "Great service!"
- **Date** — include when recency matters to the audience

### Case Study / Result Block requirements
- State the specific outcome (metric, result, timeline)
- Include the context (industry, starting point)
- Link to a full case study if one exists

---

## Objection Handler Section

Every business has a set of reasons visitors do not convert. Name them. Resolve them.

### Common objection categories
- **Price:** "Is it worth it?" — resolve with ROI framing, payment options, or price context
- **Trust:** "Are these people legitimate?" — resolve with credentials, results, reviews
- **Fit:** "Is this for a business like mine?" — resolve with specific audience callouts
- **Timing:** "I'm not ready yet" — resolve by making inaction costly or the path smaller
- **Risk:** "What if it doesn't work?" — resolve with guarantees, trial periods, no-lock-in framing

### Format options
- FAQ accordion (best for 4–8 objections)
- Two-column objection/resolution layout (best for 3–5 strong objections)
- Inline objection handling within feature/benefit copy (best for woven narrative pages)

### Rules
- Name the objection honestly — do not sanitize it into a non-question
- Resolve specifically — vague reassurance increases doubt, not trust
- Do not write objection handlers that sound defensive — write them like a confident answer

---

## Form Friction Rules

Forms are conversion moments. Friction kills conversions. But the right friction filters leads.

### Friction calibration by goal

| Goal | Appropriate Friction |
|------|---------------------|
| Email list / newsletter | Name + Email only. Nothing more. |
| Lead gen / quote request | Name + Email + Phone + 1–2 qualifier questions |
| Discovery call booking | Embed a calendar (Calendly, Cal.com) — remove the form entirely |
| Full intake / onboarding | Multi-step form. Never show all fields at once. |
| Application / qualification | Higher friction is OK — it signals commitment |

### Field rules
- Every required field must be marked
- Never require a field you do not actually need
- Phone number: only require if you will actually call
- Message/description: optional unless it genuinely helps qualification
- Never require account creation before lead capture

### Submit button rules
- Label matches the offer: "Get My Quote", "Book My Call", "Send My Request"
- Never "Submit" or "Send"
- Loading state must be visible during submission
- Success state must be clear — never leave the user wondering if it worked
- Error state must identify which field has the problem

### Multi-step form rules
- Show a progress indicator
- Validate each step before advancing
- Never lose entered data on back navigation
- Keep each step to 3 fields or fewer

---

## Social Proof Logic

Not all social proof is equal. Use the right type at the right moment.

| Type | Trust Signal | Best Placement |
|------|-------------|----------------|
| Client logos (recognized brands) | High authority | Hero area, near primary CTA |
| Named testimonials with photo | High personal trust | After value prop, before CTA |
| Statistics / metrics | High specificity | Hero, stats bar |
| Case studies with results | Highest credibility | Mid-page, link to full version |
| Press / media mentions | Third-party validation | Hero area or trust bar |
| Star ratings (aggregate) | Social volume | Near CTA |
| Video testimonials | Highest emotional impact | Standalone section on high-ticket pages |

---

## Conversion Checklist

Before any page ships, verify:

- [ ] Hero headline is outcome-focused, not feature-focused
- [ ] Primary CTA is above the fold on all breakpoints
- [ ] CTA label is verb-first and specific
- [ ] Social proof appears within 2 sections of the hero
- [ ] At least one testimonial includes a specific result
- [ ] Objections are named and resolved before the final CTA
- [ ] The final CTA section appears before the footer
- [ ] Form fields match the conversion goal — no unnecessary friction
- [ ] Form success state is clear and explicit
- [ ] Page has exactly one visual hierarchy winner in each section (CTA, heading, or image)
- [ ] Mobile CTA is tap-friendly (minimum 44px tap target)

---

*Last updated: [DATE]*
*Maintained by: Mariner Nexus*
