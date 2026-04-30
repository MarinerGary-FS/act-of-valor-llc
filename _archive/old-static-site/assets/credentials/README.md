# Credential Image Assets

Drop your credential/license images into this folder using the exact filenames below.
Once placed, swap out the fallback badge elements in `index.html` per the comment instructions in the credentials section.

---

## Featured Credentials (large cards — top of credentials section)

| Filename | Display Label | Alt Text | Credential Group |
|---|---|---|---|
| `georgia-biohazard-readiness.jpg` | Georgia-Licensed Support | Georgia trauma scene and biohazard cleanup readiness | Biohazard & Trauma Authority |
| `georgia-credential-documentation.jpg` | Documentation Available | Credential documentation available upon request | Biohazard & Trauma Authority |

---

## Supporting Credentials (grid — below featured)

| Filename | Display Label | Alt Text | Credential Group |
|---|---|---|---|
| `iicrc-wrt.jpg` | IICRC Certified | IICRC Water Damage Restoration Technician certification | Restoration Certifications |
| `iicrc-amrt.jpg` | IICRC Certified | IICRC Applied Microbial Remediation Technician certification | Restoration Certifications |
| `iicrc-asd.jpg` | IICRC Certified | IICRC Applied Structural Drying Technician certification | Restoration Certifications |
| `iicrc-fsrt.jpg` | IICRC Certified | IICRC Fire and Smoke Damage Restoration Technician certification | Restoration Certifications |
| `georgia-adjuster-license.jpg` | Georgia Licensed | Georgia Property and Casualty Adjuster License | Property & Insurance Expertise |
| `georgia-real-estate-license.jpg` | Georgia Licensed | Georgia Real Estate License | Property & Insurance Expertise |
| `lead-safe-renovator.jpg` | EPA Certified | EPA Lead-Safe Renovator Certification | Environmental & Safety Compliance |
| `rope-harness-training.jpg` | Safety Certified | Rope and Harness Safety Training certification | Environmental & Safety Compliance |

---

## How to activate an image

In `index.html`, find the credentials section comment block for each credential.
Replace the `.credential-featured-badge` or `.credential-logo-badge` element with the `<img>` tag shown in the comment directly above it.

**Featured card example:**
```html
<img src="assets/credentials/georgia-biohazard-readiness.jpg"
     class="credential-featured-img"
     alt="Georgia trauma scene and biohazard cleanup readiness"
     width="90" height="90">
```

**Grid card example:**
```html
<img src="assets/credentials/iicrc-wrt.jpg"
     class="credential-img"
     alt="IICRC Water Damage Restoration Technician certification"
     width="80" height="80">
```

---

## Recommended image specs
- Format: JPG or PNG
- Size: 200×200px minimum (displayed at 80–90px, but retina screens benefit from 2×)
- Background: white or transparent
- Keep aspect ratio square where possible
