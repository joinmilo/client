import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InfoMediaCategoryEntity } from 'src/schema/schema';
import { portalMediaOverviewStateKey } from '../constants/portal-media-overview.constants';
import { PortalMediaOverviewState } from './portal-media-overview.reducer';

export const selectPortalMediaOverviewState = createFeatureSelector<PortalMediaOverviewState>(portalMediaOverviewStateKey);

export const selectOverviewData = createSelector(
  selectPortalMediaOverviewState,
  state => state.overviewData
);

export const selectOverviewDataCategories = createSelector(
  selectOverviewData,
  media => {
    return media?.result?.reduce((result, current) => {
      const existing = result.find(category => category.id === current?.category?.id);

      existing
        ? existing.infoMedia?.push(current)
        : result.push({ ...current?.category, infoMedia: [current] } as InfoMediaCategoryEntity);

      return result;
    }, [] as InfoMediaCategoryEntity[]);
  }
);
