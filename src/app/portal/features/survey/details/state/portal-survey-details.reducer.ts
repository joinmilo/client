import { createReducer, on } from '@ngrx/store';
import { Maybe, SurveyEntity } from 'src/schema/schema';
import { PortalSurveyDetailsActions } from './portal-survey-details.actions';

export interface PortalSurveyDetailsState {
  details?: Maybe<SurveyEntity>,
}

export const initialState: PortalSurveyDetailsState = {
};

export const portalSurveyDetailsReducer = createReducer(
  initialState,

  on(
    PortalSurveyDetailsActions.setDetails,
    (state, action): PortalSurveyDetailsState => 
      ({ ...state, details: action.survey })
  ),
);