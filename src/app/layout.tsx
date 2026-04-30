import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://actofvalorllc.com"),
  title: "Trauma Cleanup & Biohazard Remediation in Cobb County, Georgia | Act of Valor",
  description:
    "Act of Valor — Georgia-licensed trauma scene and biohazard cleanup support. Crime scene cleanup, biohazard remediation, water damage restoration, structural drying, and fire restoration in Cobb County and across Georgia. IICRC-aligned. Call (470) 881-9911.",
  keywords: [
    "cobb county trauma cleanup",
    "crime scene cleanup cobb county",
    "biohazard cleanup georgia",
    "trauma waste management georgia",
    "emergency cleanup services cobb county",
    "trauma cleanup marietta",
    "biohazard cleanup smyrna",
    "crime scene cleanup kennesaw",
    "water damage restoration marietta",
    "structural drying georgia",
    "microbial remediation atlanta",
    "fire and smoke restoration cobb county",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Act of Valor — Trauma Cleanup & Biohazard Remediation in Cobb County, Georgia",
    description:
      "Georgia-licensed trauma scene and biohazard cleanup support, biohazard remediation, and water damage restoration across Cobb County. Call now.",
    type: "website",
    url: "https://actofvalorllc.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Act of Valor — Trauma & Biohazard Remediation Cobb County",
    description:
      "Georgia-licensed trauma scene and biohazard cleanup support, water, fire, and microbial remediation across Cobb County and the Atlanta metro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Act of Valor",
              description:
                "IICRC-aligned emergency restoration services including water damage restoration, structural drying, microbial remediation, fire and smoke restoration, and trauma scene restoration in Atlanta, GA.",
              telephone: "(470) 881-9911",
              email: "info@actofvalorllc.com",
              url: "https://actofvalorllc.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Atlanta",
                addressRegion: "GA",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Cobb County, Georgia" },
                { "@type": "State", name: "Georgia" },
                { "@type": "City", name: "Marietta" },
                { "@type": "City", name: "Smyrna" },
                { "@type": "City", name: "Kennesaw" },
                { "@type": "City", name: "Atlanta" },
                { "@type": "City", name: "Sandy Springs" },
                { "@type": "City", name: "Douglasville" },
                { "@type": "City", name: "Buckhead" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Emergency Restoration Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Water Damage Restoration Atlanta",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Structural Drying Atlanta",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Microbial Remediation Atlanta",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fire and Smoke Damage Restoration Atlanta",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Trauma and Crime Scene Restoration Atlanta",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.instagram.com/ceoglm/",
                "https://www.tiktok.com/@ceoglm",
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do you offer water damage restoration in Atlanta?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Act of Valor provides water damage restoration and structural drying across Atlanta and the surrounding metro area including Sandy Springs, Marietta, Douglasville, and Buckhead.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle trauma and crime scene restoration?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We provide discreet, Georgia-licensed trauma and crime scene restoration support for families, property managers, and businesses, with credential documentation available upon request.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are you available 24/7 for emergencies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Act of Valor is available 24 hours a day, 7 days a week for emergency restoration situations including mold, water damage, fire, and biohazard.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col"
        style={{
          fontFamily:
            "var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          backgroundColor: "var(--color-surface-page)",
          color: "var(--color-content-primary)",
        }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
