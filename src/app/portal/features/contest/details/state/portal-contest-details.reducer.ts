import { createReducer, on } from '@ngrx/store';
import { ContestCommentEntity, ContestEntity, Maybe } from 'src/schema/schema';
import { PortalContestDetailsActions } from './portal-contest-details.actions';

export interface PortalContestDetailsState {
  details?: Maybe<ContestEntity>,
  comments?: Maybe<ContestCommentEntity[]>,
}

export const initialState: PortalContestDetailsState = {
};

export const portalContestDetailsReducer = createReducer(
  initialState,

  on(
    PortalContestDetailsActions.setDetails,
    (state, action): PortalContestDetailsState => 
      ({ ...state, details: action.contest })
  ),

  on(
    PortalContestDetailsActions.setComments,
    (state, action): PortalContestDetailsState =>
      ({ ...state, comments: action.comments })
  ),
);