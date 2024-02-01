import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';

export type MimeTypeDefinition = 'AUDIO'
  | 'IMAGE'
  | 'PDF'
  | 'VIDEO'
  | 'WORD';

export type FileAction = 'DOWNLOAD'
  | 'DELETE';

export type MediaCardType = 'VIEW' 
  | 'ACTION';

export type MediaViewerData = {
  media: MediaEntity[],
  currentIndex?: number
};

export type AttributionDirection = 'TOP-LEFT'
  | 'TOP-RIGHT'
  | 'BOTTOM-RIGHT'
  | 'BOTTOM-LEFT';

export type MediaFormMode = 'UPLOAD'
  | 'URL';

export type MediaEditDialogData = {
  displayCardToggle?: boolean,
  displayTitleToggle?: boolean,
  element: MediaEnhancedEntity | MediaEntity,
}

export type MediaEnhancedEntity = {
  id?: Maybe<string>,
  card?: Maybe<boolean>,
  title?: Maybe<boolean>,
  media: MediaEntity,
}