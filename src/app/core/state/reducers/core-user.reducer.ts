import { createReducer, on } from '@ngrx/store';
import { UserContextEntity } from 'src/schema/schema';
import { CoreUserActions } from '../actions/core-user.actions';

export interface CoreUserState {
  currentUser?: UserContextEntity,
  allowThirdPartyContent?: boolean
}

export const initialState: CoreUserState = {
  allowThirdPartyContent: false
};

export const coreUserReducer = createReducer(
  initialState,

  on(CoreUserActions.getMe, (state, action): CoreUserState => (
    { ...state, currentUser: action.user }
  )),

  on(CoreUserActions.logout, (state): CoreUserState => (
    { ...state, currentUser: undefined }
  )),

  on(CoreUserActions.allowExternalContent, (state): CoreUserState => (
    { ...state, allowThirdPartyContent: true}
  ))

);
