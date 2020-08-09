const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {},
  trailingSlash: true,
  async rewrites() {
    return [
      { source: '/article/:path*', destination: '/:path*' }
    ]
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
