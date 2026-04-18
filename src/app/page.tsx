import Hero from "@/components/sections/Hero";
import GeoDominance from "@/components/sections/GeoDominance";
import TrustSection from "@/components/sections/TrustSection";
import Services from "@/components/sections/Services";
import CTABlock from "@/components/sections/CTABlock";
import About from "@/components/sections/About";
import Authority from "@/components/sections/Authority";
import Credentials from "@/components/sections/Credentials";
import Resources from "@/components/sections/Resources";
import PublicSafety from "@/components/sections/PublicSafety";
import ContactForm from "@/components/sections/ContactForm";

/**
 * ACT OF VALOR — HOMEPAGE
 *
 * Section flow follows CONVERSION_ENGINE.md Profile A:
 * 1. Hero → Establish what this is and who it's for
 * 2. Trust Section → Social proof near hero (within 2 sections)
 * 3. Services → Help user identify their situation
 * 4. CTA Block #1 → Reinforce action after services
 * 5. About → Expert leadership + Brian W. Miller
 * 6. Authority → Licensing & certifications at a glance
 * 7. Credentials → Full credential reference with images
 * 8. CTA Block #2 → Re-offer before resources
 * 9. Resources → SEO authority module
 * 10. Public Safety → Local relevance module
 * 11. Contact Form → Final low-friction conversion
 * 12. Footer (in layout)
 */
export default function Home() {
  return (
    <>
      {/* 1. HERO — Primary conversion entry */}
      <Hero />

      {/* 1a. GEO DOMINANCE — Local SEO reinforcement under hero */}
      <GeoDominance />

      {/* 2. TRUST — Social proof near hero (CONVERSION_ENGINE.md) */}
      <TrustSection />

      {/* 3. SERVICES — Decision engine */}
      <Services />

      {/* 4. CTA BLOCK #1 — Post-services conversion reinforcement */}
      <CTABlock
        heading="Need Help Right Now?"
        subtext="Our team is standing by — ready to respond same-day across Atlanta and the metro area."
      />

      {/* 5. ABOUT — Expert leadership */}
      <About />

      {/* 6. AUTHORITY — Licensing & certifications at a glance */}
      <Authority />

      {/* 7. CREDENTIALS — Full credential reference with images */}
      <Credentials />

      {/* 8. CTA BLOCK #2 — Re-offer before resources */}
      <CTABlock
        heading="Don't Wait — Every Minute Matters"
        subtext="Whether it's mold, water damage, or a biohazard situation, our certified team is ready to help right now."
        dark
      />

      {/* 9. RESOURCES — SEO authority module */}
      <Resources />

      {/* 10. PUBLIC SAFETY — Local relevance */}
      <PublicSafety />

      {/* 11. CONTACT — Final conversion moment */}
      <ContactForm />
    </>
  );
}
