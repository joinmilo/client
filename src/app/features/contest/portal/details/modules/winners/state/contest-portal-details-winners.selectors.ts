import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestPortalDetailsWinnersStateKey } from '../constants/contest-portal-details-winners.constants';
import { ContestPortalDetailsWinnersState } from './contest-portal-details-winners.reducer';

export const selectContestPortalDetailsWinnersState =
  createFeatureSelector<ContestPortalDetailsWinnersState>(
    contestPortalDetailsWinnersStateKey
  );

export const selectContestWinners = createSelector(
  selectContestPortalDetailsWinnersState,
  (state) => state.winners
);

