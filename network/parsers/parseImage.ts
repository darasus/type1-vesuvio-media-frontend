import { ResponseFeatured_image } from '../../generated/types';
import { replaceAllImageURLs } from '../../utils/replaceAllImageURLs';

export const parseImage = (imageResponse: ResponseFeatured_image) => {
  return {
    id: imageResponse.id,
    title: imageResponse.name,
    alt: imageResponse.alternativeText,
    src: replaceAllImageURLs(imageResponse.url),
    width: imageResponse.width,
    height: imageResponse.height,
  };
};
