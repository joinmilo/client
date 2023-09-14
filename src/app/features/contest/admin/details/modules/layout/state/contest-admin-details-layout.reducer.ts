import { createReducer, on } from '@ngrx/store';

import { ContestEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ContestAdminDetailsLayoutActions } from './contest-admin-details-layout.actions';

export interface ContestAdminDetailsLayoutState {
  details?: Maybe<ContestEntity>;
}

export const initialState: ContestAdminDetailsLayoutState = {
};

export const contestAdminDetailsLayoutReducer = createReducer(
  initialState,

  on(
    ContestAdminDetailsLayoutActions.setDetails,
    (state, action): ContestAdminDetailsLayoutState => ({
      ...state, details: action.contest
    })),
);
