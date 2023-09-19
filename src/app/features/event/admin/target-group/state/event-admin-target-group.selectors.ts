import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminTargetGroupStateKey } from '../constants/event-admin-target-group.constants';
import { EventAdminTargetGroupState } from './event-admin-target-group.reducer';

export const selectEventAdminTargetGroupState = createFeatureSelector<EventAdminTargetGroupState>(eventAdminTargetGroupStateKey);

export const selectTargetGroupData = createSelector(
  selectEventAdminTargetGroupState,
  state => state.targetGroupData
);

export const selectParams = createSelector(
  selectEventAdminTargetGroupState,
  state => state.params
);