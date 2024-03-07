import { createFeatureSelector, createSelector } from '@ngrx/store';
import { navigatorAdminFormOverviewStateKey } from '../constants/navigator-admin-form-overview.constants';
import { NavigatorAdminFormOverviewState } from './navigator-admin-form-overview.reducer';


export const selectNavigatorAdminFormOverviewState = createFeatureSelector<NavigatorAdminFormOverviewState>(navigatorAdminFormOverviewStateKey);

export const selectStartPage = createSelector(
  selectNavigatorAdminFormOverviewState,
  state => state.startPage
);
