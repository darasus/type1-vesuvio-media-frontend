import { Image } from './Image';

export interface Product {
  id: number;
  slug: string;
  title: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  site: number;
  shortDescription: string;
  image?: Image;
}
