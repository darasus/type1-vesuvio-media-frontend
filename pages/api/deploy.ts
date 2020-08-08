import { logflarePinoVercel } from 'pino-logflare'
import pino from 'pino'

const { deploy } = require('../../network/deploy');

const { stream, send } = logflarePinoVercel({
  apiKey: "DQSylIzBZjKa",
  sourceToken: "af83e80c-6461-48d8-a5c6-a5ecb8a15822"
});

const logger = pino({
  browser: {
      transmit: {
          level: "info",
          send: send,
      }
  },
  level: "debug",
  base: {
      env: process.env.ENV || "ENV not set",
      revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
  },
}, stream);

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  let siteId = null

  logger.info(JSON.stringify(req.body))

  if (req.body?.entry?.site?.id) {
    siteId = req.body?.entry?.site?.id
  }

  if (req.body?.entry?.home_page?.site) {
    siteId = req.body?.entry?.home_page?.site
  } 

  if (siteId) {
    await deploy({ projectName: `site-id-${siteId}`, siteId: siteId });
    logger.info('✅ Deployment initiated...')
    res.end('✅ Deployment initiated...');
  } else {
    logger.info('❌ Error deploying...')
    res.end('❌ Error deploying...');
  }
}
