import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestAdminDetailsCommentsStateKey } from '../constants/contest-admin-details-comments.constants';
import { ContestAdminDetailsCommentsState } from './contest-admin-details-comments.reducer';

export const selectContestAdminDetailsCommentsState = createFeatureSelector<ContestAdminDetailsCommentsState>(contestAdminDetailsCommentsStateKey);

export const selectContestAdminDetailsComments = createSelector(
  selectContestAdminDetailsCommentsState,
  state => state.comments
);

export const selectPeriod = createSelector(
  selectContestAdminDetailsCommentsState,
  state => state.period
);

export const selectSlug = createSelector(
  selectContestAdminDetailsCommentsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectContestAdminDetailsCommentsState,
  state => state.params
);