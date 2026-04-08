'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { SITE } from '@/lib/constants';

interface CTABlockProps {
  heading: string;
  subtext: string;
  dark?: boolean;
  id?: string;
}

export default function CTABlock({
  heading,
  subtext,
  dark = false,
  id,
}: CTABlockProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${
        dark ? 'bg-[var(--color-charcoal)]' : 'bg-[var(--color-navy)]'
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-content-inverse)] mb-4 sm:mb-6">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-12">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-brand-primary)] text-[var(--color-navy)] font-bold text-base sm:text-lg rounded-lg hover:bg-[var(--color-brand-primary-hover)] transition-colors duration-300 whitespace-nowrap"
          >
            Call Now — Immediate Help
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--color-content-inverse)] text-[var(--color-content-inverse)] font-bold text-base sm:text-lg rounded-lg hover:bg-[var(--color-content-inverse)] hover:text-[var(--color-navy)] transition-colors duration-300 whitespace-nowrap"
          >
            Request Same-Day Service
          </a>
        </div>
      </motion.div>
    </section>
  );
}
