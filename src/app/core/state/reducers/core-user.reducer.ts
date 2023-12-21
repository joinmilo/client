import { createReducer, on } from '@ngrx/store';
import { UserContextEntity } from 'src/app/core/api/generated/schema';
import { Cookie } from 'src/app/core/components/cookie/typings/cookie';
import { CoreUserActions } from '../actions/core-user.actions';

export interface CoreUserState {
  currentUser?: UserContextEntity,
  cookieSettings?: Cookie
}

// export const storedData = localStorage?.getItem(appStateKey);

// export const initialState: CoreUserState = storedData
//   ? JSON.parse(storedData)
//   : { cookieSettings: undefined };

export const initialState: CoreUserState = { cookieSettings: undefined };

export const coreUserReducer = createReducer(
  initialState,

  on(CoreUserActions.getMe, (state, action): CoreUserState => (
    { ...state, currentUser: action.user }
  )),

  on(
    CoreUserActions.logout,
    CoreUserActions.clear,
    (state): CoreUserState => (
      { ...state, currentUser: undefined }
    )
  ),

  on(CoreUserActions.saveCookieSettings, (state, action): CoreUserState => (
    { ...state, cookieSettings: action.cookieSettings }
  )),

  on(CoreUserActions.allowExternalContent, (state): CoreUserState => ({
    ...state,
    cookieSettings: {
      ...state.cookieSettings,
      externalContent: true
    }
  }))

)

