'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { RESOURCES } from '@/lib/constants';

const categoryEmoji: { [key: string]: string } = {
  'Weather & Storm Tracking': '\u{1F327}\u{FE0F}',
  'Atlanta / Georgia Public Safety': '\u{1F694}',
  'Emergency Preparedness': '\u{1F3E0}',
  'Insurance & Claims Guidance': '\u{1F4CB}',
  'Restoration Education': '\u{1F4DA}',
};

export default function Resources() {
  return (
    <section id="resources" className="w-full bg-[var(--color-surface-card)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-primary)]">
            Resources
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
            Helpful Resources for Emergencies &amp; Preparedness
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-content-primary)]">
            Access trusted, local resources to stay informed, prepared, and supported during emergencies.
          </p>
        </motion.div>

        {/* Resource Categories Grid */}
        <motion.div
          className="grid gap-6 md:gap-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {Object.entries(RESOURCES).map(([category, links]) => (
            <motion.div
              key={category}
              className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-page)] p-6"
              variants={fadeUp}
            >
              {/* Category Header */}
              <div className="mb-4 border-b border-[var(--color-border-strong)] pb-4">
                <p className="text-base font-bold text-[var(--color-navy)]">
                  <span className="mr-2">{categoryEmoji[category] || '\u{1F4CC}'}</span>
                  {category}
                </p>
              </div>

              {/* Links List */}
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start text-[var(--color-content-primary)] transition-colors duration-200 hover:text-[var(--color-navy)]"
                    >
                      <span className="mr-2 flex-shrink-0 text-[var(--color-brand-primary-hover)]">&#x2197;</span>
                      <span className="text-sm leading-relaxed">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
