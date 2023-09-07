import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsGoogleSearchStateKey } from '../constants/event-admin-details-google-search.constants';
import { EventAdminDetailsGoogleSearchState } from './event-admin-details-google-search.reducer';

export const selectEventAdminDetailsGoogleSearchState = createFeatureSelector<EventAdminDetailsGoogleSearchState>(eventAdminDetailsGoogleSearchStateKey);

export const selectEventAdminDetailsGoogleSearch = createSelector(
  selectEventAdminDetailsGoogleSearchState,
  state => state.details
);
