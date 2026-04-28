import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // Legacy section-style URLs → homepage anchors
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      { source: '/services', destination: '/#services', permanent: true },
      { source: '/service', destination: '/#services', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/contact-us', destination: '/#contact', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/about-us', destination: '/#about', permanent: true },
      { source: '/credentials', destination: '/#authority', permanent: true },
      { source: '/certifications', destination: '/#authority', permanent: true },
      { source: '/resources', destination: '/#resources', permanent: true },

      // Service-specific legacy URLs → unified services section
      { source: '/water-damage', destination: '/#services', permanent: true },
      { source: '/water-damage-restoration', destination: '/#services', permanent: true },
      { source: '/structural-drying', destination: '/#services', permanent: true },
      { source: '/mold-remediation', destination: '/#services', permanent: true },
      { source: '/microbial-remediation', destination: '/#services', permanent: true },
      { source: '/fire-damage', destination: '/#services', permanent: true },
      { source: '/fire-damage-restoration', destination: '/#services', permanent: true },
      { source: '/fire-and-smoke-restoration', destination: '/#services', permanent: true },
      { source: '/trauma-cleanup', destination: '/#services', permanent: true },
      { source: '/trauma-biohazard-cleanup', destination: '/#services', permanent: true },
      { source: '/biohazard-cleanup', destination: '/#services', permanent: true },
      { source: '/biohazard', destination: '/#services', permanent: true },
      { source: '/crime-scene-cleanup', destination: '/#services', permanent: true },

      // Location route variants → canonical singular slug
      { source: '/cobb', destination: '/cobb-county', permanent: true },
      { source: '/cobb-county-ga', destination: '/cobb-county', permanent: true },
      { source: '/cobb-county-georgia', destination: '/cobb-county', permanent: true },
      { source: '/marietta-ga', destination: '/marietta', permanent: true },
      { source: '/smyrna-ga', destination: '/smyrna', permanent: true },
      { source: '/kennesaw-ga', destination: '/kennesaw', permanent: true },

      // Atlanta variants → homepage (no dedicated /atlanta route yet)
      { source: '/atlanta', destination: '/', permanent: true },
      { source: '/atlanta-ga', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
