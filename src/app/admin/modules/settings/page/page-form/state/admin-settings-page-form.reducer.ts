import { createReducer, on } from '@ngrx/store';
import { Maybe, PageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageFormActions } from './admin-settings-page-form.actions';


export interface AdminSettingsPageFormState {
  editPage?: Maybe<PageEntity>;
}

export const initialState: AdminSettingsPageFormState = {
};

export const adminSettingsPageFormReducer = createReducer(
  initialState,

  on(
    AdminSettingsPageFormActions.setPage,
    (state, action): AdminSettingsPageFormState => ({
      ...state, editPage: action.page
    })),

  on(
    AdminSettingsPageFormActions.saved,
    AdminSettingsPageFormActions.cancelled,
    (state): AdminSettingsPageFormState => (
      { ...state, editPage: undefined }
    )
  ),
);
