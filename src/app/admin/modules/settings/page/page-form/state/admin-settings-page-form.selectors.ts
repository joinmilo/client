import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageStateKey } from '../constants/admin-settings-page-form.constants';
import { AdminSettingsPageFormState } from './admin-settings-page-form.reducer';


export const selectAdminSettingsPageFormState = createFeatureSelector<AdminSettingsPageFormState>(adminSettingsPageStateKey);

export const selectPageForm = createSelector(
  selectAdminSettingsPageFormState,
  state => state.editPage
);