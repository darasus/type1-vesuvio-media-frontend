import { NextApiRequest, NextApiResponse } from 'next';
const text2png = require('text2png');

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req?.query?.title);
  console.log(req?.query?.type);
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(text2png(req?.query?.title, { color: 'blue' }));
};
