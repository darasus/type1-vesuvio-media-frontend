const { deploy } = require('../../api/deploy');
import Cors from 'cors';

const cors = Cors({
  methods: ['POST'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

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

export default handler;
