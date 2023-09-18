import { createReducer, on } from '@ngrx/store';
import { Maybe, PageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageDetailsLandingActions } from './admin-settings-page-details-landing.actions';

export interface AdminSettingsPageDetailsLandingState {
  details?: Maybe<PageEntity>;
}

export const initialState: AdminSettingsPageDetailsLandingState = {
};

export const adminSettingsPageDetailsLandingReducer = createReducer(
  initialState,

  on(
    AdminSettingsPageDetailsLandingActions.setDetails,
    (state, action): AdminSettingsPageDetailsLandingState => ({
      ...state, details: action.page
    })),
);
