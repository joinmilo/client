import { createReducer, on } from '@ngrx/store';
import { ContestEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ContestPortalDetailsLandingActions } from './portal-contest-details-landing.actions';

export interface PortalContestDetailsLandingState {
  details?: Maybe<ContestEntity>,
}

export const initialState: PortalContestDetailsLandingState = {
};

export const portalContestDetailsReducer = createReducer(
  initialState,

  on(
    ContestPortalDetailsLandingActions.setDetails,
    (state, action): PortalContestDetailsLandingState => 
      ({ ...state, details: action.contest })
  ),
);