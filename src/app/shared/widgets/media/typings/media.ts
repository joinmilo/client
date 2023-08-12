import { MediaEntity } from 'src/schema/schema';

export type MimeTypeDefinition = 'AUDIO'
  | 'IMAGE'
  | 'PDF'
  | 'VIDEO'
  | 'WORD';

  export enum MimeTypes {
    IMAGES = 'image',
    VIDEOS = 'video',
    AUDIO = 'audio',
    Files = 'file'};

export type FileAction = 'DOWNLOAD'
  | 'DELETE';

export type MediaViewerData = {
  media: MediaEntity[],
  currentIndex?: number
};

export type AttributionDirection = 'TOP-LEFT'
  | 'TOP-RIGHT'
  | 'BOTTOM-RIGHT'
  | 'BOTTOM-LEFT';

export type MediaSliderTitleType = 'SUBTITLE'
  | 'DETAILS'
  | 'PAGE';
