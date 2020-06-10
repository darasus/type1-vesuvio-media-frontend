export interface Product {
  id: number;
  slug: string;
  title: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  site: number;
  shortDescription: string;
  image: {
    id: number;
    title: string;
    large: {
      src: string;
      width: number;
      height: number;
    };
    medium: {
      src: string;
      width: number;
      height: number;
    };
    small: {
      src: string;
      width: number;
      height: number;
    };
    thumbnail: {
      src: string;
      width: number;
      height: number;
    };
  };
}
