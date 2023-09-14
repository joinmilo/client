import { createReducer, on } from '@ngrx/store';
import { DealEntity, Maybe } from 'src/app/core/api/generated/schema';
import { DealAdminDetailsLandingActions } from './deal-admin-details-landing.actions';

export interface DealAdminDetailsLandingState {
  details?: Maybe<DealEntity>;
}

export const initialState: DealAdminDetailsLandingState = {
};

export const dealAdminDetailsLandingReducer = createReducer(
  initialState,

  on(
    DealAdminDetailsLandingActions.setDetails,
    (state, action): DealAdminDetailsLandingState => ({
      ...state, details: action.deal
    })),

);
