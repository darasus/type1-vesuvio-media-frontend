const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = () => {
  return withBundleAnalyzer({
    env: {
      SITE_ID: process.env.SITE_ID
    }
  });
};
