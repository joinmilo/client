import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestAdminDetailsSearchStateKey } from '../constants/contest-admin-details-search.constants';
import { ContestAdminDetailsSearchState } from './contest-admin-details-search.reducer';

export const selectContestAdminDetailsSearchState = createFeatureSelector<ContestAdminDetailsSearchState>(contestAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectContestAdminDetailsSearchState,
  state => state.slug
);

export const selectParams = createSelector(
  selectContestAdminDetailsSearchState,
  state => state.params
);

export const selectSearchStatistics = createSelector(
  selectContestAdminDetailsSearchState,
  state => state.statistics
);