import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminCategoryFormStateKey } from '../constants/deal-admin-category-form.constants';
import { DealCategoryAdminFormState } from './deal-admin-category-form.reducer';


export const selectDealAdminFormState = createFeatureSelector<DealCategoryAdminFormState>(dealAdminCategoryFormStateKey);

export const selectEditableDealCategory = createSelector(
  selectDealAdminFormState,
  state => state.editDealCategory
);