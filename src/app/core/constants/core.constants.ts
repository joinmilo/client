import { environment } from 'src/environments/environment';
import { MediaEntity } from 'src/schema/schema';

export const coreStateKey = 'coreState';
export const refreshKey = 'refresh';

/**
 * Animations
 */
export const defaultAnimationDuration = 400;

/**
 * Features
 */
export const articlesFeatureKey = 'articles';
export const authorFeatureKey = 'authors';
export const calendarFeatureKey = 'calendar';
export const eventsFeatureKey = 'events';
export const guestArticlesFeatureKey = 'guestarticle';
export const reportFeatureKey = 'reports';

/**
 * URLs
 */
export const baseApi = `${environment.base}api`;
export const graphqlApi = `${baseApi}/graphql`;
export const mediaBaseApi = `${baseApi}/media`;
export const mediaDownloadApi = `${mediaBaseApi}/download`;
export const mediaExportApi = `${mediaBaseApi}/export`;
export const mediaApi = (media: MediaEntity): string => `${mediaBaseApi}/${media?.id}`

/**
 * Configuration keys
 */
export const faviconConfig = 'favicon';
export const defaultLocaleConfig = 'defaultLocale';
export const hCaptchaSitekeyConfig = 'hCaptchaSitekey';
export const logoConfig = 'logo';
export const logoTextConfig = 'logoText';
export const mapcenterLatitudeConfig = 'mapcenterLatitude';
export const mapcenterLongitudeConfig = 'mapcenterLongitude';
export const mapProjectionConfig = 'mapProjection';
export const mapCluster = 'mapCluster';
export const mapLongitudeConfig = 'mapLongitude';
export const mapLatitudeConfig = 'mapLatitude';
export const mapZoomfactor = 'mapZoomfactor';
export const portalNameConfig = 'portalName';
export const pwBitStrengthConfig = 'pwBitStrength';

/**
 * API errors
 */
export const accessDeniedError = 'AccessDeniedException'
export const tokenExpiredError = 'TokenExpiredException'