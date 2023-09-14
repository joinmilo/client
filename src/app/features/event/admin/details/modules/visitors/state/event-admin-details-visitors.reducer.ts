import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { EventAdminDetailsVisitorsActions } from './event-admin-details-visitors.actions';

export interface EventAdminDetailsVisitorsState {
  visitorAnalytics?: Maybe<AnalyticsDto>;
}

export const initialState: EventAdminDetailsVisitorsState = {
};

export const eventAdminDetailsVisitorsReducer = createReducer(
  initialState,

  on(EventAdminDetailsVisitorsActions.setDetails,
    (state, action): EventAdminDetailsVisitorsState => ({
      ...state, visitorAnalytics: action.event?.visitorAnalytics
    })),
);



