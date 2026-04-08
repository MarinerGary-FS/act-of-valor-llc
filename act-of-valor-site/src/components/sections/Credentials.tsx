'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { CREDENTIALS } from '@/lib/constants';

export default function Credentials() {
  // Separate featured and regular credentials
  const featuredCredentials = CREDENTIALS.filter((c) => c.featured);
  const regularCredentials = CREDENTIALS.filter((c) => !c.featured);

  return (
    <section className="w-full bg-[var(--color-off-white)] py-20 sm:py-28 lg:py-32">
      <motion.div
        className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <div className="mb-16 text-center">
          {/* Tag */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
              Professional Credentials
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-navy)]"
          >
            Every License. Every Certification.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Our team is fully licensed and certified by industry-leading organizations. Trust in expertise that matters.
          </motion.p>
        </div>

        {/* Featured Credentials Row */}
        {featuredCredentials.length > 0 && (
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCredentials.map((cred) => (
                <motion.div
                  key={cred.name}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-xl bg-white border-l-4 border-[var(--color-gold)] p-8 sm:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
                >
                  {/* Image */}
                  <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={cred.image}
                      alt={cred.alt}
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Badge */}
                    <div className="inline-block sm:inline mb-3 px-3 py-1 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold rounded-full">
                      State Licensed
                    </div>

                    {/* Name */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-navy)] mb-1">
                      {cred.name}
                    </h3>

                    {/* Organization */}
                    <p className="text-sm sm:text-base text-gray-600">
                      {cred.org}
                    </p>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-gold)] opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Credentials Grid */}
        {regularCredentials.length > 0 && (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {regularCredentials.map((cred) => (
              <motion.div
                key={cred.name}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-lg bg-white p-5 sm:p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="mb-4 flex items-center justify-center h-20 w-20 mx-auto bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={cred.image}
                    alt={cred.alt}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-bold text-[var(--color-navy)] mb-1 line-clamp-2">
                  {cred.name}
                </h3>

                {/* Organization */}
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {cred.org}
                </p>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
