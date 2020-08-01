const fetch = require('isomorphic-fetch');
const { json2ts } = require('json-ts');
const fs = require('fs');
const path = require('path');

const generateApiTypes = async () => {
  const response = await fetch('https://type1.vesuviomedia.com/sites/2');
  const data = await response.json();

  fs.writeFile(
    `${path.resolve()}/generated/types.ts`,
    json2ts(JSON.stringify(data), {
      prefix: 'Response',
      rootName: 'Site',
    }).replace(/interface/g, 'export interface'),
    function (err) {
      if (err) return console.log(err);
      console.log(
        'Type generations is complete! (path: `/generated/types.ts`)'
      );
    }
  );
};

generateApiTypes();
