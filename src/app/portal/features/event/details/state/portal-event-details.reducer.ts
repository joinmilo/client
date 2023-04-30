import { createReducer, on } from '@ngrx/store';
import { EventDisplayType } from 'src/app/core/state/display-type';
import { EventEntity, Maybe } from 'src/schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';

export interface PortalEventDetailsState {
  eventDetails?: Maybe<EventEntity>,
  sponsoredEvent?: Maybe<EventEntity>,
  overviewDisplayType?: EventDisplayType,
  overviewData?: EventEntity[],
}

export const initialState: PortalEventDetailsState = {
};

export const portalEventDetailsReducer = createReducer(
  initialState,

  on(PortalEventDetailsActions.setEventDetails, (state, action): PortalEventDetailsState => (
    { ...state, eventDetails: action.event }
  )),

  on(PortalEventDetailsActions.setSponsoredEvent, (state, action): PortalEventDetailsState => (
    { ...state, sponsoredEvent: action.event }
  )),

  on(PortalEventDetailsActions.overviewDisplayChanged, (state, action): PortalEventDetailsState => (
    { ...state, overviewDisplayType: action.displayType }
  )),

  on(PortalEventDetailsActions.setOverviewData, (state, action): PortalEventDetailsState => (
    { ...state, overviewData: action.events }
  )),

);
