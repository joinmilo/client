import { createReducer, on } from '@ngrx/store';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { EventEntity, FilterSortPaginateInput, Maybe, PageableList_EventEntity, ScheduleEntity } from 'src/schema/schema';
import { PortalEventOverviewActions } from './portal-event-overview.actions';

export interface PortalEventOverviewState {
  overviewData?: PageableList_EventEntity,
  params: FilterSortPaginateInput,
  rawFilterParams?: EventFilterQueryParams,
  schedules?: Maybe<ScheduleEntity>[],
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
