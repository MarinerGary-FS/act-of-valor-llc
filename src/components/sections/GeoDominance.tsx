'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

/**
 * GeoDominance — local geo-SEO banner immediately under the hero.
 * Reinforces Cobb County positioning with specific sub-markets (Marietta, Smyrna, Kennesaw).
 * Single H2, token-compliant, mobile-first.
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
          Cobb County Emergency Cleanup Experts Serving{' '}
          <span className="text-[var(--color-brand-primary)]">Marietta, Smyrna, Kennesaw</span>
          {' '}and Surrounding Areas
        </h2>
      </motion.div>
    </section>
  );
}
