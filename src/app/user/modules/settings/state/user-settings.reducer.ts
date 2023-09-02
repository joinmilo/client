import { createReducer, on } from '@ngrx/store';
import { Maybe, SuburbEntity, UserDeletionTypeEntity } from 'src/app/core/api/generated/schema';
import { UserSettingsActions } from './user-settings.actions';

export interface UserSettingsState {
  deletionTypes?: Maybe<UserDeletionTypeEntity[]>,
  userDeletionDescription?: Maybe<string>,
  selectedUserDeletionTypes?: Maybe<UserDeletionTypeEntity>[],
  suburbs?: Maybe<SuburbEntity[]>,
}

export const initialState: UserSettingsState = {};

export const portalSettingsReducer = createReducer(
  initialState,

  on(UserSettingsActions.setUserDeletionTypes, (state, action): UserSettingsState => (
    { ...state, deletionTypes: action.types }
  )),

  on(UserSettingsActions.saveUserDeletionDescription, (state, action): UserSettingsState => (
    { ...state, userDeletionDescription: action.description }
  )),

  on(UserSettingsActions.saveUserDeletionTypes, (state, action): UserSettingsState => (
    { ...state, selectedUserDeletionTypes: action.types }
  )),

  on(UserSettingsActions.setSuburbs, (state, action): UserSettingsState => (
    { ...state, suburbs: action.result }
  )),
);
