import { createReducer, on } from '@ngrx/store';
import { ContestEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ContestAdminDetailsLandingActions } from './contest-admin-details-landing.actions';

export interface ContestAdminDetailsLandingState {
  details?: Maybe<ContestEntity>;
}

export const initialState: ContestAdminDetailsLandingState = {
};

export const contestAdminDetailsLandingReducer = createReducer(
  initialState,

  on(
    ContestAdminDetailsLandingActions.setDetails,
    (state, action): ContestAdminDetailsLandingState => ({
      ...state, details: action.contest
    })),

);
