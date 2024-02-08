import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestPortalDetailsCommentsStateKey } from '../constants/contest-portal-details-comments.constants';
import { ContestPortalDetailsCommentsState } from './contest-portal-details-comments.reducer';

export const selectContestAdminDetailsCommentsState = createFeatureSelector<ContestPortalDetailsCommentsState>(contestPortalDetailsCommentsStateKey);

export const selectContestComments = createSelector(
  selectContestAdminDetailsCommentsState,
  state => state.comments
);
