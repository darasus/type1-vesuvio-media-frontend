const { deploy } = require('../../deploy');

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const siteId = req.body?.entry?.site?.id;
  if (req.body?.entry?.site?.id) {
    deploy({ projectName: `site-id-${siteId}`, siteId: siteId });
    res.end('✅ Deployment initiated...');
  } else {
    res.end('❌ Error deploying...');
  }
};
