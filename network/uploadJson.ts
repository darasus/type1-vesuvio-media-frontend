import * as path from 'path';
import * as appRoot from 'app-root-path';
import * as Cloud from '@google-cloud/storage';
import { NextApiRequest, NextApiResponse } from 'next';
import { format } from 'date-fns';

const serviceKey = path.join(appRoot + '/utbeast-d89bf88eb535.json');
const CloudStorage = Cloud.Storage;
const bucketName = 'revision_history';
const gcs = new CloudStorage({
  projectId: 'utbeast',
  keyFilename: serviceKey,
});
const bucket = gcs.bucket(bucketName);

const uploadJson = (json: string, fileName: string) => {
  const file = bucket.file(fileName);
  return file
    .save(json)
    .then(() => {
      console.log('JSON successfully uploaded...');
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  let siteId;

  if (req.body?.entry?.site?.id) {
    siteId = req.body?.entry?.site?.id;
  }

  if (req.body?.entry?.home_page?.site) {
    siteId = req.body?.entry?.home_page?.site;
  }

  await uploadJson(
    JSON.stringify(req.body),
    `site-id-${siteId}-${format(new Date(), 'MM-dd-yyyy-HH-mm-ss')}.json`
  );

  res.end('✅ JSON uploaded...');
};
