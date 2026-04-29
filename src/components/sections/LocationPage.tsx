'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, fadeUpHero, staggerContainer } from '@/lib/motion';
import { SITE, SERVICES } from '@/lib/constants';

export interface LocationPageProps {
  /** Human-readable location name (e.g. "Marietta") */
  locationName: string;
  /** Optional locality context line (e.g. "in Cobb County, Georgia") */
  localityContext?: string;
  /** Intro paragraph copy — location-specific */
  intro: string;
  /** Optional list of neighborhoods / sub-areas covered */
  neighborhoods?: readonly string[];
  /**
   * Canonical absolute URL for this location page — used for BreadcrumbList
   * JSON-LD and (in the future) any inline schema that needs the page URL.
   */
  canonicalUrl: string;
}

/**
 * LocationPage — shared template for geo-targeted landing pages.
 * Used by /cobb-county, /marietta, /smyrna, /kennesaw.
 * Token-compliant, mobile-first, follows CONVERSION_ENGINE.md Profile A rules.
 */
export default function LocationPage({
  locationName,
  localityContext,
  intro,
  neighborhoods,
  canonicalUrl,
}: LocationPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://actofvalorllc.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locationName,
        item: canonicalUrl,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Emergency Restoration Services in ${locationName}`,
    serviceType: 'Trauma cleanup, biohazard remediation, water damage restoration, structural drying, microbial remediation, fire and smoke restoration',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Act of Valor',
      url: 'https://actofvalorllc.com',
      telephone: SITE.phone,
    },
    areaServed: {
      '@type': 'Place',
      name: localityContext ? `${locationName}, ${localityContext}` : locationName,
    },
    url: canonicalUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO — location-specific H1 */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-navy-mid)] py-20 sm:py-28 lg:py-32">
        <motion.div
          className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUpHero}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-primary)] bg-transparent px-4 py-2"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
            <span className="text-sm font-medium text-[var(--color-brand-primary)]">
              Available 24/7 — Same-Day Response
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpHero}
            className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-content-inverse)] leading-tight"
          >
            Trauma Cleanup &amp; Biohazard Remediation in{' '}
            <span className="text-[var(--color-brand-primary)]">{locationName}</span>
            {localityContext && (
              <>
                <span className="text-[var(--color-content-inverse)]">, </span>
                <span className="text-[var(--color-brand-primary)]">{localityContext}</span>
              </>
            )}
          </motion.h1>

          <motion.p
            variants={fadeUpHero}
            className="mb-8 text-lg sm:text-xl text-gray-200"
          >
            {intro}
          </motion.p>

          <motion.div
            variants={fadeUpHero}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-[var(--color-navy)] font-bold rounded-lg transition-colors duration-200 text-base sm:text-lg"
            >
              Request Immediate Help
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--color-content-inverse)] hover:bg-[var(--color-content-inverse)] hover:text-[var(--color-navy)] text-[var(--color-content-inverse)] font-bold rounded-lg transition-colors duration-200"
            >
              Call Now — Immediate Response
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES — reuse canonical list with location reinforcement */}
      <section className="w-full bg-[var(--color-surface-page)] py-16 sm:py-20">
        <motion.div
          className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="mb-12 text-center">
            <motion.h2
              variants={fadeUp}
              className="mb-4 text-3xl sm:text-4xl font-bold text-[var(--color-navy)]"
            >
              Emergency Restoration Services in {locationName}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-2xl text-lg text-[var(--color-content-secondary)]"
            >
              IICRC-aligned restoration, Georgia-licensed trauma scene waste management, and same-day emergency response for {locationName} residents and businesses.
            </motion.p>
          </div>

          <motion.ul
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service) => (
              <motion.li
                key={service.id}
                variants={fadeUp}
                className="rounded-2xl bg-[var(--color-surface-card)] border border-[var(--color-border-default)] p-6"
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-surface-subtle)] text-2xl">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-navy)]">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-content-secondary)]">
                  {service.problem}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* NEIGHBORHOODS — optional coverage list */}
      {neighborhoods && neighborhoods.length > 0 && (
        <section className="w-full bg-[var(--color-surface-card)] py-12 sm:py-16">
          <motion.div
            className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[var(--color-navy)]">
              Neighborhoods &amp; Communities We Serve in {locationName}
            </h2>
            <p className="mb-6 text-[var(--color-content-secondary)]">
              Same-day emergency response across {locationName} and surrounding communities.
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {neighborhoods.map((hood) => (
                <li
                  key={hood}
                  className="px-3 py-1.5 rounded-full bg-[var(--color-surface-subtle)] text-sm text-[var(--color-content-primary)] border border-[var(--color-border-default)]"
                >
                  {hood}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      )}

      {/* FINAL CTA — location-specific */}
      <section className="w-full bg-[var(--color-navy)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-content-inverse)] mb-4 sm:mb-6">
            Need Emergency Restoration in {locationName}?
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10">
            Our certified team is standing by for same-day response across {locationName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-brand-primary)] text-[var(--color-navy)] font-bold text-base sm:text-lg rounded-lg hover:bg-[var(--color-brand-primary-hover)] transition-colors duration-300 whitespace-nowrap"
            >
              Request Immediate Help
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--color-content-inverse)] text-[var(--color-content-inverse)] font-bold text-base sm:text-lg rounded-lg hover:bg-[var(--color-content-inverse)] hover:text-[var(--color-navy)] transition-colors duration-300 whitespace-nowrap"
            >
              Call Now — Immediate Response
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--color-brand-primary)] font-medium">
            Same-Day Emergency Cleanup Available in {locationName}
          </p>
        </motion.div>
      </section>
    </>
  );
}
