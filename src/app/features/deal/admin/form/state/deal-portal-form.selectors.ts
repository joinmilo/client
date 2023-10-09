import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminFormStateKey } from '../constants/deal-admin-form.constants';
import { DealAdminFormState } from './deal-portal-form.reducer';

export const selectDealAdminFormState = createFeatureSelector<DealAdminFormState>(dealAdminFormStateKey);

export const selectDeal = createSelector(
  selectDealAdminFormState,
  state => state.event
);

export const selectCategories = createSelector(
  selectDealAdminFormState,
  state => state.categories
);