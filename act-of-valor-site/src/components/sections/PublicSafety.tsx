'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SAFETY_UPDATES } from '@/lib/constants';

export default function PublicSafety() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section id="safety" className="w-full bg-[var(--color-surface-page)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-primary)]">
            Local Updates
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
            Atlanta Public Safety Updates
          </h2>
          <p className="mt-4 text-lg text-[var(--color-content-primary)]">
            Stay informed with relevant updates affecting the Atlanta metro area.
          </p>
        </motion.div>

        {/* Updates Feed */}
        <motion.div
          className="space-y-4 md:space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SAFETY_UPDATES.map((update) => (
            <motion.div
              key={update.title}
              className="rounded border-l-4 border-[var(--color-navy)] bg-[var(--color-surface-card)] p-6 shadow-[var(--shadow-sm)] transition-shadow duration-200 hover:shadow-[var(--shadow-md)]"
              variants={fadeUp}
            >
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-bold text-[var(--color-navy)]">
                  {formatDate(update.date)}
                </p>
                <p className="text-sm text-[var(--color-content-tertiary)]">{update.source}</p>
              </div>
              <h4 className="text-lg font-bold text-[var(--color-navy)]">
                {update.title}
              </h4>
              <p className="mt-2 text-[var(--color-content-primary)]">
                {update.description}
              </p>
              <a
                href={update.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[var(--color-brand-primary-hover)] transition-colors duration-200 hover:text-[var(--color-navy)]"
              >
                Read more &#x2192;
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-10 rounded border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] p-4 text-sm text-[var(--color-content-secondary)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p>
            Updates are sourced from public records. For official information, contact local authorities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
