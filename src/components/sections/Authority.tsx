'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { AUTHORITY_BLOCKS } from '@/lib/constants';

export default function Authority() {
  return (
    <section id="authority" className="w-full bg-[var(--color-navy)] py-20 sm:py-28 lg:py-32">
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
              Licensing &amp; Certifications
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-content-inverse)]"
          >
            Licensed. Certified. Prepared.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-lg text-gray-300"
          >
            Every credential reflects our commitment to professional excellence and your safety.
          </motion.p>
        </div>

        {/* Authority Blocks Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {AUTHORITY_BLOCKS.map((block, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-lg bg-white/5 border border-[var(--color-brand-primary)]/30 p-6 sm:p-7 transition-all duration-300 hover:bg-white/10 hover:border-[var(--color-brand-primary)]/60"
            >
              {/* Header */}
              <div className="pb-5 border-b border-[var(--color-brand-primary)]/20 group-hover:border-[var(--color-brand-primary)]/40 transition-colors duration-300 mb-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{block.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-brand-primary)]">
                    {block.title}
                  </h3>
                </div>
              </div>

              {/* Licenses List */}
              <ul className="space-y-3 mb-5">
                {block.licenses.map((license, licIdx) => (
                  <li key={licIdx} className="flex items-start gap-2 text-sm text-gray-200">
                    <span className="text-[var(--color-brand-primary)] font-bold flex-shrink-0 mt-0.5">
                      &#x2713;
                    </span>
                    <span>{license}</span>
                  </li>
                ))}
              </ul>

              {/* Footnote */}
              <p className="text-xs sm:text-sm italic text-gray-400">
                {block.footnote}
              </p>

              {/* Hover accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-brand-primary)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
