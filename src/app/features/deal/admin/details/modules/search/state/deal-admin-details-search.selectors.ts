import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminDetailsSearchStateKey } from '../constants/deal-admin-details-search.constants';
import { DealAdminDetailsSearchState } from './deal-admin-details-search.reducer';

export const selectDealAdminDetailsSearchState = createFeatureSelector<DealAdminDetailsSearchState>(dealAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectDealAdminDetailsSearchState,
  state => state.slug
);

export const selectParams = createSelector(
  selectDealAdminDetailsSearchState,
  state => state.params
);

export const selectSearchStatistics = createSelector(
  selectDealAdminDetailsSearchState,
  state => state.statistics
);