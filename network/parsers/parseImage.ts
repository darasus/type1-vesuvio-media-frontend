import { ResponseFeatured_image } from '../../generated/types';

export const parseImage = (imageResponse: ResponseFeatured_image) => {
  return {
    id: imageResponse.id,
    title: imageResponse.name,
    alt: imageResponse.alternativeText,
    ...(imageResponse.formats.large && {
      large: {
        src: imageResponse.formats.large.url,
        width: imageResponse.formats.large.width,
        height: imageResponse.formats.large.height,
      },
    }),
    ...(imageResponse.formats.medium && {
      medium: {
        src: imageResponse.formats.medium.url,
        width: imageResponse.formats.medium.width,
        height: imageResponse.formats.medium.height,
      },
    }),
    ...(imageResponse.formats.small && {
      small: {
        src: imageResponse.formats.small.url,
        width: imageResponse.formats.small.width,
        height: imageResponse.formats.small.height,
      },
    }),
    ...(imageResponse.formats.thumbnail && {
      thumbnail: {
        src: imageResponse.formats.thumbnail.url,
        width: imageResponse.formats.thumbnail.width,
        height: imageResponse.formats.thumbnail.height,
      },
    }),
  };
};
