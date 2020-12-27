import qs from 'qs';

const sizeMap = {
  small: 500,
  medium: 1000,
  large: 1200,
};

/**
 * replaces all image google cdn url base occurences with bunny cdn one
 */
export const replaceAllImageURLs = (
  string: string,
  options?: {
    size?: 'small' | 'medium' | 'large' | number;
    quality?: 'low' | 'medium' | 'high';
  }
) => {
  const urlBaseRegExp = /storage.googleapis.com/gi;
  const imageTypeRegExp = /(https?:\/\/.*\.(?:png|jpg))/gi;

  const queryString = qs.stringify({
    auto_optimize: options?.quality || 'low',
    width:
      typeof options?.size === 'number'
        ? options?.size
        : sizeMap[options?.size || 'medium'],
  });

  return string
    .replace(urlBaseRegExp, process.env.CDN_URL)
    .replace(imageTypeRegExp, `$1?${queryString}`);
};
