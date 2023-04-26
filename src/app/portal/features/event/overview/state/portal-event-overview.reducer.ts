import { createReducer, on } from '@ngrx/store';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { EventEntity, FilterSortPaginateInput, Maybe, PageableList_EventEntity } from 'src/schema/schema';
import { PortalEventOverviewActions } from './portal-event-overview.actions';

export interface PortalEventOverviewState {
  displayType?: DisplayType,
  overviewData?: EventEntity[],
  sponsoredEvent?: Maybe<EventEntity>,
  params?: FilterSortPaginateInput,
  tableData?: PageableList_EventEntity,
  tableParams?: FilterSortPaginateInput,
}

export const initialState: PortalEventOverviewState = { };

export const portalEventOverviewReducer = createReducer(
  initialState,

  on(PortalEventOverviewActions.setSponsoredEvent, (state, action): PortalEventOverviewState => (
    { ...state, sponsoredEvent: action.event }
  )),

  on(PortalEventOverviewActions.displayChanged, (state, action): PortalEventOverviewState => (
    { ...state, displayType: action.displayType }
  )),

  on(PortalEventOverviewActions.setOverviewData, (state, action): PortalEventOverviewState => (
    { ...state, overviewData: action.events }
  )),

  on(PortalEventOverviewActions.setTableData, (state, action): PortalEventOverviewState => (
    { ...state, tableData: action.result }
  )),

  on(
    PortalEventOverviewActions.setParams,
    (state, action): PortalEventOverviewState => (
      { ...state, params: action.params }
    )
  ),

  on(
    PortalEventOverviewActions.setParams,
    PortalEventOverviewActions.setTableParams,
    (state, action): PortalEventOverviewState => (
      { ...state, tableParams: action.params }
    )
  ),
);
