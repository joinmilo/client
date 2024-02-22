import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminFormStateKey } from '../constants/navigation-admin-form.constants';
import { DealAdminFormState } from './navigation-portal-form.reducer';

export const selectDealAdminFormState = createFeatureSelector<DealAdminFormState>(dealAdminFormStateKey);

export const selectDeal = createSelector(
  selectDealAdminFormState,
  state => state.event
);

export const selectCategories = createSelector(
  selectDealAdminFormState,
  state => state.categories
);