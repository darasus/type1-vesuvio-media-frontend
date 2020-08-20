const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { generateApiTypes } = require('./scripts/generate-api-types');
const { generateSitemap } = require('./scripts/generate-sitemap');
const { generateImages } = require('./scripts/generate-images');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  trailingSlash: true,
  assetPrefix: isProd ? 'https://vesuvio-media.b-cdn.net' : '',
  env: {
    API_BASE: 'https://type1.vesuviomedia.com',
  },
};

module.exports = withPlugins(
  [withBundleAnalyzer, generateApiTypes, generateSitemap, generateImages],
  nextConfig
);
