import { createReducer, on } from '@ngrx/store';
import { Maybe, NavigatorNodeEntity } from 'src/app/core/api/generated/schema';
import { NavigatorPortalDetailsLandingActions } from './navigator-portal-details-landing.actions';

export interface NavigatorPortalDetailsLandingState {
  details?: Maybe<NavigatorNodeEntity>,
}

export const initialState: NavigatorPortalDetailsLandingState = {
};

export const navigatorPortalDetailsReducer = createReducer(
  initialState,

  on(
    NavigatorPortalDetailsLandingActions.setDetails,
    (state, action): NavigatorPortalDetailsLandingState => 
      ({ ...state, details: action.details })
  ),
);