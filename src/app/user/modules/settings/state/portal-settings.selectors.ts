import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalSettingsStateKey } from '../constants/portal-settings.constants';
import { PortalSettingsState } from './portal-settings.reducer';


export const selectPortalSettingsState = createFeatureSelector<PortalSettingsState>(portalSettingsStateKey);

export const selectSavedUser = createSelector(
  selectPortalSettingsState,
  state => state.savedUser
);