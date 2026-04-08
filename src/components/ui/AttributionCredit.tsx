'use client';

import { useState } from 'react';

const ATTRIBUTION = {
  href: 'https://marinernexus.com',
  label: 'Built by Mariner Nexus',
} as const;

export default function AttributionCredit() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border-t border-white/[0.04] pt-4 pb-2 flex justify-center">
      <a
        href={ATTRIBUTION.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="inline-flex items-center gap-1.5 no-underline transition-all duration-500 ease-out"
        style={{
          opacity: isHovered ? 0.5 : 0.25,
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        {/* Accent dot with glow */}
        <span
          className="inline-block w-[6px] h-[6px] rounded-full transition-all duration-500 ease-out"
          style={{
            backgroundColor: '#6366f1',
            boxShadow: isHovered
              ? '0 0 6px rgba(99, 102, 241, 0.6)'
              : '0 0 0px rgba(99, 102, 241, 0)',
          }}
        />
        <span
          className="font-medium tracking-wide"
          style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)' }}
        >
          {ATTRIBUTION.label}
        </span>
      </a>
    </div>
  );
}
