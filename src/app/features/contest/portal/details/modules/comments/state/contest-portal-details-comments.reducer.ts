import { createReducer, on } from '@ngrx/store';

import { ContestCommentEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ContestPortalDetailsCommentsActions } from './contest-portal-details-comments.actions';

export interface ContestPortalDetailsCommentsState {
  comments?: Maybe<ContestCommentEntity[]>,
}

export const initialState: ContestPortalDetailsCommentsState = {
};

export const contestPortalDetailsCommentsReducer = createReducer(
  initialState,

  on(ContestPortalDetailsCommentsActions.setComments,
    (state, action): ContestPortalDetailsCommentsState =>
      ({ ...state, comments: action.comments })),

);
