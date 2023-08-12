import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_InfoMediaEntity } from 'src/schema/schema';
import { PortalMediaOverviewActions } from './portal-media-overview.actions';

export interface PortalMediaOverviewState {
  overviewData?: PageableList_InfoMediaEntity,
  params: FilterSortPaginateInput,
}

export const initialState: PortalMediaOverviewState = {
  params: {}
};
export const portalMediaOverviewReducer = createReducer(
  initialState,

  on(PortalMediaOverviewActions.updateParams, (state, action): PortalMediaOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(PortalMediaOverviewActions.setOverviewMedia, (state, action): PortalMediaOverviewState => (
    { ...state, overviewData: action.media }
  )),
);
