/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Proxy facility settings to the same backend as the iOS app.
  async rewrites() {
    const defaultApi = process.env.NODE_ENV === 'production' ? 'https://api.oculab.ai' : 'http://127.0.0.1:8080';
    const api = (process.env.FOV_TRIAL_API_URL || defaultApi).replace(/\/$/, '');
    return ['/user/login', '/fov-trial'].map(path => ({
      source: '/api/phone' + path,
      destination: api + path,
    }));
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
  trailingSlash: false,
  output: 'standalone',
};

module.exports = nextConfig; 