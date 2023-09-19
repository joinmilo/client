import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_EventTargetGroupEntity } from 'src/app/core/api/generated/schema';
import { EventAdminTargetGroupActions } from './event-admin-target-group.actions';

export interface EventAdminTargetGroupState {
  targetGroupData?: PageableList_EventTargetGroupEntity,
  params: FilterSortPaginateInput,
}

export const initialState: EventAdminTargetGroupState = {
  params: {}
};

export const eventAdminTargetGroupReducer = createReducer(
  initialState,
  
  on(EventAdminTargetGroupActions.updateParams, (state, action): EventAdminTargetGroupState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(EventAdminTargetGroupActions.setTargetGroupData, (state, action): EventAdminTargetGroupState => (
    { ...state, targetGroupData: action.categories }
  )),
);
