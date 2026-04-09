'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SITE } from '@/lib/constants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    location: '',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        serviceType: '',
        location: '',
        details: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="bg-[var(--color-surface-card)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Left Column */}
        <motion.div variants={fadeUp} className="flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)] mb-4">
            Get Help Now
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-content-secondary)] mb-8">
            We understand you&apos;re in a stressful situation. Our team is ready to
            provide immediate support and same-day response across the Atlanta
            metro area.
          </p>

          {/* Contact Options */}
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-navy)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-content-inverse)] text-lg font-bold">&#x260E;</span>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-1">
                  Call Us Now
                </h3>
                <a
                  href={SITE.phoneHref}
                  className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)] font-semibold transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-navy)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-content-inverse)] text-lg font-bold">&#x2709;</span>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-1">Email Us</h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)] font-semibold transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas Box */}
          <div className="bg-[var(--color-surface-page)] rounded-lg p-6 border-l-4 border-[var(--color-brand-primary)]">
            <h4 className="font-bold text-[var(--color-navy)] text-sm uppercase tracking-wider mb-3">
              Our Service Areas
            </h4>
            <ul className="space-y-2">
              {SITE.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="text-[var(--color-content-primary)] text-sm flex items-start gap-2"
                >
                  <span className="text-[var(--color-brand-primary)] font-bold mt-0.5">&#x2022;</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div variants={fadeUp}>
          <div className="bg-[var(--color-surface-page)] rounded-lg p-6 sm:p-8">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] mb-6">
                  Request Same-Day Service
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[var(--color-content-primary)] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] text-[var(--color-content-primary)] bg-[var(--color-surface-card)]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[var(--color-content-primary)] mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] text-[var(--color-content-primary)] bg-[var(--color-surface-card)]"
                      placeholder="(470) 881-9911"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-semibold text-[var(--color-content-primary)] mb-2"
                    >
                      What Happened? *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] text-[var(--color-content-primary)] bg-[var(--color-surface-card)]"
                    >
                      <option value="">Select a service type</option>
                      <option value="water">Water Damage Restoration</option>
                      <option value="structural-drying">Structural Drying</option>
                      <option value="microbial">Microbial Remediation</option>
                      <option value="fire">Fire &amp; Smoke Restoration</option>
                      <option value="trauma">Trauma / Crime Scene</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold text-[var(--color-content-primary)] mb-2"
                    >
                      Location / Area
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] text-[var(--color-content-primary)] bg-[var(--color-surface-card)]"
                      placeholder="e.g., Marietta, GA"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm font-semibold text-[var(--color-content-primary)] mb-2"
                    >
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] text-[var(--color-content-primary)] bg-[var(--color-surface-card)] resize-none"
                      placeholder="Tell us more about what happened..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 sm:py-4 bg-[var(--color-navy)] text-[var(--color-content-inverse)] font-bold text-base sm:text-lg rounded-lg hover:opacity-90 transition-all duration-300 active:scale-95"
                  >
                    Get Immediate Help
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center border-4 border-[var(--color-brand-primary)] rounded-lg bg-[var(--color-surface-card)]">
                <div className="text-5xl mb-4">&#x2713;</div>
                <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">
                  Request Received
                </h3>
                <p className="text-[var(--color-content-secondary)] mb-2">
                  Thank you! We&apos;ve received your request.
                </p>
                <p className="text-sm text-[var(--color-content-tertiary)]">
                  Our team will contact you shortly to confirm same-day service.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
