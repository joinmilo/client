import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalEventDetailsStateKey } from '../constants/event-details.constant';
import { PortalEventDetailsState } from './event-details.reducer';

export const selectPortalEventDetailsState = createFeatureSelector<PortalEventDetailsState>(portalEventDetailsStateKey);

export const selectEventDetails = createSelector(
  selectPortalEventDetailsState,
  state => state.eventDetails
);
