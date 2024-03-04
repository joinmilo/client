import { createFeatureSelector, createSelector } from '@ngrx/store';
import { navigatorPortalDetailsLayoutStateKey } from '../constants/navigator-portal-details-layout.constants';
import { NavigatorPortalDetailsLayoutState } from './navigator-portal-details-layout.reducer';

export const selectNavigatorPortalDetailsLayoutState = createFeatureSelector<NavigatorPortalDetailsLayoutState>(navigatorPortalDetailsLayoutStateKey);

export const selectCurrentPage = createSelector(
  selectNavigatorPortalDetailsLayoutState,
  state => state.currentPage
);

export const selectNavigatorStateInputs = createSelector(
  selectNavigatorPortalDetailsLayoutState,
  state => state.inputs
);

export const selectNavigatorStateIndex = createSelector(
  selectNavigatorPortalDetailsLayoutState,
  state => state.currentIndex
);