'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SITE } from '@/lib/constants';

/**
 * DirectContactCTA — replaces the contact form while a backend is being
 * approved. Routes visitors to phone and email so no submission can be
 * silently dropped.
 *
 * Keeps `id="contact"` so every existing `/#contact` anchor link (header,
 * footer, hero, services, location pages) still lands here.
 */
export default function DirectContactCTA() {
  const photoMailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    'Restoration request — photos attached'
  )}&body=${encodeURIComponent(
    'Please describe what happened and attach any photos that show the affected area.\n\nName:\nPhone:\nLocation:\nWhen it happened:\nDescription:\n'
  )}`;

  return (
    <section
      id="contact"
      className="bg-[var(--color-surface-card)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Left Column — context */}
        <motion.div variants={fadeUp} className="flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)] mb-4">
            Need help now? Contact {SITE.name} directly.
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-content-secondary)] mb-8">
            For urgent restoration needs, calling is the fastest way to reach
            the team. You can also email details and photos directly so we can
            understand the situation before responding.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-navy)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-content-inverse)] text-lg font-bold">
                  &#x260E;
                </span>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-1">
                  Call Us Now
                </h3>
                <a
                  href={SITE.phoneHref}
                  className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)] font-semibold transition-colors"
                >
                  {SITE.phone}
                </a>
                <p className="text-sm text-[var(--color-content-tertiary)] mt-1">
                  {SITE.hours}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-navy)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-content-inverse)] text-lg font-bold">
                  &#x2709;
                </span>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-1">
                  Email Us
                </h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)] font-semibold transition-colors break-all"
                >
                  {SITE.email}
                </a>
                <p className="text-sm text-[var(--color-content-tertiary)] mt-1">
                  Photos welcome — they help us mobilize faster.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-surface-page)] rounded-lg p-6 border-l-4 border-[var(--color-brand-primary)]">
            <h4 className="font-bold text-[var(--color-navy)] text-sm uppercase tracking-wider mb-3">
              Our Service Areas
            </h4>
            <ul className="space-y-2">
              {SITE.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="text-[var(--color-content-primary)] text-sm flex items-start gap-2"
                >
                  <span className="text-[var(--color-brand-primary)] font-bold mt-0.5">
                    &#x2022;
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column — primary CTAs */}
        <motion.div variants={fadeUp}>
          <div className="bg-[var(--color-surface-page)] rounded-lg p-6 sm:p-8 h-full flex flex-col">
            <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10 px-3 py-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-primary)]">
                24/7 Same-Day Response
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] mb-3">
              Reach {SITE.name} in seconds
            </h3>
            <p className="text-base text-[var(--color-content-secondary)] mb-8">
              Tap a button below to call or email the team directly. We respond
              fastest by phone for active emergencies.
            </p>

            <div className="space-y-4">
              {/* Primary — Call */}
              <a
                href={SITE.phoneHref}
                aria-label={`Call ${SITE.name} at ${SITE.phone}`}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 sm:py-5 bg-[var(--color-navy)] hover:bg-[var(--color-charcoal)] text-[var(--color-content-inverse)] font-bold text-base sm:text-lg rounded-lg transition-colors duration-300 active:scale-[0.99]"
              >
                <span className="text-xl">&#x260E;</span>
                <span>Call {SITE.name}</span>
                <span className="hidden sm:inline text-[var(--color-brand-primary)] font-semibold">
                  · {SITE.phone}
                </span>
              </a>

              {/* Secondary — Email */}
              <a
                href={`mailto:${SITE.email}`}
                aria-label={`Email ${SITE.name} at ${SITE.email}`}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 sm:py-5 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-[var(--color-navy)] font-bold text-base sm:text-lg rounded-lg transition-colors duration-300 active:scale-[0.99]"
              >
                <span className="text-xl">&#x2709;</span>
                <span>Email the Team</span>
              </a>

              {/* Optional — Send Photos */}
              <a
                href={photoMailto}
                aria-label="Send photos and details to the Act of Valor team"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 border-2 border-[var(--color-navy)] hover:bg-[var(--color-navy)] text-[var(--color-navy)] hover:text-[var(--color-content-inverse)] font-semibold text-base rounded-lg transition-colors duration-300 active:scale-[0.99]"
              >
                <span className="text-lg">&#x1F4F7;</span>
                <span>Send Photos by Email</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-[var(--color-content-tertiary)] text-center">
              Phone is the fastest path during an active emergency.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
