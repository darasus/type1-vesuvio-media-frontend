import fetch from  'isomorphic-fetch'
import { json2ts } from  'json-ts'
import fs from  'fs'
import path from  'path'
import { API_BASE } from  '../constants'

const generateApiTypes = async () => {
  const response = await fetch(`${API_BASE}/sites/2`);
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
