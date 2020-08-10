import fetch from 'isomorphic-fetch';
import { json2ts } from 'json-ts';
import fs from 'fs';
import path from 'path';
import { API_BASE } from '../constants';
import http from 'http';

const generateImages = async () => {
  var file = fs.createWriteStream(`${path.resolve()}/generated/logo.png`);
  await http.get('http://localhost:3000/api/image?title=hiiii', function (
    response
  ) {
    response.pipe(file);
  });
};

generateImages();
