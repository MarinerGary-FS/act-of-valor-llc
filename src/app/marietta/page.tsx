import type { Metadata } from 'next';
import LocationPage from '@/components/sections/LocationPage';

export const metadata: Metadata = {
  title: 'Marietta Trauma Cleanup & Biohazard Remediation | Act of Valor',
  description:
    'Trauma scene cleanup, biohazard remediation, water damage restoration, and fire and smoke restoration in Marietta, Georgia. Georgia-licensed. IICRC-aligned.',
  alternates: { canonical: 'https://actofvalorllc.com/marietta' },
  openGraph: {
    title: 'Marietta Trauma Cleanup & Biohazard Remediation | Act of Valor',
    description:
      'Trauma, biohazard, and restoration services in Marietta, GA. Georgia-licensed. IICRC-aligned.',
    url: 'https://actofvalorllc.com/marietta',
    type: 'website',
  },
};

export default function MariettaPage() {
  return (
    <LocationPage
      locationName="Marietta"
      localityContext="Cobb County, Georgia"
      canonicalUrl="https://actofvalorllc.com/marietta"
      intro="Trauma scene cleanup, biohazard remediation, water damage restoration, structural drying, microbial remediation, and fire and smoke restoration for Marietta residents and businesses. Fast, discreet, and certified."
      neighborhoods={[
        'East Cobb',
        'West Cobb',
        'Marietta Square',
        'Kennesaw Mountain area',
        'Historic Marietta',
        'Whitlock',
      ]}
    />
  );
}
