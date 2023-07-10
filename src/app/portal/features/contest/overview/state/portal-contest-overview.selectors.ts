import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalContestOverviewStateKey } from '../constants/portal-contest-overview.constants';
import { PortalContestOverviewState } from './portal-contest-overview.reducer';

export const selectPortalContestOverviewState = createFeatureSelector<PortalContestOverviewState>(portalContestOverviewStateKey);

export const selectSponsoredContest = createSelector(
  selectPortalContestOverviewState,
  state => state.sponsoredContest
);

export const selectActiveContests = createSelector(
  selectPortalContestOverviewState,
  state => state.activeContests
);

export const selectCompletedContests = createSelector(
  selectPortalContestOverviewState,
  state => state.completedContests
);

export const selectVoteableContests = createSelector(
  selectPortalContestOverviewState,
  state => state.voteableContests
);

export const selectParams = createSelector(
  selectPortalContestOverviewState,
  state => state.params
);