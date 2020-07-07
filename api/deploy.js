const { createDeployment } = require('@vercel/client');
const path = require('path');

const outputFolder = path.resolve(process.cwd());

async function deploy({ projectName, siteId }) {
  let deployment;

  for await (const event of createDeployment(
    {
      token: 'cCemgwCdZlZqfFAzl8C1cRoT',
      path: outputFolder,
      teamId: 'nippel-systems-network',
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
      projectSettings: {
        rootDirectory: null,
        devCommand: null,
        buildCommand: null,
        outputDirectory: null,
        framework: null,
      },
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
}

module.exports = { deploy };
