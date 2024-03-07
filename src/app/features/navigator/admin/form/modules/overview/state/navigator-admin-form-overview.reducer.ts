import { createReducer, on } from '@ngrx/store';
import { Maybe, NavigatorPageEntity } from 'src/app/core/api/generated/schema';
import { NavigatorAdminFormOverviewActions } from './navigator-admin-form-overview.actions';



export interface NavigatorAdminFormOverviewState {
  startPage?: Maybe<NavigatorPageEntity>;
}

export const initialState: NavigatorAdminFormOverviewState = {
};

export const navigatorAdminFormOverviewReducer = createReducer(
  initialState,

  on(
    NavigatorAdminFormOverviewActions.setStartPage,
    (state, action): NavigatorAdminFormOverviewState => ({
      ...state, startPage: action.startPage
    })),
);
