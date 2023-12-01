import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageFormStateKey } from '../constants/admin-settings-page-form.constants';
import { AdminSettingsPageFormState } from './admin-settings-page-form.reducer';


export const selectAdminSettingsPageFormState = createFeatureSelector<AdminSettingsPageFormState>(adminSettingsPageFormStateKey);

export const selectPageForm = createSelector(
  selectAdminSettingsPageFormState,
  state => state.editPage
);