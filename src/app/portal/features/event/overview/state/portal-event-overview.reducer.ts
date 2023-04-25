import { createReducer, on } from '@ngrx/store';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { EventEntity, Maybe, PageableList_EventEntity } from 'src/schema/schema';
import { PortalEventOverviewActions } from './portal-event-overview.actions';

export interface PortalEventOverviewState {
  sponsoredEvent?: Maybe<EventEntity>,
  overviewDisplayType?: DisplayType,
  overviewData?: EventEntity[],
  overviewDataTable?: PageableList_EventEntity,
}

export const initialState: PortalEventOverviewState = {
};

export const portalEventOverviewReducer = createReducer(
  initialState,

  on(PortalEventOverviewActions.setSponsoredEvent, (state, action): PortalEventOverviewState => (
    { ...state, sponsoredEvent: action.event }
  )),

  on(PortalEventOverviewActions.overviewDisplayChanged, (state, action): PortalEventOverviewState => (
    { ...state, overviewDisplayType: action.displayType }
  )),

  on(PortalEventOverviewActions.setOverviewData, (state, action): PortalEventOverviewState => (
    { ...state, overviewData: action.events }
  )),
  
);
