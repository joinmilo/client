import { createReducer } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';

export interface SurveyAdminFormState {
  params: FilterSortPaginateInput
}

export const initialState: SurveyAdminFormState = {
  params: {}
};

export const surveyAdminFormReducer = createReducer(
  initialState,


);
