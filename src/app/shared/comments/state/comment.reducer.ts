import { createReducer, on } from '@ngrx/store';
import { EventCommentEntity, Maybe } from 'src/schema/schema';
import { CommentActions } from './comment.actions';

export interface CommentState {
  savedEventComment?: Maybe<EventCommentEntity>;
}

export const initialState: CommentState = {};

export const commentReducer = createReducer(
  initialState,

  on(CommentActions.eventCommentSaved, (state, action): CommentState => (
    { ...state, savedEventComment: action.entity }
  )),
);
