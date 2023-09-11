import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InfoMediaCategoryEntity } from 'src/app/core/api/generated/schema';
import { mediaAdminOverviewStateKey } from '../constants/media-admin-overview.constants';
import { MediaAdminOverviewState } from './media-admin-overview.reducer';

export const selectMediaAdminOverviewState = createFeatureSelector<MediaAdminOverviewState>(mediaAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectMediaAdminOverviewState,
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
