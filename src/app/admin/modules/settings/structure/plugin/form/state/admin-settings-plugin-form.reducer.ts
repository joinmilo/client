import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'ngx-cinlib/core';
import { PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginFormActions } from './admin-settings-plugin-form.actions';

export interface AdminSettingsPluginFormState {
  plugin?: Maybe<PluginEntity>,
}

export const initialState: AdminSettingsPluginFormState = {
};

export const adminSettingsPluginFormReducer = createReducer(
  initialState,

  on(AdminSettingsPluginFormActions.setPlugin, (state, action): AdminSettingsPluginFormState => ({
    ...state, plugin: action.plugin
  })),

  on(
    AdminSettingsPluginFormActions.saved,
    AdminSettingsPluginFormActions.cancelled,
    (state): AdminSettingsPluginFormState => (
      { ...state, plugin: undefined }
    )
  ),
);
