import { createReducer, on } from '@ngrx/store';

import { Maybe, SurveyEntity } from 'src/app/core/api/generated/schema';
import { SurveyAdminDetailsLayoutActions } from './survey-admin-details-layout.actions';

export interface SurveyAdminDetailsLayoutState {
  details?: Maybe<SurveyEntity>;
}

export const initialState: SurveyAdminDetailsLayoutState = {
};

export const surveyAdminDetailsLayoutReducer = createReducer(
  initialState,

  on(
    SurveyAdminDetailsLayoutActions.setDetails,
    (state, action): SurveyAdminDetailsLayoutState => ({
      ...state, details: action.survey
    })),
);
