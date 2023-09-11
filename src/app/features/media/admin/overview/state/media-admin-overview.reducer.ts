import { createReducer, on } from '@ngrx/store';
import { PageableList_InfoMediaEntity } from 'src/app/core/api/generated/schema';
import { MediaAdminOverviewActions } from './media-admin-overview.actions';

export interface MediaAdminOverviewState {
  overviewData?: PageableList_InfoMediaEntity,
}

export const initialState: MediaAdminOverviewState = { };

export const mediaAdminOverviewReducer = createReducer(
  initialState,

  on(MediaAdminOverviewActions.setOverviewMedia, (state, action): MediaAdminOverviewState => (
    { ...state, overviewData: action.media }
  )),
);
