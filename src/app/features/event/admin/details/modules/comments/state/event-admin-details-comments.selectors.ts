import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsCommentsStateKey } from '../constants/event-admin-details-comments.constants';
import { EventAdminDetailsCommentsState } from './event-admin-details-comments.reducer';

export const selectEventAdminDetailsCommentsState = createFeatureSelector<EventAdminDetailsCommentsState>(eventAdminDetailsCommentsStateKey);

export const selectEventAdminDetailsComments = createSelector(
  selectEventAdminDetailsCommentsState,
  state => state.comments
);

export const selectPeriod = createSelector(
  selectEventAdminDetailsCommentsState,
  state => state.period
);

export const selectSlug = createSelector(
  selectEventAdminDetailsCommentsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectEventAdminDetailsCommentsState,
  state => state.params
);