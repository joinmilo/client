import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorDetailsStateKey } from '../constants/portal-author-details.constants';
import { PortalAuthorDetailsState } from './portal-author-details.reducer';

export const selectPortalAuthorDetailsState = createFeatureSelector<PortalAuthorDetailsState>(authorDetailsStateKey);

export const selectAuthorDetails = createSelector(
  selectPortalAuthorDetailsState,
  state => state.details
);