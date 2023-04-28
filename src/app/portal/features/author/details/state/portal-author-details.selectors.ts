import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorDetailsStateKey } from '../constants/portal-author-details.constant';
import { AuthorDetailsState } from './portal-author-details.reducer';


export const selectPortalAuthorDetailsState = createFeatureSelector<AuthorDetailsState>(authorDetailsStateKey);

export const selectAuthorDetails = createSelector(
  selectPortalAuthorDetailsState,
  state => state.details
);