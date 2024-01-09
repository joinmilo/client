import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_ContestParticipationEntity } from 'src/app/core/api/generated/schema';
import { ContestAdminDetailsParticipationActions } from './contest-admin-details-participation.actions';



export interface ContestAdminDetailsParticipationState {
  participations?: PageableList_ContestParticipationEntity,
  slug?: Maybe<string>;
  params: FilterSortPaginateInput
}

export const initialState: ContestAdminDetailsParticipationState = {
  params: {}
};

export const ContestAdminDetailsParticipationReducer = createReducer(
  initialState,

  on(ContestAdminDetailsParticipationActions.updateParams, (state, action): ContestAdminDetailsParticipationState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ContestAdminDetailsParticipationActions.setParticipations, (state, action): ContestAdminDetailsParticipationState => (
    { ...state, participations: action.participations }
  )),

  on(ContestAdminDetailsParticipationActions.updateParams, (state, action): ContestAdminDetailsParticipationState => (
    { ...state, slug: action.slug }
  )),
);
