import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminCategoryFormStateKey } from '../constants/event-admin-category-form.constants';
import { EventCategoryAdminFormState } from './event-admin-category-form.reducer';


export const selectEventAdminFormState = createFeatureSelector<EventCategoryAdminFormState>(eventAdminCategoryFormStateKey);

export const selectEditableEventCategory = createSelector(
  selectEventAdminFormState,
  state => state.editEventCategory
);