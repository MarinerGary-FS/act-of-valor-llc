"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-charcoal)] text-white">
      {/* Location Bar */}
      <div className="bg-[var(--color-navy)] py-4 px-5 md:px-8">
        <div className="w-full mx-auto max-w-6xl">
          <p className="text-xs md:text-sm font-medium text-center md:text-left mb-2">
            SERVICE AREAS
          </p>
          <div className="flex flex-wrap gap-3 md:gap-6 justify-center md:justify-start">
            {SITE.serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-1.5">
                <span className="text-base">📍</span>
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-5 md:px-8 py-16">
        <div className="w-full mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Brand Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/aoc-logo.png"
                  alt="Act of Valor logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="text-lg font-bold">{SITE.name}</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {SITE.tagline}
              </p>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-gold)] text-[var(--color-navy)] font-medium rounded hover:bg-[var(--color-gold-dark)] transition-colors text-sm"
              >
                {SITE.phone}
              </a>
              <div className="flex gap-3">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-xs font-bold transition-colors"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href={SITE.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-xs font-bold transition-colors"
                  aria-label="TikTok"
                >
                  TT
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-semibold text-base mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  >
                    Mold Removal
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  >
                    Water Damage
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  >
                    Biohazard Cleanup
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  >
                    Fire Restoration
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-semibold text-base mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#authority"
                    className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  >
                    Credentials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Emergency Column */}
            <div>
              <h4 className="font-semibold text-base mb-4">Emergency</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                    24/7 Hotline
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="text-lg font-bold text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                    Availability
                  </p>
                  <p className="text-sm font-medium">{SITE.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} {SITE.name}. All rights
              reserved.
            </p>
            <p className="text-xs text-gray-500">
              Built by Mariner Nexus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
