const { createDeployment } = require('@vercel/client');
const path = require('path');

const deploy = async ({ projectName, siteId, gaTrackingId }) => {
  let deployment;

  for await (const event of createDeployment(
    {
      token: 'qy5l9zSArirn6f1214G3xADi',
      path: path.resolve(process.cwd()),
      teamId: 'vesuvio-media',
      force: true,
    },
    {
      name: projectName,
      env: {
        SITE_ID: siteId.toString(),
        GA_TRACKING_ID: gaTrackingId,
      },
      build: {
        env: {
          SITE_ID: siteId.toString(),
          GA_TRACKING_ID: gaTrackingId,
        },
      },
      target: 'production',
    }
  )) {
    if (event.type === 'error') {
      console.log(event);
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

module.exports = { deploy };
