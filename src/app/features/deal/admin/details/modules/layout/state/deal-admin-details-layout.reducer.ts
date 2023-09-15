import { createReducer, on } from '@ngrx/store';

import { DealEntity, Maybe } from 'src/app/core/api/generated/schema';
import { DealAdminDetailsLayoutActions } from './deal-admin-details-layout.actions';

export interface DealAdminDetailsLayoutState {
  details?: Maybe<DealEntity>;
}

export const initialState: DealAdminDetailsLayoutState = {
};

export const dealAdminDetailsLayoutReducer = createReducer(
  initialState,

  on(
    DealAdminDetailsLayoutActions.setDetails,
    (state, action): DealAdminDetailsLayoutState => ({
      ...state, details: action.deal
    })),
);
