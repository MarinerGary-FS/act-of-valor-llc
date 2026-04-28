'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

/**
 * GeoDominance — local geo-SEO banner immediately under the hero.
 * Reinforces Cobb County positioning with specific sub-markets (Marietta, Smyrna, Kennesaw).
 * Single H2, token-compliant, mobile-first.
 *
 * Each location is a real internal link so the location landing pages are not
 * orphaned for crawlers — fixes "Crawled — currently not indexed" patterns.
 */
export default function GeoDominance() {
  return (
    <section
      id="geo"
      aria-labelledby="geo-heading"
      className="w-full bg-[var(--color-navy)] border-t border-[var(--color-brand-primary)]/20 py-6 sm:py-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeUp}
        className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center"
      >
        <h2
          id="geo-heading"
          className="text-base sm:text-lg lg:text-xl font-semibold text-[var(--color-content-inverse)] leading-snug"
        >
          <Link
            href="/cobb-county"
            className="underline decoration-[var(--color-brand-primary)]/60 underline-offset-4 hover:text-[var(--color-brand-primary)] transition-colors"
          >
            Cobb County
          </Link>
          {' '}Emergency Cleanup Experts Serving{' '}
          <Link
            href="/marietta"
            className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)] transition-colors"
          >
            Marietta
          </Link>
          ,{' '}
          <Link
            href="/smyrna"
            className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)] transition-colors"
          >
            Smyrna
          </Link>
          ,{' '}
          <Link
            href="/kennesaw"
            className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)] transition-colors"
          >
            Kennesaw
          </Link>
          {' '}and Surrounding Areas
        </h2>
      </motion.div>
    </section>
  );
}
