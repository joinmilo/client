import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminFormStateKey } from '../constants/event-admin-form.constants';
import { EventAdminFormState } from './event-admin-form.reducer';

export const selectEventAdminFormState = createFeatureSelector<EventAdminFormState>(eventAdminFormStateKey);

export const selectEvent = createSelector(
  selectEventAdminFormState,
  state => state.event
);

export const selectCategories = createSelector(
  selectEventAdminFormState,
  state => state.categories
);

export const selectOrganisations = createSelector(
  selectEventAdminFormState,
  state => state.userOrganisations
);