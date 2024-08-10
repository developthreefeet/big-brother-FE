/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/big-brother/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
