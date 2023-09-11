import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_InfoMediaEntity } from 'src/app/core/api/generated/schema';
import { MediaAdminOverviewActions } from './media-admin-overview.actions';

export interface MediaAdminOverviewState {
  overviewData?: PageableList_InfoMediaEntity,
  params: FilterSortPaginateInput
}

export const initialState: MediaAdminOverviewState = {
  params: {}
 };

export const mediaAdminOverviewReducer = createReducer(
  initialState,

  on(MediaAdminOverviewActions.setOverviewData, (state, action): MediaAdminOverviewState => (
    { ...state, overviewData: action.media }
  )),

  on(MediaAdminOverviewActions.updateParams, (state, action): MediaAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),
);
