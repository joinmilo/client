import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_ContestParticipationEntity } from 'src/app/core/api/generated/schema';
import { ContestPortalDetailsVoteActions } from './contest-portal-details-vote.actions';

export interface ContestPortalDetailsVoteState {
  participations?: Maybe<PageableList_ContestParticipationEntity>,
  params?: FilterSortPaginateInput,
  slug?: Maybe<string>
}

export const initialState: ContestPortalDetailsVoteState = {
  params: {
    size: 12,
    page: 0
  }
};

export const contestPortalDetailsVoteReducer = createReducer(
  initialState,

  on(ContestPortalDetailsVoteActions.setParticipations, (state, action): ContestPortalDetailsVoteState => (
    { ...state, participations: action.participations }
  )),

  on(ContestPortalDetailsVoteActions.updateParams, (state, action): ContestPortalDetailsVoteState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ContestPortalDetailsVoteActions.getParticipations, (state, action): ContestPortalDetailsVoteState => (
    { ...state, slug: action.slug,}
  )),
);
