import { createReducer, on } from '@ngrx/store';
import { Maybe, PageWidgetTypeEntity, PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageEmbeddingActions } from './admin-settings-page-embedding.actions';

export interface AdminSettingsPageEmbeddingState {
  plugins?: Maybe<PluginEntity[]>;
  widgetTypes?: Maybe<PageWidgetTypeEntity[]>;
}

export const initialState: AdminSettingsPageEmbeddingState = {};

export const adminSettingsPageEmbeddingReducer = createReducer(
  initialState,

  on(AdminSettingsPageEmbeddingActions.pluginsRetrieved, (state, action): AdminSettingsPageEmbeddingState => ({
    ...state, plugins: action.plugins
  })),

  on(AdminSettingsPageEmbeddingActions.widgetTypesRetrieved, (state, action): AdminSettingsPageEmbeddingState => ({
    ...state, widgetTypes: action.widgetTypes
  })),

);
