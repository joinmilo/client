import { MediaEntity } from 'src/app/core/api/generated/schema';

export type MimeTypeDefinition = 'AUDIO'
  | 'IMAGE'
  | 'PDF'
  | 'VIDEO'
  | 'WORD';

export type FileAction = 'DOWNLOAD'
  | 'DELETE';

export type SiteAction = 'BACK'
  | 'CREATE';

export type MediaViewerData = {
  media: MediaEntity[],
  currentIndex?: number
};

export type AttributionDirection = 'TOP-LEFT'
  | 'TOP-RIGHT'
  | 'BOTTOM-RIGHT'
  | 'BOTTOM-LEFT';

