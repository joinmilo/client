import { createFeatureSelector, createSelector } from '@ngrx/store';
import { navigatorPortalDetailsLandingStateKey } from '../constants/navigator-details-landing.constant';
import { NavigatorPortalDetailsLandingState } from './navigator-portal-details-landing.reducer';

export const selectNavigatorPortalDetailsLandingState =
  createFeatureSelector<NavigatorPortalDetailsLandingState>(
    navigatorPortalDetailsLandingStateKey
  );

export const selectNavigatorNodeDetails = createSelector(
  selectNavigatorPortalDetailsLandingState,
  (state) => state.details
);


