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
    // Form submission logic would go here
    // For now, just show success state
    setIsSubmitted(true);
    // Reset form after 3 seconds
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

  const serviceAreas = [
    'Atlanta',
    'Sandy Springs',
    'Marietta',
    'Douglasville',
    'Buckhead',
  ];

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Left Column */}
        <motion.div variants={fadeUp} className="flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Get Help Now
          </h2>
          <p className="text-base sm:text-lg text-charcoal text-opacity-70 mb-8">
            We understand you're in a stressful situation. Our team is ready to
            provide immediate support and same-day response across the Atlanta
            metro area.
          </p>

          {/* Contact Options */}
          <div className="space-y-6 mb-8">
            {/* Phone Option */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">☎</span>
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">
                  Call Us Now
                </h3>
                <a
                  href="tel:+14708819911"
                  className="text-gold hover:text-gold-dark font-semibold transition-colors"
                >
                  (470) 881-9911
                </a>
              </div>
            </div>

            {/* Email Option */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">✉</span>
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Email Us</h3>
                <a
                  href="mailto:info@actofvalorrestoration.com"
                  className="text-gold hover:text-gold-dark font-semibold transition-colors"
                >
                  info@actofvalorrestoration.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas Box */}
          <div className="bg-off-white rounded-lg p-6 border-l-4 border-gold">
            <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">
              Our Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="text-charcoal text-sm flex items-start gap-2"
                >
                  <span className="text-gold font-bold mt-0.5">•</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div variants={fadeUp}>
          <div className="bg-off-white rounded-lg p-6 sm:p-8">
            {/* Form State */}
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
                  Request Same-Day Service
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy text-charcoal"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy text-charcoal"
                      placeholder="(470) 881-9911"
                    />
                  </div>

                  {/* Service Type Select */}
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      What Happened?
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy text-charcoal bg-white"
                    >
                      <option value="">Select a service type</option>
                      <option value="mold">Mold Damage</option>
                      <option value="water">Water Damage</option>
                      <option value="biohazard">Biohazard/Trauma</option>
                      <option value="fire">Fire Damage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Location Field */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Location / Area
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy text-charcoal"
                      placeholder="e.g., Marietta, GA"
                    />
                  </div>

                  {/* Details Textarea */}
                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-charcoal border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy text-charcoal resize-none"
                      placeholder="Tell us more about what happened..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 sm:py-4 bg-navy text-white font-bold text-base sm:text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 active:scale-95"
                  >
                    Send My Request
                  </button>
                </form>
              </>
            ) : (
              // Success State
              <div className="flex flex-col items-center justify-center py-12 text-center border-4 border-gold rounded-lg bg-white">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Request Received
                </h3>
                <p className="text-charcoal text-opacity-70 mb-2">
                  Thank you! We've received your request.
                </p>
                <p className="text-sm text-charcoal text-opacity-60">
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
