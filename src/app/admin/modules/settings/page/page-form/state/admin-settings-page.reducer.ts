import { createReducer, on } from '@ngrx/store';

import { Maybe, PageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageActions } from './admin-settings-page.actions';

export interface AdminSettingsPageState {
  savedPage?: Maybe<PageEntity>;
}

export const initialState: AdminSettingsPageState = {
};

export const adminSettingsPageReducer = createReducer(
  initialState,

  on(AdminSettingsPageActions.pageSaved, (state, action): AdminSettingsPageState => (
    { ...state, savedPage: action.entity }
  )),
);
