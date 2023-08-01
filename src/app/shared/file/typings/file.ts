import { MediaEntity } from 'src/schema/schema';

export type MimeTypeDefinition = 'AUDIO'
  | 'IMAGE'
  | 'PDF'
  | 'VIDEO'
  | 'WORD';

export type FileAction = 'DOWNLOAD'
  | 'DELETE';

export type FileViewerData = {
  media: MediaEntity[],
  currentIndex?: number
};