import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalMainStateKey } from '../constants/portal-main.constants';
import { PortalMainState } from './portal-main.reducer';

export const selectPortalMainState = createFeatureSelector<PortalMainState>(portalMainStateKey);

export const selectCurrentPage = createSelector(
  selectPortalMainState,
  state => state.page
);

export const selectLandingPage = createSelector(
  selectPortalMainState,
  state => state.landingPage
);