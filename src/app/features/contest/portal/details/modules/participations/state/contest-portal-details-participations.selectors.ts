import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestPortalDetailsParticipationsStateKey } from '../constants/contest-portal-details-participations.constants';
import { ContestPortalDetailsParticipationsState } from './contest-portal-details-participations.reducer';

export const selectContestPortalDetailsParticipationsState =
  createFeatureSelector<ContestPortalDetailsParticipationsState>(
    contestPortalDetailsParticipationsStateKey
  );

export const selectContestParticipations = createSelector(
  selectContestPortalDetailsParticipationsState,
  (state) => state.participations?.result
);

export const selectParticipationsTotal = createSelector(
  selectContestPortalDetailsParticipationsState,
  (state) => state.participations?.total
);

export const selectParams = createSelector(
  selectContestPortalDetailsParticipationsState,
  (state) => state.params
);
