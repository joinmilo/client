import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsLayoutStateKey } from '../constants/event-admin-details-layout.constants';
import { EventAdminDetailsLayoutState } from './event-admin-details-layout.reducer';

export const selectEventAdminDetailsLayoutState = createFeatureSelector<EventAdminDetailsLayoutState>(eventAdminDetailsLayoutStateKey);

export const selectEventAdminDetailsLayout = createSelector(
  selectEventAdminDetailsLayoutState,
  state => state.details
);
