import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalMenuStateKey } from '../constants/menu.constants';
import { PortalMenuState } from './portal-menu.reducer';

export const selectPortalMenuState = createFeatureSelector<PortalMenuState>(portalMenuStateKey);

export const selectPortalMenu = createSelector(
  selectPortalMenuState,
  state => state.menu
);