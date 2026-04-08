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
  const bgColor = dark ? 'bg-charcoal' : 'bg-navy';

  return (
    <section id={id} className={`${bgColor} py-16 sm:py-20 px-4 sm:px-6 lg:px-8`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-white text-opacity-70 mb-8 sm:mb-12">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          {/* Primary CTA Button */}
          <a
            href="tel:+14708819911"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gold text-navy font-bold text-base sm:text-lg rounded-lg hover:bg-gold-dark transition-colors duration-300 whitespace-nowrap"
          >
            Call Now — Immediate Help
          </a>

          {/* Secondary CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold text-base sm:text-lg rounded-lg hover:bg-white hover:text-navy transition-colors duration-300 whitespace-nowrap"
          >
            Request Same-Day Service
          </a>
        </div>
      </motion.div>
    </section>
  );
}
