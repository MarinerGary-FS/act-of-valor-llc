'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SITE } from '@/lib/constants';

const credentials = [
  'Georgia Trauma Scene Waste Management Company',
  'IICRC Certified — Water, Mold, Fire, Drying',
  'Georgia Property & Casualty Adjuster',
  'Lead-Safe Renovator Certified',
  'Georgia Real Estate License',
];

const aboutText = [
  'Brian W. Miller is the founder and lead practitioner at Act of Valor, bringing over a decade of specialized expertise in emergency restoration and trauma scene management. His approach combines technical certification with genuine compassion for families in crisis.',
  'With certifications across water damage restoration, structural drying, microbial remediation, fire and smoke recovery, and trauma scene restoration, Brian ensures every project meets IICRC standards while respecting the sensitive nature of each situation. His commitment to continuing education and professional development keeps Act of Valor at the forefront of restoration practices.',
  'Trusted by law enforcement, insurance adjusters, and Atlanta-area families, Brian has built Act of Valor on the principle of immediate, professional, and compassionate response—because in a crisis, you need someone who understands both the technical work and the human impact.',
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-surface-card)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Authority Headline — State Licensing Positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-6xl mx-auto mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-primary)]">
            State Licensed
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy)] leading-tight">
          Georgia Trauma Scene Waste Management Company
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-[var(--color-content-secondary)]">
          Fully licensed by the State of Georgia for trauma scene waste management — authorized for certified biohazard handling, disposal, and remediation operations statewide.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-8 lg:gap-12 items-start"
      >
        {/* Left Column - Profile Card */}
        <motion.div variants={fadeUp}>
          <div className="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-charcoal)] rounded-lg p-8 text-center sticky top-8">
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center">
              <span className="text-[var(--color-navy)] font-bold text-4xl">BM</span>
            </div>

            {/* Name and Title */}
            <h3 className="text-2xl font-bold text-[var(--color-content-inverse)] mb-2">
              Brian W. Miller
            </h3>
            <p className="text-[var(--color-brand-primary)] uppercase text-xs font-bold tracking-widest mb-8">
              Founder &amp; Lead Practitioner
            </p>

            {/* License Badges */}
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                >
                  <p className="text-[var(--color-content-inverse)] text-sm font-medium leading-snug">
                    <span className="text-[var(--color-brand-primary)] mr-2">&#x1F396;</span>
                    {credential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={fadeUp} className="flex flex-col">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-brand-primary)]" />
            <span className="text-[var(--color-brand-primary)] uppercase text-xs font-bold tracking-widest">
              Expert Leadership
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-navy)] mb-6">
            Experienced. Certified. Trusted.
          </h2>

          <div className="space-y-5 mb-8 text-[var(--color-content-secondary)]">
            {aboutText.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-fit">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-navy)] text-[var(--color-content-inverse)] font-bold text-base sm:text-lg rounded-lg hover:opacity-90 transition-all duration-300 active:scale-95"
            >
              Request Immediate Help
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold text-base sm:text-lg rounded-lg hover:bg-[var(--color-navy)] hover:text-[var(--color-content-inverse)] transition-all duration-300"
            >
              Call Now — Immediate Response
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
