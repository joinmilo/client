import { createFeatureSelector, createSelector } from '@ngrx/store';
import { commonStateKey } from '../constants/common.constants';
import { CommonState } from './common.reducer';

export const selectCommonState = createFeatureSelector<CommonState>(commonStateKey);

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