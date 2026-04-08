export const SITE = {
  name: 'Act of Valor',
  tagline: 'Emergency Restoration',
  phone: '(470) 881-9911',
  phoneHref: 'tel:+14708819911',
  email: 'info@actofvalorllc.com',
  url: 'https://actofvalorllc.com',
  address: { city: 'Atlanta', state: 'GA', country: 'US' },
  social: {
    instagram: 'https://www.instagram.com/ceoglm/',
    tiktok: 'https://www.tiktok.com/@ceoglm',
  },
  serviceAreas: ['Atlanta', 'Sandy Springs', 'Marietta', 'Douglasville', 'Buckhead'],
  hours: '24/7 Emergency Response',
} as const;

export const SERVICES = [
  {
    id: 'mold',
    title: 'Mold Remediation',
    icon: '🍄',
    problem: 'Mold grows rapidly in moisture. It spreads through air and surfaces, affecting air quality and health.',
    instruction: 'Stop the water source, isolate the area, and call us immediately. Do not try to clean large mold areas yourself.',
    bullets: [
      'Same-day assessment and containment',
      'Professional mold testing and documentation',
      'Complete remediation with IICRC-certified technicians',
      'Restoration and return to normal',
    ],
    cta: 'Get Mold Help Now',
  },
  {
    id: 'water',
    title: 'Water Damage Restoration',
    icon: '💧',
    problem: 'Water damage spreads fast. Structural damage and mold begin within 24–48 hours if untreated.',
    instruction: 'Turn off water if safe, move valuables to dry areas, and contact us immediately. Time is critical.',
    bullets: [
      'Emergency water extraction and drying',
      'Structural assessment and salvage',
      'Complete drying and dehumidification',
      'Restoration and reconstruction as needed',
    ],
    cta: 'Emergency Water Response',
  },
  {
    id: 'trauma',
    title: 'Trauma & Biohazard Cleanup',
    icon: '🛡️',
    problem: 'Biohazard cleanup requires certification, training, and proper disposal. Do not attempt to clean.',
    instruction: 'Leave the area secure. Do not enter or touch. Call us immediately—we handle everything legally and compassionately.',
    bullets: [
      'OSHA and DOT-compliant cleanup and disposal',
      'Specialized disinfection and decontamination',
      'Odor remediation and air purification',
      'Compassionate, respectful service and support resources',
    ],
    cta: 'Compassionate Response Team',
  },
  {
    id: 'fire',
    title: 'Fire & Smoke Restoration',
    icon: '🔥',
    problem: 'Fire and smoke damage spreads through air ducts and walls. Soot and smell persist without professional treatment.',
    instruction: 'Evacuate safely. Do not re-enter. Contact your insurance and call us for immediate assessment.',
    bullets: [
      'Emergency debris removal and salvage',
      'Professional smoke and soot removal',
      'Deep cleaning and odor remediation',
      'Complete restoration and reconstruction',
    ],
    cta: 'Fire Restoration Support',
  },
] as const;

export const CREDENTIALS = [
  {
    name: 'IICRC WRT',
    org: 'Institute of Inspection, Cleaning and Restoration Certification',
    image: '/credentials/iicrc-wrt.jpg',
    alt: 'IICRC Water Restoration Technician certification',
    featured: true,
  },
  {
    name: 'IICRC ASD',
    org: 'Institute of Inspection, Cleaning and Restoration Certification',
    image: '/credentials/iicrc-asd.jpg',
    alt: 'IICRC Applied Structural Drying certification',
    featured: true,
  },
  {
    name: 'IICRC CMC',
    org: 'Institute of Inspection, Cleaning and Restoration Certification',
    image: '/credentials/iicrc-cmc.jpg',
    alt: 'IICRC Carpet and Textile Care certification',
    featured: false,
  },
  {
    name: 'IICRC AMRT',
    org: 'Institute of Inspection, Cleaning and Restoration Certification',
    image: '/credentials/iicrc-amrt.jpg',
    alt: 'IICRC Applied Mold Remediation Technician certification',
    featured: false,
  },
  {
    name: 'TSWM License',
    org: 'Texas State Water Mitigation',
    image: '/credentials/tswm-license.jpg',
    alt: 'Texas State Water Mitigation Technician License',
    featured: false,
  },
  {
    name: 'OSHA Certification',
    org: 'Occupational Safety and Health Administration',
    image: '/credentials/osha-cert.jpg',
    alt: 'OSHA Safety and Health training certification',
    featured: false,
  },
  {
    name: 'DOT Compliance',
    org: 'Department of Transportation',
    image: '/credentials/dot-compliance.jpg',
    alt: 'DOT hazardous materials transportation compliance',
    featured: false,
  },
  {
    name: 'BBB Accreditation',
    org: 'Better Business Bureau',
    image: '/credentials/bbb-accredit.jpg',
    alt: 'Better Business Bureau accreditation',
    featured: false,
  },
  {
    name: 'Local Business License',
    org: 'Georgia Secretary of State',
    image: '/credentials/ga-license.jpg',
    alt: 'Georgia business registration and license',
    featured: false,
  },
] as const;

