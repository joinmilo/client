import { createReducer, on } from '@ngrx/store';
import { ContestTypeEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ContestAdminTypeFormActions } from './contest-admin-type-form.actions';

export interface ContestTypeAdminFormState {
  editContestType?: Maybe<ContestTypeEntity>;
}

export const initialState: ContestTypeAdminFormState = {
};

export const contestAdminFormReducer = createReducer(
  initialState,

  on(ContestAdminTypeFormActions.categoryRetrieved, (state, action): ContestTypeAdminFormState => (
    { ...state, editContestType: action.entity }
  )),

  on(
    ContestAdminTypeFormActions.saved,
    ContestAdminTypeFormActions.cancelled,
    (state): ContestTypeAdminFormState => (
      { ...state, editContestType: undefined }
    )
  ),

);
