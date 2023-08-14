import { createReducer, on } from '@ngrx/store';
import { PageableList_InfoMediaEntity } from 'src/schema/schema';
import { PortalMediaOverviewActions } from './portal-media-overview.actions';

export interface PortalMediaOverviewState {
  overviewData?: PageableList_InfoMediaEntity,
}

export const initialState: PortalMediaOverviewState = { };

export const portalMediaOverviewReducer = createReducer(
  initialState,

  on(PortalMediaOverviewActions.setOverviewMedia, (state, action): PortalMediaOverviewState => (
    { ...state, overviewData: action.media }
  )),
);
