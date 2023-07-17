import { environment } from 'src/environments/environment';
import { Maybe, MediaEntity } from 'src/schema/schema';

/**
 * Authentication
 */
export const refreshKey = 'refresh';

/**
 * Animations
 */
export const defaultAnimationDuration = 400;

/**
 * API errors
 */
export const accessDeniedError = 'AccessDeniedException'
export const tokenExpiredError = 'TokenExpiredException'

/**
 * Configuration keys
 */
export const faviconConfig = 'favicon';
export const defaultLocaleConfig = 'defaultLocale';
export const hCaptchaSitekeyConfig = 'hCaptchaSitekey';
export const logoConfig = 'logo';
export const logoTextConfig = 'logoText';
export const mapLongitudeConfig = 'mapLongitude';
export const mapLatitudeConfig = 'mapLatitude';
export const maxRating = 'maxRating';
export const portalNameConfig = 'portalName';
export const pwBitStrengthConfig = 'pwBitStrength';

/**
 * Features
 */
export const articlesFeatureKey = 'articles';
export const authorsFeatureKey = 'authors';
export const calendarFeatureKey = 'calendar';
export const contestsFeatureKey = 'contests';
export const dealsFeatureKey = 'deals';
export const eventsFeatureKey = 'events';
export const favoritesFeatureKey = 'favorites';
export const formsFeatureKey = 'forms';
export const guestArticlesFeatureKey = 'guestarticle';
export const mapFeatureKey = 'map';
export const mediaFeatureKey = 'media';
export const organisationsFeatureKey = 'organisations';
export const reportsFeatureKey = 'reports';
export const surveysFeatureKey = 'surveys';

/**
 * Module base urls
 */
export const accountUrl = 'account';
export const userUrl = 'user';

/**
 * Roles
 */
export const adminKey = 'admin';
export const auhorKey = 'author';
export const organizerKey = 'organizer';
export const translatorKey = 'translator';

/**
 * Slug / Query params
 */
export const slug = 'slug';
export const displayQueryParam = 'display';

/**
 * State keys
 */
export const appStateKey = 'appState';

/**
 * URLs
 */
export const baseApi = `${environment.base}api`;
export const graphqlApi = `${baseApi}/graphql`;

export const locationNavigationURL = (latitude: number, longtitude: number): string =>
  `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longtitude}`;
export const locationTileLayerURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

export const mediaBaseApi = `${baseApi}/media`;
export const mediaDownloadBaseApi = `${mediaBaseApi}/download`;
export const mediaExportBaseApi = `${mediaBaseApi}/export`;
export const mediaApi = (media: Maybe<MediaEntity>): string => `${mediaBaseApi}/${media?.id}`
export const mediaDownloadApi = (media?: Maybe<MediaEntity>): string => `${mediaDownloadBaseApi}/${media?.id}`
export const mediaExportApi = `${mediaBaseApi}/export`;