export const AUTHORITY_BLOCKS = [
  {
    icon: '🛡️',
    title: 'Biohazard & Trauma',
    licenses: ['OSHA Certified', 'DOT Compliant', 'Crime Scene Trained'],
    footnote: 'Compassionate, professional cleanup with proper disposal.',
  },
  {
    icon: '💧',
    title: 'Restoration (IICRC)',
    licenses: ['WRT - Water Restoration', 'ASD - Structural Drying', 'CMC - Carpet Care'],
    footnote: 'Industry standard certifications for water, mold, and fire damage.',
  },
  {
    icon: '📋',
    title: 'Property & Insurance',
    licenses: ['BBB Accredited', 'Insurance-Ready Documentation', 'Local Business License'],
    footnote: 'Work directly with your insurer. We handle all claims processes.',
  },
  {
    icon: '🔬',
    title: 'Environmental & Safety',
    licenses: ['Mold Testing & Lab Certified', 'Air Quality Assessment', 'Contamination Protocols'],
    footnote: 'Science-backed testing and remediation standards.',
  },
] as const;

export const RESOURCES = {
  'Weather & Storm Tracking': [
    {
      label: 'National Weather Service Atlanta',
      url: 'https://www.weather.gov/ffc/',
    },
    {
      label: 'Georgia Emergency Management & Homeland Security Agency',
      url: 'https://gema.ga.gov/',
    },
    {
      label: 'Storm Track & Alerts (Weather Underground)',
      url: 'https://www.wunderground.com/forecast/us/ga/atlanta',
    },
  ],
  'Atlanta / Georgia Public Safety': [
    {
      label: 'Atlanta Police Department Non-Emergency',
      url: 'https://www.atlantapd.org/',
    },
    {
      label: 'Georgia State Patrol',
      url: 'https://www.gsp.ga.gov/',
    },
    {
      label: 'Metro Atlanta Crime Stoppers',
      url: 'https://crimestoppers.org/',
    },
  ],
  'Emergency Preparedness': [
    {
      label: 'Ready.gov - Federal Emergency Preparedness',
      url: 'https://www.ready.gov/',
    },
    {
      label: 'Georgia Emergency Preparedness Guide',
      url: 'https://gema.ga.gov/emergency-preparedness',
    },
    {
      label: 'American Red Cross Disaster Assistance',
      url: 'https://www.redcross.org/get-help/disaster-relief-and-recovery.html',
    },
  ],
  'Insurance & Claims Guidance': [
    {
      label: 'Georgia Insurance Commissioner',
      url: 'https://oci.ga.gov/',
    },
    {
      label: 'National Association of Insurance Commissioners',
      url: 'https://www.naic.org/',
    },
    {
      label: 'Insurance Claim Process Guide',
      url: 'https://www.insurance.ga.gov/consumer-services',
    },
  ],
  'Restoration Education': [
    {
      label: 'IICRC (Institute of Inspection, Cleaning and Restoration Certification)',
      url: 'https://www.iicrc.org/',
    },
    {
      label: 'Mold Awareness (EPA)',
      url: 'https://www.epa.gov/mold',
    },
    {
      label: 'Water Damage & Restoration 101',
      url: 'https://www.ready.gov/articles/water-damage-and-recovery',
    },
  ],
} as const;

export const SAFETY_UPDATES = [
  {
    title: 'Severe Thunderstorm Warning for Metro Atlanta',
    date: '2026-04-08',
    source: 'National Weather Service',
    description:
      'Heavy rainfall and strong winds expected this evening. Secure loose objects and prepare for potential flooding in low-lying areas.',
    url: 'https://www.weather.gov/ffc/',
  },
  {
    title: 'Atlanta Water Main Break Affects Sandy Springs',
    date: '2026-04-07',
    source: 'Atlanta Department of Watershed Management',
    description:
      'Water main break reported on Roswell Road. Residents advised to boil water and report water intrusion in basements.',
    url: 'https://www.atlantawatershed.org/',
  },
  {
    title: 'Buckhead Area Flooding Advisory',
    date: '2026-04-06',
    source: 'Atlanta Emergency Management',
    description:
      'Local flooding observed near shopping centers. Avoid driving through flooded roads. Emergency services available 24/7.',
    url: 'https://gema.ga.gov/',
  },
] as const;
