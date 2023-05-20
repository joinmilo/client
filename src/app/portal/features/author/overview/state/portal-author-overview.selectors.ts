import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorOverviewStateKey } from '../constants/portal-author-overview.constant';
import { PortalAuthorOverviewState } from './portal-author-overview.reducer';


export const selectPortalAuthorOverviewState = createFeatureSelector<PortalAuthorOverviewState>(authorOverviewStateKey);

export const selectAuthors = createSelector (
  selectPortalAuthorOverviewState,
  state => state.showAuthors
)