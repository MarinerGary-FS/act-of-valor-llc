'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function TrustSection() {
  const trustItems = [
    'Compassionate approach',
    'Trusted by law enforcement',
    'Same-day response',
    'Licensed and certified',
  ];

  const stats = [
    { value: '24/7', label: 'Always available' },
    { value: '4', label: 'Core services' },
    { value: '5+', label: 'Metro areas' },
    { value: 'Same Day', label: 'Response' },
  ];

  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-32">
      <motion.div
        className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div variants={fadeUp}>
            {/* Tag */}
            <div className="mb-6">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-navy)]">
              Why Atlanta Trusts Act of Valor
            </h2>

            {/* Lead Quote */}
            <p className="mb-8 text-lg sm:text-xl italic text-gray-700">
              We don't just restore spaces—we help people move forward.
            </p>

            {/* Paragraph */}
            <p className="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
              When disaster strikes, Act of Valor is there—not just to clean up, but to restore peace of mind. Our team combines professional expertise with genuine compassion, treating every crisis as if it were our own family's emergency.
            </p>

            {/* Trust Items List */}
            <ul className="space-y-4">
              {trustItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  {/* Gold Circle Checkmark */}
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-gold)] text-white">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg text-[var(--color-navy)] font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Stats Card */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Navy Gradient Card */}
            <div className="w-full max-w-sm bg-gradient-to-br from-[var(--color-navy)] to-[#0F2C3D] rounded-2xl p-8 sm:p-10 text-white shadow-xl">
              {/* 2x2 Stats Grid */}
              <div className="grid grid-cols-2 gap-8 sm:gap-10">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    {/* Gold Number */}
                    <p className="text-3xl sm:text-4xl font-bold text-[var(--color-gold)] mb-2">
                      {stat.value}
                    </p>
                    {/* White Label */}
                    <p className="text-xs sm:text-sm text-white text-opacity-90 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Subtle decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[var(--color-gold)] opacity-5 rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
