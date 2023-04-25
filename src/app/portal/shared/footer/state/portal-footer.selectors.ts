import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalFooterStateKey } from '../constants/portal-footer.constants';
import { PortalFooterState } from './portal-footer.reducer';

export const selectPortalFooterState = createFeatureSelector<PortalFooterState>(portalFooterStateKey);

export const selectApps = createSelector(
  selectPortalFooterState,
  state => state.apps
);

export const selectSocialMedia = createSelector(
  selectPortalFooterState,
  state => state.socialMedia
);