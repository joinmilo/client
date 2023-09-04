import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorAdminOverviewStateKey } from '../constants/author-admin-overview.constants';
import { AuthorAdminOverviewState } from './author-portal-overview.reducer';

export const selectAuthorAdminOverviewState = createFeatureSelector<AuthorAdminOverviewState>(authorAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectAuthorAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectAuthorAdminOverviewState,
  state => state.params
);
