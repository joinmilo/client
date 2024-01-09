import { createReducer, on } from '@ngrx/store';
import { ContestEntity, ContestTypeEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { ContestAdminFormActions } from './contest-admin-form.actions';

export interface ContestAdminFormState {
  contest?: Maybe<ContestEntity>,
  types?: Maybe<ContestTypeEntity[]>,
}

export const initialState: ContestAdminFormState = {
};

export const contestAdminFormReducer = createReducer(
  initialState,
  
  on(ContestAdminFormActions.contestRetrieved, (state, action): ContestAdminFormState => (
    { ...state, contest: action.contest }
  )),

  on(ContestAdminFormActions.setTypes, (state, action): ContestAdminFormState => (
    { ...state, types: action.types }
  )),

);
