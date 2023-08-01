import { Maybe, MediaEntity } from 'src/schema/schema';
import { MimeTypeDefinition } from '../typings/media';

export const fileToMedia = (file?: Maybe<File>) => {
  return ({
    mimeType: (file as File).type,
    name: (file as File).name,
    size: (file as File).size,
    modified: (file as File).lastModified,
}) as MediaEntity;
}

export const mimeTypeDefinition = (element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> => {
  if (element?.mimeType?.includes('audio')) {
    return 'AUDIO';
  } else if (element?.mimeType?.includes('image')) {
    return 'IMAGE';
  } else if (element?.mimeType?.includes('video')) {
    return 'VIDEO';
  } else if (element?.mimeType?.includes('pdf')) {
    return 'PDF';
  } else if (element?.extension?.includes('doc')) {
    return 'WORD';
  }
  return null;
}