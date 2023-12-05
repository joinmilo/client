import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageEmbeddingStateKey } from '../constants/admin-settings-page-emedding.constants';
import { AdminSettingsPageEmbeddingState } from './admin-settings-page-embedding.reducer';

export const selectAdminSettingsPageEmbeddingState = createFeatureSelector<AdminSettingsPageEmbeddingState>(adminSettingsPageEmbeddingStateKey);

export const selectPlugins = createSelector(
  selectAdminSettingsPageEmbeddingState,
  state => state.plugins
);

export const selectEmbeddingTypes = createSelector(
  selectAdminSettingsPageEmbeddingState,
  state => state.embeddingTypes
);