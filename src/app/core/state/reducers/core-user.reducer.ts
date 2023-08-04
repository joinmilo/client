import { createReducer, on } from '@ngrx/store';
import { UserContextEntity } from 'src/schema/schema';
import { CoreUserActions } from '../actions/core-user.actions';
import { ExternalContent } from '../../typings/external-content';

export interface CoreUserState {
  currentUser?: UserContextEntity,
  consentExternalContent?: ExternalContent
}

export const initialState: CoreUserState = {
  consentExternalContent: {
    allow: false,
    rememberConsent: false
  }
};

export const coreUserReducer = createReducer(
  initialState,

  on(CoreUserActions.getMe, (state, action): CoreUserState => (
    { ...state, currentUser: action.user }
  )),

  on(CoreUserActions.logout, (state): CoreUserState => (
    { ...state, currentUser: undefined }
  )),

  on(CoreUserActions.allowExternalContent, (state, action): CoreUserState => (
    {...state, consentExternalContent: action.externalContent}
  ))

);
