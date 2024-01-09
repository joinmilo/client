import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_ContestParticipationEntity } from 'src/app/core/api/generated/schema';
import { ContestPortalDetailsParticipationsActions } from './contest-portal-details-participations.actions';

export interface ContestPortalDetailsParticipationsState {
  participations?: Maybe<PageableList_ContestParticipationEntity>,
  params?: FilterSortPaginateInput
}

export const initialState: ContestPortalDetailsParticipationsState = {
};

export const contestPortalDetailsParticipationsReducer = createReducer(
  initialState,

  on(
    ContestPortalDetailsParticipationsActions.setParticipations,
    (state, action): ContestPortalDetailsParticipationsState =>
      ({ ...state, participations: action.participations })
  ),

  on(ContestPortalDetailsParticipationsActions.updateParams, (state, action): ContestPortalDetailsParticipationsState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),
);
