import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminTargetGroupFormStateKey } from '../constants/event-admin-target-group-form.constants';
import { EventTargetGroupAdminFormState } from './event-admin-target-group-form.reducer';


export const selectEventAdminFormState = createFeatureSelector<EventTargetGroupAdminFormState>(eventAdminTargetGroupFormStateKey);

export const selectEditableEventTargetGroup = createSelector(
  selectEventAdminFormState,
  state => state.editEventTargetGroup
);