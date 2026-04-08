import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mold Remediation & Emergency Restoration Atlanta | Act of Valor",
  description:
    "Act of Valor provides same-day mold remediation, water damage cleanup, biohazard cleanup, and fire damage restoration in Atlanta, Sandy Springs, Marietta, Douglasville, and Buckhead. Call now for immediate help.",
  robots: "index, follow",
  openGraph: {
    title: "Act of Valor — Emergency Restoration Services Atlanta",
    description:
      "Same-day mold, water, biohazard & fire cleanup across Atlanta. Trusted by law enforcement. Call now for immediate help.",
    type: "website",
    url: "https://actofvalorllc.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Act of Valor — Emergency Restoration Atlanta",
    description:
      "Same-day mold, water, biohazard & fire cleanup across Atlanta. Trusted by families and law enforcement.",
  },
  alternates: {
    canonical: "https://actofvalorllc.com/",
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
                "Emergency restoration services including mold remediation, water damage cleanup, biohazard cleanup, and fire damage restoration in Atlanta, GA.",
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
                { "@type": "City", name: "Atlanta" },
                { "@type": "City", name: "Sandy Springs" },
                { "@type": "City", name: "Marietta" },
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
                      name: "Mold Remediation Atlanta",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Water Damage Cleanup Atlanta",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Biohazard Cleanup Atlanta",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fire Damage Restoration Atlanta",
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
                  name: "Do you offer same-day mold remediation in Atlanta?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Act of Valor provides same-day mold remediation across Atlanta and the surrounding metro area including Sandy Springs, Marietta, Douglasville, and Buckhead.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle biohazard and trauma cleanup?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We provide discreet, respectful trauma and biohazard cleanup services with full restoration. We work closely with law enforcement and local professionals.",
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
