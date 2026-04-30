'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  return (
    <section id="services" className="w-full bg-[var(--color-surface-page)] py-20 sm:py-28 lg:py-32">
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
              Our Services
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-navy)]"
          >
            Emergency Biohazard Cleanup in Cobb County
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-lg text-[var(--color-content-secondary)]"
          >
            Act of Valor provides emergency cleanup support for water, structural drying,
            microbial, fire, and trauma restoration across Cobb County, including Marietta,
            Smyrna, Kennesaw, and the greater Atlanta metro.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-[var(--color-surface-card)] border border-[var(--color-border-default)] p-6 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
            >
              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-brand-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-surface-subtle)] text-2xl group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-content-inverse)] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-[var(--color-navy)]">
                {service.title}
              </h3>

              {/* Problem Statement */}
              <p className="mb-3 text-sm font-medium text-[var(--color-brand-secondary)]">
                {service.problem}
              </p>

              {/* Instruction */}
              <p className="mb-4 text-sm italic text-[var(--color-content-secondary)]">
                {service.instruction}
              </p>

              {/* Bullets */}
              <ul className="mb-6 space-y-2">
                {service.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-[var(--color-content-secondary)]"
                  >
                    <span className="mt-1.5 flex-shrink-0 text-[var(--color-brand-primary)]">
                      →
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button — Routes to contact form */}
              <a
                href="#contact"
                className="block w-full rounded-lg bg-[var(--color-navy)] hover:bg-[var(--color-charcoal)] text-[var(--color-content-inverse)] font-semibold py-3 px-4 text-center transition-colors duration-200"
              >
                {service.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
