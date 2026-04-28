"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-navy)] transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <div className="px-5 md:px-8 py-4">
          <div className="w-full mx-auto max-w-6xl flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/aoc-logo.png"
                alt="Act of Valor logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="hidden sm:inline text-white font-bold text-lg">
                {SITE.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/#services"
                className="text-white text-sm font-medium hover:text-[var(--color-gold)] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#authority"
                className="text-white text-sm font-medium hover:text-[var(--color-gold)] transition-colors"
              >
                Credentials
              </Link>
              <Link
                href="/#about"
                className="text-white text-sm font-medium hover:text-[var(--color-gold)] transition-colors"
              >
                About
              </Link>
              <Link
                href="/#resources"
                className="text-white text-sm font-medium hover:text-[var(--color-gold)] transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/#contact"
                className="text-white text-sm font-medium hover:text-[var(--color-gold)] transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side: Phone + CTA */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Phone Number (Desktop) */}
              <a
                href={SITE.phoneHref}
                className="hidden sm:flex items-center text-[var(--color-gold)] font-semibold hover:text-[var(--color-gold-dark)] transition-colors"
              >
                {SITE.phone}
              </a>

              {/* Call Now Button */}
              <a
                href={SITE.phoneHref}
                className="hidden md:inline-block px-4 py-2 md:px-6 md:py-2.5 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold rounded hover:bg-[var(--color-gold-dark)] transition-colors text-sm whitespace-nowrap"
              >
                Call Now
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-[var(--color-navy)] border-b border-white/10 lg:hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <Link
                href="/#services"
                className="block text-white font-medium hover:text-[var(--color-gold)] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#authority"
                className="block text-white font-medium hover:text-[var(--color-gold)] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Credentials
              </Link>
              <Link
                href="/#about"
                className="block text-white font-medium hover:text-[var(--color-gold)] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#resources"
                className="block text-white font-medium hover:text-[var(--color-gold)] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/#contact"
                className="block text-white font-medium hover:text-[var(--color-gold)] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Section */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs text-gray-300 uppercase tracking-wide">
                  Need Help Now?
                </p>
                <a
                  href={SITE.phoneHref}
                  className="block w-full text-center px-4 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold rounded hover:bg-[var(--color-gold-dark)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Call Now: {SITE.phone}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Spacer to account for fixed header */}
      <div className="h-[65px]" />
    </>
  );
}
