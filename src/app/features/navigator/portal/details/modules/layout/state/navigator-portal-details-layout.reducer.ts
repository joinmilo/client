import { createReducer, on } from '@ngrx/store';

import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { Maybe, NavigatorPageEntity } from 'src/app/core/api/generated/schema';
import { NavigatorPortalDetailsLayoutActions } from './navigator-portal-details-layout.actions';

export interface NavigatorPortalDetailsLayoutState {
  currentPage?: Maybe<NavigatorPageEntity>;
  inputs: RadioCardInput[];
  currentIndex: number;
}

export const initialState: NavigatorPortalDetailsLayoutState = {
  inputs: [
    {
      display: '1',
      label: 'Start',
      value: ''
    }
  ],
  currentIndex: 0
};

export const navigatorAdminDetailsLayoutReducer = createReducer(
  initialState,

  on(
    NavigatorPortalDetailsLayoutActions.setStartPage,
    (state, action): NavigatorPortalDetailsLayoutState => ({
      ...state, currentPage: action.startPage
    })),

  on(
     NavigatorPortalDetailsLayoutActions.setPage,
     (state, action): NavigatorPortalDetailsLayoutState => ({
       ...state, currentPage: action.page
     })),

  on(
   NavigatorPortalDetailsLayoutActions.setNavigatorState,
     (state, action): NavigatorPortalDetailsLayoutState => ({
      ...state, inputs: action.inputs
     })),

  on(
    NavigatorPortalDetailsLayoutActions.setNavigatorState,
     (state, action): NavigatorPortalDetailsLayoutState => ({
       ...state, currentIndex: action.currentIndex
    })),      
);
