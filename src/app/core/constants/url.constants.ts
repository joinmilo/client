import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { environment } from 'src/environments/environment';
import { ContentData, ContentEntity } from '../typings/content-entity';
import { entityToFeature } from './feature.constants';
import { portalUrl } from './module.constants';

export const baseApi = `${environment.base}api`;
export const graphqlApi = `${baseApi}/graphql`;

export const contentPortalDetailsUrl = (entity?: Maybe<ContentEntity>, data?: Maybe<ContentData>) =>
  `${environment.client}${portalUrl}/${entityToFeature.get(entity)}/${data?.slug}`;

export const locationNavigationURL = (latitude: number, longtitude: number): string =>
  `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longtitude}`;
export const locationTileLayerURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

export const mediaBaseApi = `${baseApi}/media`;
export const mediaDownloadBaseApi = `${mediaBaseApi}/download`;
export const mediaExportBaseApi = `${mediaBaseApi}/export`;
export const mediaDownloadApi = (media?: Maybe<MediaEntity>): string => `${mediaDownloadBaseApi}/${media?.id}`
export const mediaExportApi = `${mediaBaseApi}/export`;
export const mediaMimeTypeApi = `${mediaBaseApi}/mimetype`