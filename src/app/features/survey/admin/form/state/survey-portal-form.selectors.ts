import { createFeatureSelector } from '@ngrx/store';
import { surveyAdminFormStateKey } from '../constants/event-admin-form.constants';
import { SurveyAdminFormState } from './survey-portal-form.reducer';


export const selectSurveyAdminFormState = createFeatureSelector<SurveyAdminFormState>(surveyAdminFormStateKey);

