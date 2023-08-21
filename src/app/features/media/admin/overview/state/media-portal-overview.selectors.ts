import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MediaAdminOverviewState } from './media-portal-overview.reducer';
import { mediaAdminOverviewStateKey } from '../constants/media-admin-overview.constants';

export const selectMediaAdminOverviewState = createFeatureSelector<MediaAdminOverviewState>(mediaAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectMediaAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectMediaAdminOverviewState,
  state => state.params
);
