const { deploy } = require('../../api/deploy');

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const siteId = req.body?.entry?.site?.id;
  if (siteId) {
    deploy({ projectName: `site-id-${siteId}`, siteId: siteId });
    res.end('✅ Deployment initiated...');
  } else {
    res.end('❌ Error deploying...');
  }
};
