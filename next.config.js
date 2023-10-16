const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**@type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  trailingSlash: true,

  images: {
    loader: 'custom',
    domains: ['res.cloudinary.com', 's3-eu-west-1.amazonaws.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2280, 2460, 2640, 2820, 3000],
  },

  async redirects() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
