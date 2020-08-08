const { deploy } = require('../../api/deploy');

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  let siteId = null

  console.log(req.body)

  if (req.body?.entry?.site?.id) {
    siteId = req.body?.entry?.site?.id
  }

  if (req.body?.entry?.home_page?.site) {
    siteId = req.body?.entry?.home_page?.site
  } 

  if (siteId) {
    deploy({ projectName: `site-id-${siteId}`, siteId: siteId });
    res.end('✅ Deployment initiated...');
  } else {
    res.end('❌ Error deploying...');
  }
}
