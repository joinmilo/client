import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mediaAdminCategoryFormStateKey } from '../constants/media-admin-category-form.constants';
import { MediaCategoryAdminFormState } from './media-admin-category-form.reducer';


export const selectMediaAdminFormState = createFeatureSelector<MediaCategoryAdminFormState>(mediaAdminCategoryFormStateKey);

export const selectEditableMediaCategory = createSelector(
  selectMediaAdminFormState,
  state => state.editMediaCategory
);