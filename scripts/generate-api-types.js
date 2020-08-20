const fetch = require('isomorphic-fetch');
const { json2ts } = require('json-ts');
const fs = require('fs');
const path = require('path');

const generateApiTypes = async config => {
  const response = await fetch(`${config.env.API_BASE}/sites/2`);
  const data = await response.json();

  fs.writeFileSync(
    `${path.resolve()}/generated/types.ts`,
    json2ts(JSON.stringify(data), {
      prefix: 'Response',
      rootName: 'Site',
    }).replace(/interface/g, 'export interface'),
    err => {
      if (err) return console.log(err);
      console.log(
        'Type generations is complete! (path: `/generated/types.ts`)'
      );
    }
  );

  console.log(`✅ types generated...`);

  return config;
};

module.exports = { generateApiTypes };
