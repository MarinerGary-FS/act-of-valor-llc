'use client';

import { motion } from 'framer-motion';
import { fadeUpHero, staggerContainer } from '@/lib/motion';
import { SITE } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-navy-mid)] py-24 sm:py-32 lg:py-40">
      {/* SVG Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(200, 169, 106, 0.1) 49%, rgba(200, 169, 106, 0.1) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(200, 169, 106, 0.1) 49%, rgba(200, 169, 106, 0.1) 51%, transparent 52%)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient Fade to Off-White */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-surface-page)] to-transparent pointer-events-none" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div
          variants={fadeUpHero}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-primary)] bg-transparent px-4 py-2"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
          <span className="text-sm font-medium text-[var(--color-brand-primary)]">
            Available 24/7 — Same-Day Response
          </span>
        </motion.div>

        {/* Main Heading — Primary H1 (unique) */}
        <motion.h1
          variants={fadeUpHero}
          className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-content-inverse)] leading-tight"
        >
          Trauma Cleanup &amp; Biohazard Remediation in{' '}
          <span className="text-[var(--color-brand-primary)]">Cobb County, Georgia</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUpHero}
          className="mb-8 text-lg sm:text-xl text-gray-200"
        >
          Same-day water, fire, microbial &amp; trauma restoration across Cobb County and the Atlanta metro area.
        </motion.p>

        {/* IICRC Authority Line */}
        <motion.p
          variants={fadeUpHero}
          className="mb-4 text-xs sm:text-sm text-gray-400 tracking-wide uppercase"
        >
          IICRC-aligned restoration practices for water, fire, and microbial remediation.
        </motion.p>

        {/* Trust Line */}
        <motion.div
          variants={fadeUpHero}
          className="mb-12 flex items-center justify-center gap-2 text-sm sm:text-base text-gray-300"
        >
          <svg className="h-5 w-5 text-[var(--color-brand-primary)]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Licensed. Certified. Trusted by families, property managers, and law enforcement partners.</span>
        </motion.div>

        {/* CTA Group — Primary routes to form, secondary to phone */}
        <motion.div
          variants={fadeUpHero}
          className="mb-4 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-[var(--color-navy)] font-bold rounded-lg transition-colors duration-200 text-lg"
          >
            Request Same-Day Service
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--color-content-inverse)] hover:bg-[var(--color-content-inverse)] hover:text-[var(--color-navy)] text-[var(--color-content-inverse)] font-bold rounded-lg transition-colors duration-200"
          >
            Call Now
          </a>
        </motion.div>

        {/* Urgency Microcopy */}
        <motion.p
          variants={fadeUpHero}
          className="mb-4 text-sm font-semibold text-[var(--color-brand-primary)]"
        >
          Request Immediate Assistance — Response Within Minutes
        </motion.p>

        {/* Reassurance Line */}
        <motion.p variants={fadeUpHero} className="mb-16 text-base text-gray-300">
          A real person answers — 24 hours a day, 7 days a week.
        </motion.p>

        {/* Stats Divider */}
        <motion.div
          variants={fadeUpHero}
          className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-600"
        >
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-primary)]">24/7</p>
            <p className="text-xs sm:text-sm text-gray-400">Emergency Response</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-primary)]">Same Day</p>
            <p className="text-xs sm:text-sm text-gray-400">Service Available</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-primary)]">Metro</p>
            <p className="text-xs sm:text-sm text-gray-400">Atlanta Coverage</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
