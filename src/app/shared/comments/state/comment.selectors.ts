import { createFeatureSelector, createSelector } from '@ngrx/store';
import { commentStateKey } from '../comment.constant';
import { CommentState } from './comment.reducer';

export const selectCommentState = createFeatureSelector<CommentState>(commentStateKey);

export const selectReportTypes = createSelector(
  selectCommentState,
  state => state.savedEventComment
);
