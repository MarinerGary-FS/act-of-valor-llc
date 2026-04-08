'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { RESOURCES } from '@/lib/constants';

const categoryIcons: { [key: string]: string } = {
  'Weather & Storm Tracking': '🌧️',
  'Atlanta / Georgia Public Safety': '🚔',
  'Emergency Preparedness': '🏠',
  'Insurance & Claims Guidance': '📋',
  'Restoration Education': '📚',
};

export default function Resources() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A96A]">
            Resources
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0B1F2A] md:text-4xl">
            Helpful Resources for Emergencies & Preparedness
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1C1C1C]">
            Access trusted, local resources to stay informed, prepared, and supported during emergencies.
          </p>
        </motion.div>

        {/* Resource Categories Grid */}
        <motion.div
          className="grid auto-fit gap-6 md:gap-8"
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
              className="rounded-2xl border border-[#E0E0E0] bg-[#F7F7F7] p-6"
              variants={fadeUp}
            >
              {/* Category Header */}
              <div className="mb-4 border-b border-[#D0D0D0] pb-4">
                <p className="text-base font-bold text-[#0B1F2A]">
                  <span className="mr-2">{categoryIcons[category] || '📌'}</span>
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
                      className="inline-flex items-start text-[#1C1C1C] transition-colors duration-200 hover:text-[#0B1F2A]"
                    >
                      <span className="mr-2 flex-shrink-0 text-[#A8843A]">↗</span>
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
