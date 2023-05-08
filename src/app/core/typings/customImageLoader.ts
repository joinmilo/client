import { MediaEntity } from 'src/schema/schema';

export declare interface CustomImageLoader{
  loaderParams?: {
    media: MediaEntity,
    src: string
  };
}