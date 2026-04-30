'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { CREDENTIALS } from '@/lib/constants';

export default function Credentials() {
  const featuredCredentials = CREDENTIALS.filter((c) => c.featured);
  const regularCredentials = CREDENTIALS.filter((c) => !c.featured);

  return (
    <section id="credentials" className="w-full bg-[var(--color-surface-page)] py-20 sm:py-28 lg:py-32">
      <motion.div
        className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-primary)]">
              Professional Credentials
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-navy)]"
          >
            Georgia Trauma &amp; Biohazard Cleanup Readiness
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-lg text-[var(--color-content-secondary)]"
          >
            Image-backed credential documentation for restoration, safety, and property expertise, with Georgia-licensed biohazard positioning and additional documentation available upon request.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm font-semibold text-[var(--color-content-primary)]"
          >
            Credential documentation available upon request.
          </motion.p>
        </div>

        {/* Featured Credentials Row */}
        {featuredCredentials.length > 0 && (
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCredentials.map((cred) => (
                <motion.div
                  key={cred.name}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-xl bg-[var(--color-surface-card)] border-l-4 border-[var(--color-brand-primary)] p-8 sm:p-10 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-[var(--color-surface-subtle)] rounded-lg overflow-hidden">
                    <Image
                      src={cred.image}
                      alt={cred.alt}
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-block sm:inline mb-3 px-3 py-1 bg-[var(--color-brand-primary)] text-[var(--color-navy)] text-xs font-bold rounded-full">
                      IICRC Certified
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-navy)] mb-1">
                      {cred.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--color-content-secondary)]">
                      {cred.org}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-brand-primary)] opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Credentials Grid */}
        {regularCredentials.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {regularCredentials.map((cred) => (
              <motion.div
                key={cred.name}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-lg bg-[var(--color-surface-card)] p-5 sm:p-6 text-center border border-[var(--color-border-default)] transition-all duration-300 hover:shadow-[var(--shadow-md)] hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-center h-20 w-20 mx-auto bg-[var(--color-surface-subtle)] rounded-lg overflow-hidden">
                  <Image
                    src={cred.image}
                    alt={cred.alt}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--color-navy)] mb-2">
                  {cred.name}
                </h3>
                <p className="text-xs sm:text-sm leading-5 text-[var(--color-content-secondary)]">
                  {cred.org}
                </p>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-brand-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
