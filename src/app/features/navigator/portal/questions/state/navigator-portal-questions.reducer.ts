import { createReducer, on } from '@ngrx/store';

import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { Maybe, NavigatorPageEntity } from 'src/app/core/api/generated/schema';
import { NavigatorPortalQuestionsActions } from './navigator-portal-questions.actions';

export interface NavigatorPortalQuestionsState {
  currentPage?: Maybe<NavigatorPageEntity>;
  inputs: RadioCardInput[];
  currentIndex: number;
}

export const initialState: NavigatorPortalQuestionsState = {
  inputs: [
    {
      display: '1',
      label: 'Start',
      value: ''
    }
  ],
  currentIndex: 0
};

export const navigatorAdminQuestionsReducer = createReducer(
  initialState,

  on(
    NavigatorPortalQuestionsActions.setStartPage,
    (state, action): NavigatorPortalQuestionsState => ({
      ...state, currentPage: action.startPage
    })),

  on(
     NavigatorPortalQuestionsActions.setPage,
     (state, action): NavigatorPortalQuestionsState => ({
       ...state, currentPage: action.page
     })),

  on(
   NavigatorPortalQuestionsActions.setNavigatorState,
     (state, action): NavigatorPortalQuestionsState => ({
      ...state, inputs: action.inputs
     })),

  on(
    NavigatorPortalQuestionsActions.setNavigatorState,
     (state, action): NavigatorPortalQuestionsState => ({
       ...state, currentIndex: action.currentIndex
    })),      
);
