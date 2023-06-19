import { environment } from 'src/environments/environment';
import { MediaEntity } from 'src/schema/schema';

export const coreStateKey = 'coreState';

/**
 * Authentication
 */
export const refreshKey = 'refresh';

/**
 * Animations
 */
export const defaultAnimationDuration = 400;

/**
 * Features
 */
export const articlesFeatureKey = 'articles';
export const authorsFeatureKey = 'authors';
export const calendarFeatureKey = 'calendar';
export const contestsFeatureKey = 'contests';
export const dealsFeatureKey = 'deals';
export const eventsFeatureKey = 'events';
export const formsFeatureKey = 'forms';
export const guestArticlesFeatureKey = 'guestarticle';
export const mapFeatureKey = 'map';
export const mediaFeatureKey = 'media';
export const organisationsFeatureKey = 'organisations';
export const reportsFeatureKey = 'reports';
export const surveysFeatureKey = 'surveys';
export const dataProtectionFeatureKey = 'data-protection'

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


/**
 * Slug params
 */
export const slug = 'slug';