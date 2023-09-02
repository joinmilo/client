import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userSettingsStateKey } from '../constants/portal-settings.constants';
import { UserSettingsState } from './user-settings.reducer';


export const selectUserSettingsState = createFeatureSelector<UserSettingsState>(userSettingsStateKey);

export const deletionTypes = createSelector(
  selectUserSettingsState,
  state => state.deletionTypes
);

export const selectUserDeletionDescription = createSelector(
  selectUserSettingsState,
  state => state.userDeletionDescription
);

export const selectUserDeletionTypes = createSelector(
  selectUserSettingsState,
  state => state.selectedUserDeletionTypes
);

export const selectSuburbs = createSelector(
  selectUserSettingsState,
  state => state.suburbs
);