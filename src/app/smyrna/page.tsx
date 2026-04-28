import type { Metadata } from 'next';
import LocationPage from '@/components/sections/LocationPage';

export const metadata: Metadata = {
  title: 'Smyrna Trauma Cleanup & Biohazard Remediation | Act of Valor',
  description:
    'Trauma scene cleanup, biohazard remediation, water damage restoration, and fire and smoke restoration in Smyrna, Georgia. Same-day response. Georgia-licensed. IICRC-aligned.',
  alternates: { canonical: 'https://actofvalorllc.com/smyrna' },
  openGraph: {
    title: 'Smyrna Trauma Cleanup & Biohazard Remediation | Act of Valor',
    description:
      'Same-day trauma, biohazard, and restoration services in Smyrna, GA. Georgia-licensed. IICRC-aligned.',
    url: 'https://actofvalorllc.com/smyrna',
    type: 'website',
  },
};

export default function SmyrnaPage() {
  return (
    <LocationPage
      locationName="Smyrna"
      localityContext="Cobb County, Georgia"
      canonicalUrl="https://actofvalorllc.com/smyrna"
      intro="Same-day trauma and biohazard restoration, water damage response, structural drying, microbial remediation, and fire and smoke recovery for Smyrna residents and businesses. Discreet, certified, and insurance-ready."
      neighborhoods={[
        'Market Village',
        'Vinings',
        'Smyrna Hills',
        'Jonquil',
        'Oakdale',
        'Highlands',
      ]}
    />
  );
}
