const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { generateApiTypes } = require('./scripts/generate-api-types');
const { generateSitemap } = require('./scripts/generate-sitemap');
const { generateImages } = require('./scripts/generate-images');

const nextConfig = {
  trailingSlash: false,
  env: {
    API_BASE: 'https://type1.vesuviomedia.com',
    CDN_URL: 'vesuvio-media.b-cdn.net',
  },
};

module.exports = withPlugins(
  [withBundleAnalyzer, generateApiTypes, generateSitemap, generateImages],
  nextConfig
);
