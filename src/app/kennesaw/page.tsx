import type { Metadata } from 'next';
import LocationPage from '@/components/sections/LocationPage';

export const metadata: Metadata = {
  title: 'Kennesaw Trauma Cleanup & Biohazard Remediation | Act of Valor',
  description:
    'Trauma scene cleanup, biohazard remediation, water damage restoration, and fire and smoke restoration in Kennesaw, Georgia. Same-day response. Georgia-licensed. IICRC-aligned.',
  alternates: { canonical: 'https://actofvalorllc.com/kennesaw' },
  openGraph: {
    title: 'Kennesaw Trauma Cleanup & Biohazard Remediation | Act of Valor',
    description:
      'Same-day trauma, biohazard, and restoration services in Kennesaw, GA. Georgia-licensed. IICRC-aligned.',
    url: 'https://actofvalorllc.com/kennesaw',
    type: 'website',
  },
};

export default function KennesawPage() {
  return (
    <LocationPage
      locationName="Kennesaw"
      localityContext="Cobb County, Georgia"
      intro="Trauma and crime scene restoration, biohazard remediation, water damage response, structural drying, microbial remediation, and fire and smoke restoration for Kennesaw residents and businesses. Fast, discreet, and fully certified."
      neighborhoods={[
        'Downtown Kennesaw',
        'Kennesaw Mountain',
        'Legacy Park',
        'Barrett Lakes',
        'Ben Robertson',
        'Old Town',
      ]}
    />
  );
}
