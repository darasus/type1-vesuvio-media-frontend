interface ImageSet {
  src: string;
  width: number;
  height: number;
}

export interface Image {
  id: number;
  title: string;
  alt: string;
  large: ImageSet;
  medium: ImageSet;
  small: ImageSet;
  thumbnail: ImageSet;
}
