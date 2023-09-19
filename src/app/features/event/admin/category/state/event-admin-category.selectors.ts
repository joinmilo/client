import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminCategoryStateKey } from '../constants/event-admin-category.constants';
import { EventAdminCategoryState } from './event-admin-category.reducer';

export const selectEventAdminCategoryState = createFeatureSelector<EventAdminCategoryState>(eventAdminCategoryStateKey);

export const selectCategoryData = createSelector(
  selectEventAdminCategoryState,
  state => state.categoryData
);

export const selectParams = createSelector(
  selectEventAdminCategoryState,
  state => state.params
);