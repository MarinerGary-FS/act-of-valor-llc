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
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A96A]">
            Local Updates
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0B1F2A] md:text-4xl">
            Atlanta Public Safety Updates
          </h2>
          <p className="mt-4 text-lg text-[#1C1C1C]">
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
              className="rounded border-l-4 border-[#0B1F2A] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              variants={fadeUp}
            >
              {/* Meta Information (date + source) */}
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-bold text-[#0B1F2A]">
                  {formatDate(update.date)}
                </p>
                <p className="text-sm text-gray-500">{update.source}</p>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-[#0B1F2A]">
                {update.title}
              </h4>

              {/* Description */}
              <p className="mt-2 text-[#1C1C1C]">
                {update.description}
              </p>

              {/* Read More Link */}
              <a
                href={update.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[#A8843A] transition-colors duration-200 hover:text-[#0B1F2A]"
              >
                Read more →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-10 rounded border border-[#D0D0D0] bg-white p-4 text-sm text-gray-600"
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
