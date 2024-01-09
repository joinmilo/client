import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContestAdminDetailsParticipationStateKey } from '../constants/contest-admin-details-comments.constants';
import { ContestAdminDetailsParticipationState } from './contest-admin-details-participation.reducer';


export const selectContestAdminDetailsParticipationState = createFeatureSelector<ContestAdminDetailsParticipationState>(ContestAdminDetailsParticipationStateKey);

export const selectContestAdminDetailsParticipation = createSelector(
  selectContestAdminDetailsParticipationState,
  state => state.participations
);

export const selectSlug = createSelector(
  selectContestAdminDetailsParticipationState,
  state => state.slug
);

export const selectParams = createSelector(
  selectContestAdminDetailsParticipationState,
  state => state.params
);