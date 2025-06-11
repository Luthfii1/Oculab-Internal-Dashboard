import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
  // Ensure proper handling of trailing slashes
  trailingSlash: false,
  // Configure output for Vercel
  output: 'standalone',
  // Add experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
