import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CTABlock from "@/components/sections/CTABlock";
import TrustSection from "@/components/sections/TrustSection";
import Authority from "@/components/sections/Authority";
import About from "@/components/sections/About";
import Credentials from "@/components/sections/Credentials";
import Resources from "@/components/sections/Resources";
import PublicSafety from "@/components/sections/PublicSafety";
import ContactForm from "@/components/sections/ContactForm";

/**
 * ACT OF VALOR — HOMEPAGE
 *
 * Section flow follows CONVERSION_ENGINE.md Profile A:
 * 1. Hero → Establish what this is and who it's for
 * 2. Services → Help user identify their situation in <5 seconds
 * 3. CTA Block #1 → Reinforce action after services
 * 4. Trust Section → Why Atlanta trusts us
 * 5. Authority → Licensing & certifications
 * 6. About → Expert leadership + Brian W. Miller
 * 7. Credentials → Full credential reference with images
 * 8. CTA Block #2 → Re-offer before resources
 * 9. Resources → SEO authority module
 * 10. Public Safety → Local relevance module
 * 11. Contact Form → Final low-friction conversion
 * 12. Footer (in layout) → Navigation, legal, final CTA
 */
export default function Home() {
  return (
    <>
      {/* 1. HERO — Primary conversion entry */}
      <Hero />

      {/* 2. SERVICES — Decision engine */}
      <Services />

      {/* 3. CTA BLOCK #1 — Post-services conversion reinforcement */}
      <CTABlock
        heading="Need Help Right Now?"
        subtext="Our team is standing by — ready to respond same-day across Atlanta and the metro area."
      />

      {/* 4. TRUST — Emotional + authority layer */}
      <TrustSection />

      {/* 5. AUTHORITY — Licensing & certifications */}
      <Authority />

      {/* 6. ABOUT — Expert leadership */}
      <About />

      {/* 7. CREDENTIALS — Full credential reference */}
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
