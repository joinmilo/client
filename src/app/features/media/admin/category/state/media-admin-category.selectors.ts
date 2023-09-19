import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mediaAdminCategoryStateKey } from '../constants/media-admin-category.constants';
import { MediaAdminCategoryState } from './media-admin-category.reducer';

export const selectMediaAdminCategoryState = createFeatureSelector<MediaAdminCategoryState>(mediaAdminCategoryStateKey);

export const selectCategoryData = createSelector(
  selectMediaAdminCategoryState,
  state => state.categoryData
);

export const selectParams = createSelector(
  selectMediaAdminCategoryState,
  state => state.params
);