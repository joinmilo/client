import { createFeatureSelector, createSelector } from '@ngrx/store';
import { commonFeatureKey } from '../constants/common.constants';
import { CommonState } from './common.reducer';

export const selectCommonState = createFeatureSelector<CommonState>(commonFeatureKey);

export const selectApps = createSelector(
  selectCommonState,
  state => state.apps
);

export const selectMenu = createSelector(
  selectCommonState,
  state => state.menu
);

export const selectSocialMedia = createSelector(
  selectCommonState,
  state => state.socialMedia
);

export const selectSearchResult = createSelector(
  selectCommonState,
  state => state.searchResult
);