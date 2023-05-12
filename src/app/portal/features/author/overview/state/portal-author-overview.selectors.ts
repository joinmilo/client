import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorStateKey } from '../../details/constants/portal-author-details.constant';
import { PortalAuthorOverviewState } from './portal-author-overview.reducer';


export const selectPortalAuthorOverviewState = createFeatureSelector<PortalAuthorOverviewState>(authorStateKey);

export const selectAuthors = createSelector (
  selectPortalAuthorOverviewState,
  state => state.showAuthors
)