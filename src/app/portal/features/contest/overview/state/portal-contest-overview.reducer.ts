import { createReducer, on } from '@ngrx/store';
import { ContestEntity, FilterSortPaginateInput, Maybe } from 'src/schema/schema';
import { PortalContestOverviewActions } from './portal-contest-overview.actions';

export interface PortalContestOverviewState {
  params: FilterSortPaginateInput,
  sponsoredContest?: Maybe<ContestEntity>,
  activeContests?: Maybe<ContestEntity[]>,
  completedContests?: Maybe<ContestEntity[]>,
  voteableContests?: Maybe<ContestEntity[]>,
}

export const initialState: PortalContestOverviewState = {
  params: {}
};

export const portalContestOverviewReducer = createReducer(
  initialState,

  on(PortalContestOverviewActions.setSponsoredContest, (state, action): PortalContestOverviewState => (
    { ...state, sponsoredContest: action.contest }
  )),

  on(PortalContestOverviewActions.setActiveContests, (state, action): PortalContestOverviewState => (
    { ...state, activeContests: action.contests }
  )),

  on(PortalContestOverviewActions.setCompletedContests, (state, action): PortalContestOverviewState => (
    { ...state, completedContests: action.contests }
  )),  

  on(PortalContestOverviewActions.setVoteableContests, (state, action): PortalContestOverviewState => (
    { ...state, voteableContests: action.contests }
  )),

  on(PortalContestOverviewActions.updateParams, (state, action): PortalContestOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),
);
