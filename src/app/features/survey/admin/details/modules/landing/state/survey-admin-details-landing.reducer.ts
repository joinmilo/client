import { createReducer, on } from '@ngrx/store';
import { Maybe, SurveyEntity } from 'src/app/core/api/generated/schema';
import { SurveyAdminDetailsLandingActions } from './survey-admin-details-landing.actions';

export interface SurveyAdminDetailsLandingState {
  details?: Maybe<SurveyEntity>;
}

export const initialState: SurveyAdminDetailsLandingState = {
};

export const eventAdminDetailsLandingReducer = createReducer(
  initialState,

  on(
    SurveyAdminDetailsLandingActions.setDetails,
    (state, action): SurveyAdminDetailsLandingState => ({
      ...state, details: action.event
    })),

);
