import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mediaAdminFormStateKey } from '../constants/media-admin-form.constants';
import { MediaAdminFormState } from './media-admin-form.reducer';

export const selectMediaAdminFormState = createFeatureSelector<MediaAdminFormState>(mediaAdminFormStateKey);

export const selectEditableMedia = createSelector(
  selectMediaAdminFormState,
  state => state.editMedia
);

export const selectMediaCategories = createSelector(
  selectMediaAdminFormState,
  state => state.categories
);