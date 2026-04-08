'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

const credentials = [
  'GA Trauma Scene Waste Management Practitioner',
  'IICRC Certified — Water, Mold, Fire, Drying',
  'Georgia Property & Casualty Adjuster',
  'Lead-Safe Renovator Certified',
  'Georgia Real Estate License',
];

const aboutText = [
  'Brian W. Miller is the founder and lead practitioner at Act of Valor, bringing over a decade of specialized expertise in emergency restoration and trauma scene management. His approach combines technical certification with genuine compassion for families in crisis.',
  'With certifications across water restoration, mold remediation, fire damage recovery, and trauma scene cleanup, Brian ensures every project meets industry standards while respecting the sensitive nature of each situation. His commitment to continuing education and professional development keeps Act of Valor at the forefront of restoration practices.',
  'Trusted by law enforcement, insurance adjusters, and Atlanta-area families, Brian has built Act of Valor on the principle of immediate, professional, and compassionate response—because in a crisis, you need someone who understands both the technical work and the human impact.',
];

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-8 lg:gap-12 items-start"
      >
        {/* Left Column - Profile Card */}
        <motion.div variants={fadeUp}>
          <div className="bg-gradient-to-br from-navy to-charcoal rounded-lg p-8 text-center sticky top-8">
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
              <span className="text-navy font-bold text-4xl">BM</span>
            </div>

            {/* Name and Title */}
            <h3 className="text-2xl font-bold text-white mb-2">
              Brian W. Miller
            </h3>
            <p className="text-gold uppercase text-xs font-bold tracking-widest mb-8">
              Founder & Lead Practitioner
            </p>

            {/* License Badges */}
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 rounded-lg p-3 backdrop-blur-sm"
                >
                  <p className="text-white text-sm font-medium leading-snug">
                    <span className="text-gold mr-2">🏅</span>
                    {credential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={fadeUp} className="flex flex-col">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-gold uppercase text-xs font-bold tracking-widest">
              Expert Leadership
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Experienced. Certified. Trusted.
          </h2>

          {/* About Paragraphs */}
          <div className="space-y-5 mb-8 text-charcoal text-opacity-80">
            {aboutText.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="tel:+14708819911"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-navy text-white font-bold text-base sm:text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 active:scale-95 w-fit"
          >
            Call Our Team — (470) 881-9911
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
