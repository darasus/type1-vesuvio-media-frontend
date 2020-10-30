const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
const text2png = require('text2png');

const generateImages = async config => {
  const response = await fetch(
    `${config.env.API_BASE}/sites/${process.env.SITE_ID}`
  );
  const site = await response.json();
  const pathToPublicLogo = path.join(appRoot + '/public/images/logo.png');
  const pathToPublicFavicon = path.join(appRoot + '/public/images/favicon.png');
  const title = site.title;
  const color = site.primary_color;
  const font = '40px Futura';
  const options = {
    color,
    font,
    localFontPath: path.join(
      appRoot + '/public/fonts/futura/FuturaStdLight.otf'
    ),
    localFontName: 'Futura',
  };

  fs.writeFileSync(pathToPublicLogo, text2png(title, options));
  fs.writeFileSync(pathToPublicFavicon, text2png(title.substr(0, 1), options));

  console.log(`✅ images generated...`);
};

module.exports = { generateImages };
