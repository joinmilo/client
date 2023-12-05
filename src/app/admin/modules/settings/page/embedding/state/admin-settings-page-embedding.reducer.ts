import { createReducer, on } from '@ngrx/store';
import { Maybe, PageEmbeddingTypeEntity, PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageEmbeddingActions } from './admin-settings-page-embedding.actions';

export interface AdminSettingsPageEmbeddingState {
  plugins?: Maybe<PluginEntity[]>;
  embeddingTypes?: Maybe<PageEmbeddingTypeEntity[]>;
}

export const initialState: AdminSettingsPageEmbeddingState = {};

export const adminSettingsPageEmbeddingReducer = createReducer(
  initialState,

  on(AdminSettingsPageEmbeddingActions.pluginsRetrieved, (state, action): AdminSettingsPageEmbeddingState => ({
    ...state, plugins: action.plugins
  })),

  on(AdminSettingsPageEmbeddingActions.embeddingTypesRetrieved, (state, action): AdminSettingsPageEmbeddingState => ({
    ...state, embeddingTypes: action.embeddingTypes
  })),

);
