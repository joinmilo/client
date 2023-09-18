import { createReducer, on } from '@ngrx/store';

import { Maybe, PageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageDetailsLayoutActions } from './admin-settings-page-details-layout.actions';

export interface AdminSettingsPageDetailsLayoutState {
  details?: Maybe<PageEntity>;
}

export const initialState: AdminSettingsPageDetailsLayoutState = {
};

export const adminSettingsPageDetailsLayoutReducer = createReducer(
  initialState,

  on(
    AdminSettingsPageDetailsLayoutActions.setDetails,
    (state, action): AdminSettingsPageDetailsLayoutState => ({
      ...state, details: action.page
    })),
);
