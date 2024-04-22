import { createReducer, on } from '@ngrx/store';
import { EventEntity, EventScheduleEntity, FilterSortPaginateInput, Maybe, PageableList_EventEntity } from 'src/app/core/api/generated/schema';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { PortalEventOverviewActions } from './portal-event-overview.actions';

export interface PortalEventOverviewState {
  overviewData?: PageableList_EventEntity,
  params: FilterSortPaginateInput,
  rawFilterParams?: Maybe<EventFilterQueryParams>,
  schedules?: Maybe<EventScheduleEntity>[],
  sponsoredEvent?: Maybe<EventEntity>,
}

export const initialState: PortalEventOverviewState = {
  params: {}
};

export const portalEventOverviewReducer = createReducer(
  initialState,

  on(PortalEventOverviewActions.setSponsoredEvent, (state, action): PortalEventOverviewState => (
    { ...state, sponsoredEvent: action.event }
  )),
  
  on(PortalEventOverviewActions.updateParams, (state, action): PortalEventOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(PortalEventOverviewActions.updateRawParams, (state, action): PortalEventOverviewState => (
    { ...state, rawFilterParams: action.params }
  )),

  on(PortalEventOverviewActions.setOverviewData, (state, action): PortalEventOverviewState => (
    { ...state, overviewData: action.events }
  )),
);
