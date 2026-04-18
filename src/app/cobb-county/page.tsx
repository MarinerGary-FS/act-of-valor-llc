import type { Metadata } from 'next';
import LocationPage from '@/components/sections/LocationPage';

export const metadata: Metadata = {
  title: 'Cobb County Trauma Cleanup & Biohazard Remediation | Act of Valor',
  description:
    'Georgia-licensed trauma scene waste management and IICRC-aligned restoration across Cobb County — same-day biohazard, water, fire, and microbial remediation in Marietta, Smyrna, Kennesaw, and nearby communities.',
  alternates: { canonical: 'https://actofvalorllc.com/cobb-county' },
  openGraph: {
    title: 'Cobb County Trauma Cleanup & Biohazard Remediation | Act of Valor',
    description:
      'Same-day trauma, biohazard, and restoration services across Cobb County. Georgia-licensed. IICRC-aligned.',
    url: 'https://actofvalorllc.com/cobb-county',
    type: 'website',
  },
};

export default function CobbCountyPage() {
  return (
    <LocationPage
      locationName="Cobb County"
      localityContext="Georgia"
      intro="Same-day emergency response across Cobb County — trauma scene cleanup, biohazard remediation, water damage restoration, structural drying, microbial remediation, and fire and smoke restoration. Georgia-licensed. IICRC-aligned."
      neighborhoods={[
        'Marietta',
        'Smyrna',
        'Kennesaw',
        'Acworth',
        'Austell',
        'Mableton',
        'Powder Springs',
        'Vinings',
      ]}
    />
  );
}
