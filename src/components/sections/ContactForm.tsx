/**
 * ContactForm — TEMPORARILY DISABLED.
 *
 * The submission form is hidden site-wide while a backend is being approved.
 * This wrapper renders DirectContactCTA in its place so every existing
 * `<ContactForm />` usage and `/#contact` anchor link keeps working without
 * touching the homepage layout.
 *
 * To restore the form later:
 *   git checkout <prior-commit> -- src/components/sections/ContactForm.tsx
 *
 * The most recent working form implementation lives in commit history at
 * the API-route version (POST /api/contact, Resend + Google Sheets). The
 * /api/contact route handler and lib/server helpers remain in the codebase
 * and are inert without their env vars set.
 */

import DirectContactCTA from './DirectContactCTA';

export default function ContactForm() {
  return <DirectContactCTA />;
}
