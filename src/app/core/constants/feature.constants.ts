import { Maybe } from '../api/generated/schema';
import { ContentEntity } from '../typings/content-entity';

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
export const navigatorFeatureKey = 'navigator';
export const organisationsFeatureKey = 'organisations';
export const reportsFeatureKey = 'reports';
export const surveysFeatureKey = 'surveys';

export const entityToFeature: Map<Maybe<ContentEntity> | undefined, string> = new Map([
  ['ArticleEntity', articlesFeatureKey],
  ['ContestEntity', contestsFeatureKey],
  ['DealEntity', dealsFeatureKey],
  ['EventEntity', eventsFeatureKey],
  ['OrganisationEntity', organisationsFeatureKey],
  ['SurveyEntity', surveysFeatureKey],
  ['UserContextEntity', authorsFeatureKey],
]);