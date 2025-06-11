import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
};

export default nextConfig;
