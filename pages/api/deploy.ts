import { NextApiRequest, NextApiResponse } from 'next';

const fetch = require('isomorphic-fetch');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  await fetch(
    'https://api.github.com/repos/vesuvio-media/type1-vesuvio-media-frontend/dispatches',
    {
      headers: {
        Authorization: 'token 4b670d7f97d51927253e0d6d1737e8b8807e5760',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ event_type: 'webhook-one' }),
    }
  );

  res.end('✅ Deployment initiated...');
};
