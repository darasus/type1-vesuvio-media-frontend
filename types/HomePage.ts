import { Image } from './Image';

export interface HomePage {
  id: number;
  introductionText: string;
  title: string;
  mainText: string;
  createdAt: string;
  updatedAt: string;
  image: Image;
}
