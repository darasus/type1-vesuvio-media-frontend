import * as fs from 'fs';
import * as path from 'path';
import * as appRoot from 'app-root-path';
import { getSite } from '../network/getSite';
const text2png = require('text2png');

const generateImages = async () => {
  const site = await getSite();
  const pathToPublicLogo = path.join(appRoot + '/static/images/logo.png');
  const pathToPublicFavicon = path.join(appRoot + '/static/images/favicon.png');
  const title = site.site.title;
  const color = site.site.color;
  const font = '80px Futura';
  const options = {
    color,
    font,
    localFontPath: path.join(
      appRoot + '/static/fonts/futura/FuturaStdBook.otf'
    ),
    localFontName: 'Futura',
  };

  fs.writeFileSync(pathToPublicLogo, text2png(title, options));
  fs.writeFileSync(pathToPublicFavicon, text2png(title.substr(0, 1), options));
};

generateImages();
