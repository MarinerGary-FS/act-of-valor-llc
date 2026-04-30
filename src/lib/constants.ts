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
  serviceAreas: ['Cobb County', 'Marietta', 'Smyrna', 'Kennesaw', 'Atlanta', 'Sandy Springs', 'Douglasville', 'Buckhead'],
  hours: 'Emergency Cleanup Support',
} as const;

export const SERVICES = [
  {
    id: 'water',
    title: 'Water Damage Restoration',
    icon: '💧',
    problem: 'Water damage spreads fast. Structural damage and microbial growth begin within 24–48 hours if untreated.',
    instruction: 'Turn off water if safe, move valuables to dry areas, and contact us immediately. Time is critical.',
    bullets: [
      'Emergency water extraction and removal',
      'Structural assessment and damage documentation',
      'Complete drying and dehumidification',
      'Restoration and reconstruction as needed',
    ],
    cta: 'Emergency Water Response',
  },
  {
    id: 'structural-drying',
    title: 'Structural Drying',
    icon: '🌡️',
    problem: 'Residual moisture causes hidden rot, warping, and microbial growth. Standard drying is not enough for structural materials.',
    instruction: 'Do not assume the space is dry after water removal. Call us for professional moisture assessment and structural drying.',
    bullets: [
      'Comprehensive moisture mapping and monitoring',
      'Commercial-grade dehumidification equipment',
      'Targeted airflow and drying systems',
      'Prevention of secondary damage (IICRC standards)',
    ],
    cta: 'Schedule Structural Drying',
  },
  {
    id: 'microbial',
    title: 'Microbial Remediation',
    icon: '🔬',
    problem: 'Microbial contamination spreads through air and surfaces, compromising indoor air quality and structural integrity.',
    instruction: 'Isolate the area and avoid disturbing contaminated materials. Contact us immediately for professional assessment.',
    bullets: [
      'Professional mold assessment and containment',
      'Biohazard sanitation and decontamination',
      'Contamination control and air quality restoration',
      'IICRC AMRT-certified remediation protocols',
    ],
    cta: 'Request Microbial Assessment',
  },
  {
    id: 'fire',
    title: 'Fire & Smoke Damage Restoration',
    icon: '🔥',
    problem: 'Fire and smoke damage spreads through air ducts and walls. Soot and odor persist without professional treatment.',
    instruction: 'Evacuate safely. Do not re-enter. Contact your insurance and call us for immediate assessment.',
    bullets: [
      'Soot removal and surface decontamination',
      'Odor elimination and air purification',
      'Structural recovery and stabilization',
      'Complete restoration and reconstruction',
    ],
    cta: 'Fire Restoration Support',
  },
  {
    id: 'trauma',
    title: 'Trauma & Crime Scene Restoration',
    icon: '🛡️',
    problem: 'Trauma and crime scenes require certified handling, proper disposal, and strict regulatory compliance.',
    instruction: 'Leave the area secure. Do not enter or touch. Call us immediately—we handle everything with discretion and care.',
    bullets: [
      'OSHA and DOT-compliant handling and disposal',
      'Specialized disinfection and decontamination',
      'Odor remediation and air purification',
      'Discreet, compassionate, and certified service',
    ],
    cta: 'Compassionate Response Team',
  },
] as const;

export const CREDENTIALS = [
  {
    name: 'IICRC WRT',
    org: 'Institute of Inspection, Cleaning and Restoration Certification',
    image: '/credentials/iicrc-wrt.png',
    alt: 'IICRC Water Restoration Technician certification',
    featured: true,
  },
  {
    name: 'IICRC ASD',
    org: 'Institute of Inspection, Cleaning and Restoration Certification',
    image: '/credentials/iicrc-asd.png',
    alt: 'IICRC Applied Structural Drying certification',
    featured: true,
  },
  {
    name: 'IICRC AMRT',
    org: 'Institute of Inspection, Cleaning and Restoration Certification',
    image: '/credentials/iicrc-amrt.png',
    alt: 'IICRC Applied Mold Remediation Technician certification',
    featured: false,
  },
  {
    name: 'IICRC FSRT',
    org: 'Institute of Inspection, Cleaning and Restoration Certification',
    image: '/credentials/iicrc-fsrt.png',
    alt: 'IICRC Fire and Smoke Restoration Technician certification',
    featured: false,
  },
  {
    name: 'Georgia Real Estate License',
    org: 'Georgia Real Estate Commission',
    image: '/credentials/georgia-real-estate-license.png',
    alt: 'Georgia Real Estate License',
    featured: false,
  },
  {
    name: 'Lead-Safe Renovator',
    org: 'EPA Lead-Safe Certification',
    image: '/credentials/lead-safe-renovator.png',
    alt: 'EPA Lead-Safe Renovator certification',
    featured: false,
  },
  {
    name: 'Rope & Harness Training',
    org: 'Safety & Fall Protection Training',
    image: '/credentials/rope-harness-training.png',
    alt: 'Rope and harness safety training certification',
    featured: false,
  },
] as const;

export const AUTHORITY_BLOCKS = [
  {
    icon: '💧',
    title: 'Restoration (IICRC)',
    licenses: [
      'WRT — Water Remediation Technician',
      'ASD — Applied Structural Drying Technician',
      'FSRT — Fire & Smoke Restoration Technician',
    ],
    footnote: 'IICRC-certified technicians for water, structural drying, and fire damage restoration.',
  },
  {
    icon: '🛡️',
    title: 'Biohazard & Trauma',
    licenses: [
      'Georgia trauma scene / biohazard cleanup readiness',
      'OSHA bloodborne pathogens awareness',
      'Medical waste / regulated waste vendor coordination',
    ],
    footnote: 'Discreet trauma and crime scene cleanup support. Credential documentation available upon request.',
  },
  {
    icon: '🔬',
    title: 'Environmental & Safety',
    licenses: [
      'AMRT — Applied Microbial Remediation Technician',
      'Air Quality Assessment',
      'Contamination Control Protocols',
    ],
    footnote: 'Science-backed microbial remediation and environmental restoration.',
  },
  {
    icon: '📋',
    title: 'Property & Insurance',
    licenses: [
      'Georgia Insurance Adjuster License #2805709',
      'Insurance-Ready Documentation',
      'Lead-Safe Renovator Certified',
    ],
    footnote: 'Work directly with your insurer. We handle all claims documentation end-to-end.',
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
    title: 'When Cleanup Support May Be Needed',
    category: 'Trauma & Biohazard',
    description:
      'After an unattended death, injury, crime scene, or hazardous contamination event, families and property managers may need trained cleanup support after authorities release the scene.',
  },
  {
    title: 'Property Manager Awareness',
    category: 'Buildings & Rentals',
    description:
      'Apartments, rentals, offices, and commercial properties can require documented cleanup, odor control, and vendor coordination before a space is returned to normal use.',
  },
  {
    title: 'Safe Next Steps',
    category: 'Client Safety',
    description:
      'Avoid direct contact with blood, bodily fluids, sewage, sharps, or unknown residues. When in doubt, keep the area secured and ask a qualified cleanup professional what documentation may be needed.',
  },
] as const;
