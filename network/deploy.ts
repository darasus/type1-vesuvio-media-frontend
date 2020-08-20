import { createDeployment } from '@vercel/client';

const path = require('path');

const outputFolder = path.resolve(process.cwd());

export const deploy = async ({
  projectName,
  siteId,
}: {
  projectName: string;
  siteId: number;
}) => {
  let deployment;

  for await (const event of createDeployment(
    {
      token: 'qy5l9zSArirn6f1214G3xADi',
      path: outputFolder,
      teamId: 'vesuvio-media',
    },
    {
      name: projectName,
      env: {
        SITE_ID: siteId.toString(),
      },
      build: {
        env: {
          SITE_ID: siteId.toString(),
        },
      },
      target: 'production',
    }
  )) {
    if (event.type === 'error') {
      console.error(event);
    }
    if (event.type === 'building') {
      console.log(`🛠 Building ${projectName}...`);
    }
    if (event.type === 'ready') {
      deployment = event.payload;
      console.log('✅ Done!');
      break;
    }
  }

  return deployment;
};
