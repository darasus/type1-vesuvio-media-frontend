import { NextApiRequest, NextApiResponse } from 'next';

const fetch = require('isomorphic-fetch');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  let siteId = null;

  if (req.body?.entry?.site?.id) {
    siteId = req.body?.entry?.site?.id;
  }

  if (req.body?.entry?.home_page?.site) {
    siteId = req.body?.entry?.home_page?.site;
  }

  await fetch(
    'https://api.github.com/repos/vesuvio-media/type1-vesuvio-media-frontend/dispatches',
    {
      headers: {
        Authorization: 'token 4b670d7f97d51927253e0d6d1737e8b8807e5760',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        event_type: 'webhook-one',
        client_payload: { siteId },
      }),
    }
  );

  res.end('✅ Deployment initiated...');
};
