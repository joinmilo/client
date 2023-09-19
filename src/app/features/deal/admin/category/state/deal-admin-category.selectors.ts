import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminCategoryStateKey } from '../constants/deal-admin-category.constants';
import { DealAdminCategoryState } from './deal-admin-category.reducer';

export const selectDealAdminCategoryState = createFeatureSelector<DealAdminCategoryState>(dealAdminCategoryStateKey);

export const selectCategoryData = createSelector(
  selectDealAdminCategoryState,
  state => state.categoryData
);

export const selectParams = createSelector(
  selectDealAdminCategoryState,
  state => state.params
);